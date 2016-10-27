'use strict';

var fine_uploader_server = require('fine-uploader-server');
var st = require('st');

var app = fine_uploader_server(
    'traditional', {uploads: '.'});
app.use(st('static/', {index: 'index.html'}));

var port = process.argv.length <= 2 ? 8000 : parseInt(process.argv[2]);
app.listen(port);
