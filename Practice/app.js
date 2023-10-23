// var figlet = require("figlet");

// figlet("Hello Deepu!!", function (err, data) {
//   if (err) {
//     console.log("Something went wrong...");
//     console.dir(err);
//     return;
//   }
//   console.log(data);
// });

// const express = require("express")
// const app = express()

// // middleware
// app.use(function(req, res, next){
//     console.log("Intitiate Connection...")
//     next()
// })

// // directly show in the web page
// app.get('/', function(req, res){
//     res.send("<h1>Server is Connected... Master Sir</h1>")
// });

// // page routing
// app.get('/greet', function(req, res){
//     res.send("<h1>Namaste Sir...</h1>")
// });

// // same path with little changes
// app.get('/profile/:username', function(req, res){
//     res.send(`<h1> Hello ${req.params.username}</h1>`)
// })

// app.get('/profile/:username/:age', function(req, res){
//     res.send(`<h1> Hello ${req.params.username} and her age is ${req.params.age}</h1>`)
// })

// app.listen(7700);


// ----- Real Thing

const express = require('express');
const app = express();

app.set('view engine', 'ejs')
app.use(express.static('./public'))

app.get('/', function(req, res){
    res.render("index")
})

app.get('/errorpage', function (req, res) {
    throw Error("UNDEFINED DEEPOMOEN ERROR");
  });

// error handling
app.use(function errorHandler(err, req, res, next){
    if(res.headersSent){
      return next(err)
    }
    res.status(500)
    res.render('error', {error:err})
  })

app.listen(1234)