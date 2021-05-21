const path  = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static(__dirname + '/dist/data-filtering'));

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname + '/dist/data-filtering/index.html'))
});

app.listen(port, () => {
    console.log("SERVER WORKS!!!")
})
//git remote show - show reference heroku
//heroku origin - reference
//heroku open
