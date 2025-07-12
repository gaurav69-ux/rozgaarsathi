import dotenv from "dotenv";
dotenv.config({
  path: ".env",
});
import app from "./app.js";
import { connectionDb } from "./db/db.js";
const PORT = process.env.PORT;

connectionDb()
  .then(() => {
    app.on("error", (err) => {
      console.log("Error: " + err);
    });
    app.listen(PORT, () => {
      console.log(`Server started at port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log(err);
  });
