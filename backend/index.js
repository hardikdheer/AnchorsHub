const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const {connectMongoDb} = require('./config/config');
const cors = require('cors');


const app = express();


app.use(bodyParser.json());
app.use(cors());



connectMongoDb(process.env.MONGODB ?? "mongodb://127.0.0.1:27017/hardikdheerji").then(() => console.log("MongoDB connected"))


const authRoutes = require('./routes/authRoutes');
const profileRoutes = require('./routes/profileRoutes');
const internshipRoutes = require('./routes/internshipRoutes');

app.use('/auth', authRoutes);
app.use('/profile', profileRoutes);
app.use('/internships', internshipRoutes);


const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});