const http = require('http');
const fs = require('fs');
const url = require('url')

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received\n`;

    console.log('New request received');
    // console.log(req.headers); // You can uncomment this to see request headers
    const myUrl = url.parse(req.url, true);//true enables us to get query params
    console.log(myUrl);
   
    // Append each request log to log.txt file
    fs.appendFile('log.txt', log, (err, data) => {
        

        if (err) {
            console.error("ERROR", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
        }

        // Handle routes
        switch (myUrl.pathname) {
            case '/':
                res.end('Homepage');
                break;
            case '/about':
                const username = myUrl.query.myname;
                res.end(`Hi , ${username}`);
                break;
            
            default:
                res.statusCode = 404;
                res.end('404 not found');
        }
    });
});

myServer.listen(8000, () => {
    console.log('Server running');
});
