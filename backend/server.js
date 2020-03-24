const http = require('http');
var express = require('express');
var cors = require('cors');
var app = express();
var covid = require('novelcovid');
app.use(cors());

// app.get('/api/home',(req, res, next)=> {
//     res.writeHead(200);
//     let data = covid.getAll();
//     console.log(data);
//     res.end(JSON.stringify(data));
// });
var errHandler = function(err) {
    console.log(err);
}
app.get('/api/deathsAll',(req, res, next)=> {
    var dataPromise = covid.getAll();
    dataPromise.then(function(result) {
                    res.send(result);
                }, errHandler)
});
app.get('/api/deathsCountry',(req, res, next)=> {
    var dataPromise = covid.getCountry();
    dataPromise.then(function(result) {
                    res.send(result);
                }, errHandler)
});

app.listen(3000);
