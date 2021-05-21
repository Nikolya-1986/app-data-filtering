const path  = require('path');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;

app.use(express.static('./dist/data-filtering'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/data-filtering/'}),
);

app.listen(port, () => {
    console.log("SERVER WORKS!!!")
})
//git remote show - show reference heroku
//heroku origin - reference
//heroku open
