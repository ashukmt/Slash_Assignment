const express = require("express");
const { EventModel } = require("../models/Data.model.js");
const EventRouter = express.Router();


EventRouter.post("/addevent", async (req, res) => {
    const {
      name,
      bio
    } = req.body;
  
    const new_event = await new EventModel({
      name,
      bio
    });
    new_event.save();
    res.send({ msg: "event added successfully" });
  });
  
  EventRouter.get("/getevents", async (req, res) => {
    try {
    //   const { position } = req.query;
    //   console.log(position);
    //   if (position) {
    //     const model = await EventModel.find({ position: position });
    //     res.status(200).json(model);
    //   } else {
        const model = await EventModel.find();
        res.status(200).json(model);
    //   }
    } catch (err) {
      console.log(err);
      res.status(500).json({ error: true, msg: "Internal Server Error" });
    }
  });
  
  module.exports = {
    EventRouter,
  };