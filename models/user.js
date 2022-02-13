import mongoose from "mongoose";

const Schema = new mongoose.Schema(
  {
    email: String,
    password: String,
  },
  { createdAt: "created_at", updatedAt: "updated_at" }
);

const users = mongoose.model("users", Schema);
module.exports = users;
