var express = require('express');

const router = express.Router();

const usuarioRoute = require('./routes/userRoute.js')


app.use(express.json());
app.use('/user', userRoute);



app.get('/', function(req, res) {
    res.send('Hello World!')
})
app.listen(8000, function() {
    console.log('Example app listening on port 8000!')
})