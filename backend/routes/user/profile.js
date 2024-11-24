const express = require("express");
const {
  checkAuthorizationHeaders,
  authenticateUser,
} = require("../../middlewares/authenticate");
const {
  validateRequestBody,
} = require("../../middlewares/validateRequestBody");
const { updateUserDoc, checkUpdateUserDoc } = require("../../controllers/profile");
const router = express.Router({ mergeParams: true });

router
  .route("/")
  .patch(
    checkAuthorizationHeaders,
    validateRequestBody,
    authenticateUser,

    checkUpdateUserDoc,
    validateRequestBody,

    updateUserDoc
  );

module.exports = router;
