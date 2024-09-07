var http = require("http");
var fs = require("fs");
var index = fs.readFileSync("test.html");

const { SerialPort } = require('serialport');
const { ReadlineParser } = require('@serialport/parser-readline');
const port = new SerialPort({ path: 'COM6', baudRate: 9600, dataBits: 8, parity: "none", stopBits: 1, flowControl: false });
const parser = port.pipe(new ReadlineParser({ delimiter: '\r\n' }))
parser.on('data', console.log)

port.pipe(parser);

var app = http.createServer(function (req, res) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(index);
  });

var io = require("socket.io").listen(app);

io.on("connection", function (socket) {
    console.log("Node is listening to port");
  });
  
parser.on("data", function (data) {
    console.log("Received data from port: " + data);
    io.emit("data", data);
  });
  
app.listen(3000);