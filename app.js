const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/" && req.method === "GET") {
        res.statusCode = 200;
        res.end(
            JSON.stringify({
                message: "Node.js server is running!",
            }),
        );
    } else if (req.url === "/users" && req.method === "GET") {
        res.statusCode = 200;
        res.end(
            JSON.stringify([
                { id: 1, name: "Rahul" },
                { id: 2, name: "Priya" },
            ]),
        );
    } else {
        res.statusCode = 404;
        res.end(
            JSON.stringify({
                message: "Route not found",
            }),
        );
    }
});

if (require.main === module) {
    const PORT = process.env.PORT || 8080;

    server.listen(PORT, () => {
        console.log(`Server running at http://localhost:${PORT}`);
    });
}

module.exports = server;
