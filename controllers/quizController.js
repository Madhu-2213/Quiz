const Result = require('../models/Result');

const submitResult = async (req, res) => {
  const { name, score, completedAt, timeTakenInSeconds } = req.body; 

  if (!name || score === undefined) {
    return res.status(400).json({ message: 'Name and score are required.' });
  }

  // ✅ Format current IST time (12-hour)
  const istDateString = new Date().toLocaleString('en-IN', {
    timeZone: 'Asia/Kolkata',
    hour12: true,
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
  });

  // ✅ Convert timeTakenInSeconds to duration format
  const safeSeconds = Math.min(120, timeTakenInSeconds || 120);
  const minutes = Math.floor(safeSeconds / 60);
  const seconds = safeSeconds % 60;
  const duration =
    safeSeconds >= 120
      ? '2 minutes'
      : `${minutes}.${seconds < 10 ? '0' : ''}${seconds} minutes`;

  
  const newResult = new Result({
    name,
    score,
    completedAt: completedAt || istDateString, //  use IST if not passed from frontend
    duration, //
  });

  await newResult.save();

  return res.status(200).json({ message: 'Result saved successfully', result: newResult });
};

module.exports = { submitResult };
