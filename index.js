const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/db');
const click = require('./route/click');


const app = express()
const port = 3000
app.use(cors())
app.use(bodyParser.json());

mongoose.connect(config.db, { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection.on('connected', () => {
    console.log("Successful connection to the database")
});

mongoose.connection.on('error', (err) => {
    console.log("Not successful connection to the database" + err)
});

app.get('/', (req, res) => {
  res.send("Home page")
});

app.use('/click', click);


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})