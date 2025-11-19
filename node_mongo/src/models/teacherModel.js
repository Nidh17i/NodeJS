import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  name: {
    type: String,
   
  },
  subject: {
    type: String,
  
  
  },
  age: {
    type: Number,
   
    min: 5,
  },
 
});

export const Teachers = mongoose.model("Teacher", userSchema);
