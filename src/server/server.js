import express from "express";

const app = express();

app.use(express.json());

app.get("/health", (_, res) => {
  res.status(200).json({ message: "ok" })
})

app.post("/login", (req, res) => {
  const body = req.body;

  // query no banco top
  const user = querynobanco();

  if (bycript.compare(user.password, body.password) && user.name === body.username) {
    return res.status(200).json({ message: "ok" });
  } else {
    return res.status(401).json({ message: "BANIDO" });
  }
})

app.listen(3000);
