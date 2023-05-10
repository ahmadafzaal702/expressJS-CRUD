const fs = require("fs");
const data = JSON.parse(fs.readFileSync("./data.json", "utf-8"));
const users = data.users;

// create new user
exports.createuser = (req, res) => {
  users.push(req.body);
  res.status(201).json(req.body);
};

// get all the users
exports.getusers = (req, res) => {
  res.json(users);
};

// get specific user using ID
exports.getuser = (req, res) => {
  const id = +req.params.id;
  const user = users.find((user) => user.id === id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: "user not found" });
  }
};

// replace user using PUT method
exports.replaceuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex == -1) {
    res.status(404).json({ error: "This user is not found on the server" });
  } else {
    users.splice(userIndex, 1, { ...req.body, id: id });
    res.status(201).json({ message: "user Updated" });
  }
};

// update user using PATCH method
exports.updateuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((user) => user.id === id);
  const user = users[userIndex];

  if (userIndex == -1) {
    res.status(404).json({ error: "This user is not found on the server" });
  } else {
    users.splice(userIndex, 1, { ...user, ...req.body });
    res.status(201).json({ message: "user Updated" });
  }
};

// delete the user
exports.deleteuser = (req, res) => {
  const id = +req.params.id;
  const userIndex = users.findIndex((user) => user.id === id);

  if (userIndex == -1) {
    res.status(404).json({ error: "This user is not found on the server" });
  } else {
    users.splice(userIndex, 1);
    res.status(202).json({ message: "user Deleted" });
  }
};
