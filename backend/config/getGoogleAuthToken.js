const generateJwtToken = require("../config/generateJWT");
const axios = require("axios");
const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/user");
require("dotenv").config();

const isDateToday = (date) => {
  const inputDate = new Date(date);
  const todaysDate = new Date();
  return inputDate.setHours(0, 0, 0, 0) == todaysDate.setHours(0, 0, 0, 0);
};

exports.userRegisterLogin = asyncHandler(async (req, res) => {
  const url = "https://oauth2.googleapis.com/token";
  const values = {
    code: req.query.code,
    client_id: process.env.OAUTH_CLIENT_ID,
    client_secret: process.env.OAUTH_CLIENT_SECRET,
    redirect_uri: `${process.env.BACKEND_URI}/user/auth/redirect`,
    grant_type: "authorization_code",
  };

  const qs = new URLSearchParams(values);

  const { id_token, access_token } = await axios
    .post(url, qs.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    })
    .then((res) => res.data)
    .catch((error) => {
      return res.json({ message: error.message });
    });

  const googleUser = await axios
    .get(
      `https://www.googleapis.com/oauth2/v1/userinfo?alt=json&access_token=${access_token}`,
      {
        headers: {
          Authorization: `Bearer ${id_token}`,
        },
      }
    )
    .then((res) => res.data)
    .catch((error) => {
      return res.json({ message: error.message });
    });

  const user_exist = await User.findOne({ email: googleUser.email });

  if (user_exist) {
    const last_login_date = user_exist.datesLoggedIn.slice(-1).login_date;
    if (!isDateToday(last_login_date)) {
      await User.findByIdAndUpdate(user_exist._id, {
        $push: {
          datesLoggedIn: {
            login_date: new Date(),
          },
        },
      });
    }
    const token = generateJwtToken({ id: user_exist._id });

    // return res.redirect(process.env.FRONTEND_URI + `/auth/token?code=${token}`);
    return res.json({ message: "User Logged in", data: token });
  }

  const user = await User.create({
    name: googleUser.name,
    email: googleUser.email,
    tips: [],
    datesLoggedIn: [],
  });

  const token = generateJwtToken({ id: user._id });

  // return res.redirect(process.env.FRONTEND_URI + `/auth/token?code=${token}`);
  return res.json({ message: "User Registered", data: token });
});
