var express = require('express');
app = express();
var exphbs = require('express-handlebars');
var bodyparser = require('body-parser');

app.engine('handlebars', exphbs({
  defaultLayout: 'layout',
  helpers: {
    json: function (context) {
      return JSON.stringify(context);
    }
  }
}));
app.set('view engine', 'handlebars');

app.use(express.static(__dirname + '/public'));
app.use(bodyparser.json());

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/get-started', function(req, res) {
  res.render('getstarted', {
    isGetStartedPage: true
  });
});

app.get('/signed-in', function(req, res) {
  res.render('signedin', {
    isGetStartedPage: true
  });
});

app.get('/profile', function(req, res) {
  res.render('profile', {
    isGetStartedPage: true
  });
});

app.listen(3030, function () {
  console.log('server up on port 3030...');
});
