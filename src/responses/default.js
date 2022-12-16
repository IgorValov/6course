const defaultResponse = (req, res) => {
  res.status = 200;
  res.statusMessage = "OK";
  res.header = "Content-type: text/plain";
  res.write("Hello, World!");
  res.end();
};
module.exports = defaultResponse;
