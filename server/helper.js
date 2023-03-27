import fs from "fs";

export const readEntries = () => {
  return new Promise((resolve, reject) => {
    fs.readFile("./data.json", (err, data) => {
      if (err) reject(err);
      else {
        resolve(JSON.parse(data.toString()));
      }
    });
  });
};

export const writeEntrie = (posts) => {
  return new Promise((resolve, reject) => {
    fs.writeFile("./data.json", JSON.stringify(posts, null, 2), (err) => {
      if (err) reject(err);
      else resolve("ok");
    });
  });
};

export const appendFile = (newPost) => {
  return new Promise((resolve, reject) => {
    readEntries()
      .then((oldPosts) => {
        const allPosts = [...oldPosts, newPost];
        writeEntrie(allPosts)
          .then((res) => resolve(allPosts))
          .catch((err) => reject(err));
      })
      .catch((err) => reject(err));
  });
};
