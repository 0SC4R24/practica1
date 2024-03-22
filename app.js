const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();

const dbConnect = require("./config/mongo");

dbConnect();

app.use(cors());
app.use(express.json());

const port = process.env.PORT || 3000;

// app.get('/', (req, res) => {
//     res.send('Hello World!');
// });

// app.get('/api', (req, res) => {
//     res.send(JSON.stringify({ message: 'Hello World!' }));
// });

// app.get('/api/:name', (req, res) => {
//     const name = req.params.name;
//     const data = { message: `Hello ${name}!` };

//     if (name === "") {
//         return res.status(400).send({ error: 'Name is required' });
//     }

//     data.adult = (req.query.age > 17) ? true : false;

//     res.send(JSON.stringify(data));
// });

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});