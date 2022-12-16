const badRequest = (req, res) => {
  res.statusCode = 500;
  res.statusMessage = "Internal Server Error";
  res.end();
};
module.exports = badRequest;
