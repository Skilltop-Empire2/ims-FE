const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(bodyParser.json());

app.use(cors());

const database = {
  users: [
    {
      name: "ims",
      email: "ims@gmail.com",
      password: "1234",
    },
  ],
};

app.get("/api", (req, res) => {
  res.json({ users: ["user1", "user2", "user3"] });
});

app.post("/signin", (req, res) => {
  if (
    req.body.email === database.users[0].email &&
    req.body.password === database.users[0].password
  ) {
    res.json("success");
  } else {
    res.status(400).json("error loggin in");
  }
});

app.post("/signup", (req, res) => {
  let prevCount = database.users.length;
  let count = prevCount;
  const { email, name, password } = req.body;

  database.users.push({
    name: name,
    email: email,
    password: password,
  });

  let newCount = database.users.length;
  if ((newCount > count, count++)) {
    res.json("success");
  } else {
    res.status(400).json("error signing up!");
  }
});

app.post("/recover-password", (req, res) => {
  res.json("success");
});

app.listen(8080, () => {
  console.log("app is running on port 8080");
});
