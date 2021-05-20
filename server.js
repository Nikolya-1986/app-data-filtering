const path  = require('path');
const express = require('express');
const app = express();

const srcPath = path.join(__dirname, '..', 'build')

const port = process.env.PORT || 3000;

app.use(express.static(srcPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(srcPath, 'index.html'))
});

app.listen(port, () => {
    console.log("SERVER WORKS!!!")
})
//git remote show - show reference heroku
//heroku origin - reference
//heroku open
