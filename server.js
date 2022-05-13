const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3001

const server = http.createServer((req, res) => {
    console.log('start server');
    console.log(req.url, req.method);

    res.setHeader('Content-Type', 'text/html')

    if (req.url === '/') {
        fs.readFile('./test.html', (err, data) => {
            if(err) {
                console.log(err);
                res.end()
            } else {
                console.log(data);
                res.end(data)
            }
        })
    }
})

server.listen(PORT, 'localhost', (error) => {
    error ? console.log(error) : console.log('Started server')
})