const path  = require('path');//require аналог импорта, path библиотека которая указывает путь (адрес пути)
const express = require('express');//express помогает создавать web сервера
const app = express();//app нобор констант который помогает работать с севером

const srcPath = path.join(__dirname, '..', 'build')//__dirname хранит информацию где мы находимся (корневой компонент)

const port = process.env.PORT || 3000;//порт или 3000 или который даст heroku

app.use(express.static(srcPath));

app.get('*', (req, res) => {
    res.sendFile(path.join(srcPath, 'index.html'))
});

app.listen(port, () => {//включить порт
    console.log("SERVER WORKS!!!")
})
