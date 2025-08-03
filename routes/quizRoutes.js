const express = require('express');
const router = express.Router();
const { submitResult, submitQuiz } = require('../controllers/quizController');  // Import the correct functions

// POST route to handle quiz result submission
router.post('/submit', submitResult);  // Use submitResult to handle result saving

// You can keep submitQuiz if needed for another route
// router.post('/submit-quiz', submitQuiz);

module.exports = router;
