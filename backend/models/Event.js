const mongoose = require("mongoose");
const crypto = require("crypto");

const eventSchema = new mongoose.Schema({
  owner: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  title: { type: String, required: true },
  datetime: { type: Date, required: true },
  location: { type: String, required: true },
  description: { type: String },
  shareId: { type: String, index: true, unique: true, sparse: true },
  createdAt: { type: Date, default: Date.now },
});

// Generate a random share ID
eventSchema.methods.generateShareId = function () {
  this.shareId = crypto.randomBytes(6).toString("base64url");
};

module.exports = mongoose.model("Event", eventSchema);
