const asyncHandler = require("../middlewares/asyncHandler");
const User = require("../models/user");
const { body } = require("express-validator");

exports.checkUpdateUserDoc = [
  body("leetcode_id").exists().withMessage("leetcode_id is reqquired").bail()
];

exports.updateUserDoc = asyncHandler(async (req, res) => {
  const userId = req.authUser.staticId;
  const { leetcode_id } = req.body;

  const updatedUserDoc = await User.findByIdAndUpdate(userId, {
    $set: {
      leetcode_id: leetcode_id,
    },
  });

  return res.status(200).json({
    message: "User Doc Updated Successfully",
  });
});
