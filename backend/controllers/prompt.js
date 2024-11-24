const asyncHandler = require("../middlewares/asyncHandler");
const axios = require("axios");

// Function to fetch user stats
async function fetchUserStats(leetcode_id) {
  let prompt = "";
  try {
    const response = await axios.get(
      `https://alfa-leetcode-api.onrender.com/skillStats/${leetcode_id}`
    );
    const allproblems =
      response.data.data.matchedUser.tagProblemCounts;

    for (let category in allproblems) {
      let tagsArray = allproblems[category];
      for (let i = 0; i < tagsArray.length; i++) {
        prompt += `${tagsArray[i]["tagName"]}: ${tagsArray[i]["problemsSolved"]}, `;
      }
    }

    const response1 = await axios.get(
      `https://alfa-leetcode-api.onrender.com/${leetcode_id}/solved`
    );
    const typesprob = response1.data.acSubmissionNum;

    for (let types1 in typesprob) {
      prompt += `${typesprob[types1]["difficulty"]}: ${typesprob[types1]["count"]}, `;
    }

    return { prompt, matchedUser: response.data.data.matchedUser };
  } catch (error) {
    console.error("Error fetching user stats:", error);
    throw new Error("Failed to fetch user stats.");
  }
}

// Function to interact with Gemini API
async function generateFromGemini(prompt) {
  try {
    const response = await axios({
      url: `https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent?key=${process.env.GEMINI_API_KEY}`,
      method: "post",
      data: {
        contents: [
          {
            parts: [{ text: prompt }],
          },
        ],
      },
    });
    return response.data;
  } catch (error) {
    console.error("Error interacting with Gemini API:", error);
    throw new Error("Failed to generate response from Gemini.");
  }
}

// Endpoint: Get Recommended Problems
exports.getRecommendedProblems = asyncHandler(async (req, res) => {
  const { leetcode_id } = req.authUser;

  const { prompt, matchedUser } = await fetchUserStats(leetcode_id);
  const recommendationPrompt = `Following are the stats of a leetcode user. Based on his user stats, recommend him top 10 problems as leetcode links to help him improve. ${prompt}`;
  
  const geminiResponse = await generateFromGemini(recommendationPrompt);

  return res.json({
    recommendations: geminiResponse
  });
});

// Endpoint: Roast User
exports.roastUser = asyncHandler(async (req, res) => {
  const { leetcode_id } = req.authUser;

  const { prompt, matchedUser } = await fetchUserStats(leetcode_id);
  const roastPrompt = `Following are the stats of a leetcode user. Based on his user stats, prepare a short one or two liner roast. ${prompt}`;
  
  const geminiResponse = await generateFromGemini(roastPrompt);

  return res.json({
    roast: geminiResponse.recommendations.candidates[0].content.parts[0].text
  });
});

// (module.exports = getRecommendedProblems), roastUser;

// logic to recommend problems here
// also have to develop the logic to roast/guide the user and the logic to display user insights.
// logic to recommend problems here
// also have to develop the logic to roast/guide the user and the logic to display user insights.
// we can also leverage gemini or use some custom logicc (user status wrt everyone) ki what are your strengths and what are your weeknesses