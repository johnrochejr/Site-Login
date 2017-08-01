const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.engine('mst', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mst');

app.use(express.static('public'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

app.get('/login', (req, res) => {
  // res.render('home');
  res.render('login');
});

app.post('/login', (req, res) => {
  // res.render('login');
})

app.listen(3000, () => {
  console.log('Port 3000 we are go for launch');
});
