function helloNameResponse(req, res, name) {
  if (name) {
    res.status = 200;
    res.statusMessage = "OK";
    res.header = "Content-type: text/plain";
    res.write(`Hello, ${name}`);
    res.end();
  } else {
    res.status = 400;
    res.statusMessage = "Enter a name";
    res.header = "Content-type: text/plain";
    res.write("Enter a name");
    res.end();
  }
}

module.exports = helloNameResponse;
