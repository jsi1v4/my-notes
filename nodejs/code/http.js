const http = require("http");

const host = "localhost";
const port = 3000;

const data = {
  welcome: "Hi there!",
  message: `This is nodejs web server, simple isn't it?.`,
};

const server = http.createServer((req, res, next) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/json");
  res.end(JSON.stringify(data));
});

server.listen(port, host, () => {
  console.log(`Server running at ${host}:${port}`);
});
