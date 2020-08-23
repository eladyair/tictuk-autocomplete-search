const express = require('express');
const cors = require('cors');

const app = express();

// Middlewares
app.use(express.json());
app.use(cors());

// Define Routes
app.use('/api/country', require('./routes/country'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
