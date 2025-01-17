const mongoose = require("mongoose");

const OutpassSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  branch: {
    type: String,
    required: false,
  },
  block: {
    type: String,
    required: false,
  },
  parentPhone: {
    type: Number,
    required: false,
  },
  phone: {
    type: Number,
    required: false,
  },
  registrationNo: {
    type: Number,
    required: false,
  },
  roomNo: {
    type: String,
    required: false,
  },
  address1: {
    type: String,
    required: false,
  },
  address2: {
    type: String,
    required: false,
  },
  city: {
    type: String,
    required: false,
  },
  appFormState: {
    type: String,
    required: false,
  },
  zip: {
    type: String,
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  fromDate: {
    type: Date,
    default: Date.now,
  },
  toDate: {
    type: Date,
    default: Date.now,
  },
  applicationDate: {
    type: Date,
    default: Date.now,
  },
  outpassNumber: {
    type: Number,
  },
  outpassStatus: {
    type: String,
    enum: ["applied", "issued", "rejected"],
    default: "applied",
  },
  userId: {
    type: mongoose.Schema.ObjectId,
    ref: "User",
    required: false,
  },
  updatedBy: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Outpass", OutpassSchema);
