var express = require('express')
var bodyParser = require('body-parser');
var request = require('request');
var app = express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

function updateClient(){
            var clientServerOptions = {
                uri: 'http://v-kedsounode8cors.azurewebsites.net',
                body: '{"hello" : "world"}',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                }
            }
            request(clientServerOptions, function (error, response) {
                return 
            });
}

app.get('/', function (req, res) {
    console.log("Calling post method ...\n")
    updateClient();
    res.send("Called post method");
})

app.post('/', function (req, res){
    console.log('Receiving data ... from post method');
    console.log('body is ', req.body);
})

var port = process.env.PORT || 3000;
app.listen(port);
console.log('Listening on localhost:'+ port);