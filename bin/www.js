#!/usr/bin/env node
var app = require('../app');//app
//端口

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function () {
    console.log("server start " + server.address().port + "!");
});
