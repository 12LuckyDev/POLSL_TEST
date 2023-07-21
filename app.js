const http = require("http");

const PORT = 4000;

const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.setHeader("Content-Type", "text/plain");
	res.end("Hello POLSL\n");
});

server.listen(PORT, () => {
	console.log(`Server running on port ${PORT}.`);
});
