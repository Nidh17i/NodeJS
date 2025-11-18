import express from "express";

const app = express();

app.use(express.json());

let users = [
  { id: 1, name: "Push" },
  { id: 2, name: "Pop" },
];

app.post("/users", (req, res) => {
  const { name } = req.body;
  const newUser = {
    id: users.length + 1,
    name: name,
  };
  users.push(newUser);
  res.status(201).json(newUser);
});

app.get("/users", (req, res) => {
  res.json(users);
});

app.put("/users/:id", (req, res) => {
  const { name } = req.body;
  const user = users.find((u) => u.id == req.params.id);
  if (!user) res.status(404).json({ message: "User not found" });

  user.name = name || user.name;
  res.json(user);
});

app.get("/users/:id", (req, res) => {
  const user = users.find((u) => u.id == req.params.id);
  if (!user) res.status(404).json({ message: "user not found" });

  res.json(user);
});

app.delete("/users/:id", (req, res) => {
  users = users.filter((u) => u.id != Number(req.params.id));
  res.json({ message: "User Deleted!" });
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`server runnning PORT: ${PORT}`);
});
