var express = require('express');
const mongoose = require('mongoose');
const app = express();
const userRoute = require('./routes/userRoute.js')


app.use(express.json());
app.use('/user', userRoute);

mongoose.connect('mongodb://localhost:27017/tdd');

app.get('/', function(req, res) {
    res.send('Hello World!')
})
app.listen(8000, function() {
})

module.exports = app