var express = require('express');
var app = express();
var serv = require('http').Server(app);

app.get('/',function(req, res){
    res.sendFile(__dirname + '/client/index.html');
})
app.use('/client', express.static(__dirname + '/client'));

serv.listen(8080);

//rolar dado
//function rollDice(x){
//    return(round(Math.random*x));
//}

var io = require('socket.io')(serv, {});
io.sockets.on('connection', function(socket){
    console.log('Socket funfando');

    socket.on('rollDice', function(data){
        console.log('Rolou d4 e tirou '+ round(Math.random*data.dice));
    })


})