import mongoose from 'mongoose';
// import bcrypt from 'bcryptjs';


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,

  },
  password: {
      type: String,
    required: true,
    unique: true,
  },
  email: {
      type: String,
    required: true,
    unique: true,
  },
  createdAt: { type: Date, default: Date.now }
})
export default mongoose.model("User", userSchema)