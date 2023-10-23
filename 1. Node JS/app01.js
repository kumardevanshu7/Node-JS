// var a = require('./app02')

// console.log(a);

// var a = 1501;

// console.log("hello");

// var data = require('./app02');

// console.log(data.one)

// var oneLInerJoke = require('one-liner-joke');

// console.log(oneLInerJoke.getRandomJoke())

// var figlet = require('figlet')

// figlet("Meri Deepu", function(err, data){
//     if(err){
//         console.log("Something Wrong...")
//         console.dir(err)
//         return;
//     }
//     console.log(data)
// })

const express = require('express')
const app = express()

app.use(function(req, res, next){
    console.log("Hello Deepu")
    next();
})

app.get('/', function (req, res) {
  res.send('Hello World Deepu')
})
app.get('/cat', function (req, res) {
  res.send('Hello World Cat')
})

app.listen(1290)