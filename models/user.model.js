import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User name is Required"],
    trim: true,
    minLength: 2,
    maxLength: 50,
  },
  email: {
    type: String,
    required: [true, "User Email is  Required"],
    unique: true,
    trim: true,
    lowercase: true,
    match: [/^\S+@\S+\.\S+$/, "Please fill a Valid Email Address"],
  },
  password: {
    type: String,
    required: [true, "User name Required"],
    minLength: 6,
  },
},{timestamps:true});


const User = mongoose.model('User', userSchema);

export default User;

// {name:diwakar, email:shukladiwakar@gmail.com,password:testttt}