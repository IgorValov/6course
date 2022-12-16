const getUsers = require("../modules/users");

const usersResponse = (req, res) => {
  res.status = 200;
  res.statusMessage = "OK";
  res.header = "Content-type: application/json";
  res.write(getUsers());
  res.end();
};
module.exports = usersResponse;
