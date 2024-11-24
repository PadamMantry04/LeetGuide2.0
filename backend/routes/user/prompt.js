const express = require('express');
const { getRecommendedProblems, roastUser } = require('../../controllers/prompt');
const { checkAuthorizationHeaders, authenticateUser } = require('../../middlewares/authenticate');
const { validateRequestBody } = require('../../middlewares/validateRequestBody');
const router = express.Router({mergeParams:true});

router.route('/recommend').get(checkAuthorizationHeaders, validateRequestBody, authenticateUser, getRecommendedProblems);
router.route('/roast').get(checkAuthorizationHeaders, validateRequestBody, authenticateUser, roastUser);

module.exports = router;