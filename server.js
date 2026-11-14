
const http = require("http");
const getHomeMessage = require("./app");

const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/plain"
    });

    res.end(getHomeMessage());
});

server.listen(PORT, () => {
    console.log(`E-commerce application running on port ${PORT}`);
});
