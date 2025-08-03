const mongoose = require('mongoose');

const resultSchema = new mongoose.Schema({
  name: { type: String, required: true },
  score: { type: Number, required: true },
completedAt: { type: String },
duration: { type: String },
});

const Result = mongoose.model('Result', resultSchema);

module.exports = Result;
