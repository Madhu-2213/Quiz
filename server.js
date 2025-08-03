const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const quizRoutes = require('./routes/quizRoutes');
require('dotenv').config();


const app = express();
const PORT = 3200;


mongoose.connect(process.env.MONGO_URI)
	.then(() => console.log('MongoDB connected'))
	.catch((err) => console.error('MongoDB connection error:', err));


app.use(cors());
app.use(express.json());
app.use('/api/quiz', quizRoutes);

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
