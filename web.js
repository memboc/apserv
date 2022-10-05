// web.js
const http = require("http");
const host = 'localhost';
const port = process.env.PORT || 80;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Ok!");
};
const server = http.createServer(requestListener);
server.listen(port, host, () => {
  console.log(`Server is running on http://${host}:${port}`);
});
