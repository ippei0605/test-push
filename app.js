'use strict';

const
  cfenv = require('cfenv'),
  express = require('express'),
  favicon = require('serve-favicon'),
  appEnv = cfenv.getAppEnv(),
  app = express();

app.use(favicon(__dirname + '/public/favicon.ico'));
app.use('/', express.static(__dirname + '/public'));

app.listen(appEnv.port, () => {
  console.log('server starting on ' + appEnv.url);
});