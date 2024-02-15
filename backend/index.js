const express = require("express");
const cors = require("cors");
const { EventRouter } = require("./routes/Event.router");
const { connection } = require("./config/db");

require("dotenv").config();

const app = express();

app.use(express.json());

app.use(
    cors({
      origin: "*",
    })
  );

  app.get("/", (req, res) => {
    res.send("this is base api");
  });

  app.use("/event", EventRouter);

  app.listen(process.env.PORT, async () => {
    try {
      await connection;
      console.log("connected to db successfully");
    } catch (err) {
      console.log(err);
    }
    console.log(`Listening on port ${process.env.PORT}`);
  });


