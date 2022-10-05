// web.js
const http = require("http");
const port = process.env.PORT || 8000;

const requestListener = function (req, res) {
  res.writeHead(200);
  res.end("Ok!");
};
const server = http.createServer(requestListener);
server.listen(port, () => {
  console.log(`Server is listen port:${port}`);
});
