var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var morgan = require('morgan');


var port = process.env.PORT || 8080;
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.set('view engine', 'ejs');

app.get('/', function(req, res) {
    res.render("index");
});

app.get('/register', function(req, res) {
    res.render("register");
});

app.use(express.static(__dirname + '/public'));
app.listen(port);
console.log('Magic happens!');
