'use strict';

var cat = require('./generate-cat.js');
var fs = require('fs');

cat(function (err, buffer) {
  fs.writeFileSync('./output.png', buffer);
});