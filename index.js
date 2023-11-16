const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

const fs = require('fs');
const path = require('path');
const wasmBuffer = fs.readFileSync('sdk/hello.wasm');

require('dotenv').config()

// serve up production assets
// app.use(express.static('client/build'));
// let the react app to handle any unknown routes
// serve up the index.html if express does'nt recognize the route

app.use(cors());
app.use(bodyParser.json());


WebAssembly.instantiate(wasmBuffer, {}).then((wasmModule) => {
    // Exported function live under instance.exports
    const { addTwo } = wasmModule.instance.exports;

    app.get('/ShowTitle', (req, res) => {
        res.send({ message: 'Adding Two Numbers' });
    });

    app.post('/Add', (req, res) => {
        console.log(`To call c++ with input from react form: ${ req.body.number1 } , ${ req.body.number2}`);
        res.send({ sum: addTwo(req.body.number1, req.body.number2) });
    });

    app.post('/fileName', (req, res) => {
        res.send({ data: req.body.fileName });
    });
});

// if not in production use the port 5000
let PORT;
process.env.status == 'dev' ?
    PORT = process.env.DEV_PORT : PORT = process.env.PROD_PORT;
console.log('server started on port:', PORT);
app.listen(PORT);
