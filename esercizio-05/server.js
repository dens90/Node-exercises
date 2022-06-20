import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("request received");

  res.statusCode = 200;

  res.setHeader("Content-type", "text/html");

  res.end("<html><body><h1>The loading of server is done</h1></body></html>");
});
server.listen(3002, () => {
  console.log("the server running at http://localhost:3002");
});
