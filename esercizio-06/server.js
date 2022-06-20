import { createServer } from "node:http";

const server = createServer((req, res) => {
  console.log("request received");

  res.statusCode = 200;

  const mars = JSON.stringify({ location: "Mars" });

  res.setHeader("Content-type", "application/json");

  res.end(mars);
});
server.listen(3003, () => {
  console.log("the server running at http://localhost:3003");
});
