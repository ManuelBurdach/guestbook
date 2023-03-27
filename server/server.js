import express from "express";
import morgan from "morgan";
import cors from "cors";

const backendServer = express();
const PORT = 7777;
const posts = [];

backendServer.use(morgan("dev"));
backendServer.use(cors({ origin: "http://localhost:5173" }));
backendServer.use(express.json());

backendServer.get("/getPosts", (req, res) => {
  res.json(posts);
});

backendServer.post("/postPost", (req, res) => {
  posts.push(req.body);
  console.log(posts);
  res.json(posts);
});

backendServer.listen(PORT, () => {
  console.log("Server starts on port: ", PORT);
});
