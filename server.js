const express = require('express');
const expressSession = require('express-session');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.engine('mst', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mst');

app.use(express.static('public'));

app.get('/', (req, res) => {
  console.log('Home page was here');
  res.render('home');
});

app.listen(3000, () => {
  console.log('Port 3000 we are go for launch');
});
