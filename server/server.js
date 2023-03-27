import express from "express";
import morgan from "morgan";
import cors from "cors";
import { readEntries, writeEntrie, appendFile } from "./helper.js";

const backendServer = express();
const PORT = 7777;

backendServer.use(morgan("dev"));
backendServer.use(express.json());
backendServer.use(cors({ origin: "http://localhost:5173" }));

backendServer.get("/getPosts", (req, res) => {
  readEntries()
    .then((posts) => res.json(posts))
    .catch((err) => console.log(err));
});

backendServer.post("/postPost", (req, res) => {
  appendFile(req.body)
    .then((posts) => res.json(posts))
    .catch(() => console.log(err));
});

backendServer.listen(PORT, () => {
  console.log("Server starts on port: ", PORT);
});
