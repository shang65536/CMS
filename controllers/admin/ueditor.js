var bodyParser = require('body-parser');
var ueditor = require("ueditor");
var express = require('express');
var app = express();
app.use(bodyParser.urlencoded({
  extended: true
}))
app.use(bodyParser.json());

exports.ueditor = function(req, res, callback) {

}