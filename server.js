const express = require('express');
const session = require('express-session');
const mustacheExpress = require('mustache-express');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

const app = express();

app.use(express.static('public'));

app.engine('mst', mustacheExpress());
app.set('views', './views');
app.set('view engine', 'mst');

// let users = {
//   users: [
//     { id: 0, userName: 'user0', passWord: 'password0' },
//     { id: 1, userName: 'user1', passWord: 'password1' }
//   ]
// }

// Process:
// Client requests secure resource
// Server requests username and password
// Client sends username and password
// Server returns requested resource

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


const authenticate = (req, res, next) => {

  if (req.query.userName === "username" && req.query.passWord === "password") {
    next();
  } else {
    res.redirect('login')
  }
}

app.get('/login', (req, res) => {
  // res.render('home');
  res.render('login');
});

app.use(authenticate);
app.get('/', (req, res) => {
  res.render('home');
})

app.listen(3000, () => {
  console.log('Port 3000 we are go for launch');
});
