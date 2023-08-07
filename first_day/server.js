const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {

    // send html file

    res.setHeader("Content-Type", "text/html")

    let path = '../views/';

    switch (req.url) {
        case "/":
            path += 'index.html';
            res.statusCode = 200;
            break;
        case "/about":
            path += 'about.html';
            res.statusCode = 200;
            break;
        case "/about-me":
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
            break;

        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.error(err);
            res.end();

        }

        // res.write(data); // also valid
        res.end(data); // also valid
    })

})

const PORT = process.env.PORT || 8000

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
})  