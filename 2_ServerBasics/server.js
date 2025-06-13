const http = require('http');
const fs = require('fs');

const myServer = http.createServer((req, res) => {
    const log = `${Date.now()}: ${req.url} New request received\n`;

    console.log('New request received');
    // console.log(req.headers); // You can uncomment this to see request headers

    // Append each request log to log.txt file
    fs.appendFile('log.txt', log, (err, data) => {
        // if(err) console.log("ERROR", err);
        // else console.log("Hello from server again")

        if (err) {
            console.error("ERROR", err);
            res.statusCode = 500;
            res.end("Internal Server Error");
            return;
        }

        // Handle routes
        switch (req.url) {
            case '/':
                res.end('Homepage');
                break;
            case '/about':
                res.end('I am Nabin Sharma');
                break;
            default:
                res.statusCode = 404;
                res.end('404 not found');
        }
    });

    /*
    Example headers:
    {
      host: 'localhost:8000',
      connection: 'keep-alive',
      'cache-control': 'max-age=0',
      'sec-ch-ua': '"Google Chrome";v="137", "Chromium";v="137", "Not/A)Brand";v="24"',
      'sec-ch-ua-mobile': '?0',
      'sec-ch-ua-platform': '"Windows"',
      'upgrade-insecure-requests': '1',
      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/137.0.0.0 Safari/537.36',
      accept: 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,
    }
    */

    
});

myServer.listen(8000, () => {
    console.log('Server running');
});
