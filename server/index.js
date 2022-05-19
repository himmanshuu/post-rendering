import fetch from "node-fetch";
import express from "express";
import cors from "cors";
const app = express();
const port = 8080;
app.use(cors());
app.get("/", (req, res) => {
  fetch("https://api.xcess.cloud/users/feed?limit=15&page=1", {
    headers: {
      method: "GET",
      "Access-Control-Allow-Origin": "*",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InVkYXlAaHlkLmh5ZCIsIm5hbWUiOiJKb2huIERvZSIsImlhdCI6MTUxNjIzOTAyMn0.jVAWWrvQ6gQOQbmonmL8Fbl_l0tfwksW6L20wlUcMhY",
    },
  })
    .then((result) => result.json())
    .then((response) => {
      console.log("Response", response);
      res.json(response);
    });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
