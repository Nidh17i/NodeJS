import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: Number,
    required: true,
    min: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

export const Users = mongoose.model("User", userSchema);
