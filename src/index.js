const http = require("http");
const helloNameResponse = require("./responses/hello-name");
const usersResponse = require("./responses/users");
const badRequest = require("./responses/bad-request");
const defaultResponse = require("./responses/default");

const server = http.createServer((req, res) => {
  const url = new URL(req.url, "http://127.0.0.1");
  const params = url.searchParams;
  const isHelloParam = params.has("hello");

  if (isHelloParam) {
    const name = params.get("hello");
    helloNameResponse(req, res, name);
    return;
  }
  if (req.url === "/users") {
    usersResponse(req, res);
    return;
  }
  if (req.url.length > 1) {
    badRequest(req, res);
    return;
  }
  if (req.url === "/") {
    defaultResponse(req, res);
  }
});

const PORT = 3003;

server.listen(PORT, () => {
  console.log(`server started at http://127.0.0.1:${PORT}`);
});
