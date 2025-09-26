const { validationResult } = require("express-validator");
const Event = require("../models/Event");

exports.createEvent = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) return res.status(400).json({ errors: errors.array() });

  const { title, datetime, location, description, makePublic } = req.body;

  try {
    const event = new Event({
      owner: req.user._id,
      title,
      datetime: new Date(datetime),
      location,
      description,
    });

    if (makePublic) event.generateShareId();

    await event.save();
    res.status(201).json({ event });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getEvents = async (req, res) => {
  const { filter } = req.query;
  const now = new Date();

  let query = { owner: req.user._id };
  if (filter === "upcoming") query.datetime = { $gte: now };
  if (filter === "past") query.datetime = { $lt: now };

  try {
    const events = await Event.find(query).sort({ datetime: 1 }).lean();
    res.json({ events });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getEvent = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    if (!event.owner.equals(req.user._id)) return res.status(403).json({ error: "Not authorized" });
    res.json({ event });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.getPublicEvent = async (req, res) => {
  try {
    const event = await Event.findOne({ shareId: req.params.shareId }).lean();
    if (!event) return res.status(404).json({ error: "Public event not found" });

    const publicEvent = {
      id: event._id,
      title: event.title,
      datetime: event.datetime,
      location: event.location,
      description: event.description,
      createdAt: event.createdAt,
    };

    res.json({ event: publicEvent });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};

exports.toggleShare = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });
    if (!event.owner.equals(req.user._id)) return res.status(403).json({ error: "Not authorized" });

    if (event.shareId) {
      event.shareId = undefined; // revoke
    } else {
      event.generateShareId();
    }

    await event.save();
    res.json({ event });
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
};
