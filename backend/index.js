const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const authRouter = require('./Routes/AuthRouter'); // Import the AuthRouter


require('dotenv').config();
require('./Models/db'); // Ensure the database connection is established
const PORT = process.env.PORT || 8080;


app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRouter); // Use the AuthRouter for authentication routes



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});