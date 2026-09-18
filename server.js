const http = require("http");

const server = http.createServer((req, res) => {
    res.setHeader("Content-Type", "application/json");

    if (req.url === "/api/services" && req.method === "GET") {
        res.writeHead(200);
        res.end(JSON.stringify({
            success: true,
            services: [
                {
                    id: "SVC001",
                    name: "Birth Certificate"
                },
                {
                    id: "SVC002",
                    name: "Income Certificate"
                },
                {
                    id: "SVC003",
                    name: "Residence Certificate"
                }
            ]
        }));
    } else {
        res.writeHead(404);
        res.end(JSON.stringify({
            success: false,
            message: "API endpoint not found"
        }));
    }
});

server.listen(3000, () => {
    console.log("Backend server running on port 3000");
});