const
  express = require('express'),
  favicon = require('serve-favicon'),
  app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use('/', express.static(__dirname + '/public'));

app.listen(3000);