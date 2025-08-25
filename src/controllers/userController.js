import User from '../models/user.js';
export const registerUser = async (req, res) => {
  
  const { username, email, password } = req.body;

  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400);
    throw new Error('User already exists');
  }

  const user = await User.create({ username, email, password });

  if (user) {
    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email
    });
  } else {
    res.status(400);
    throw new Error('Invalid user data');
  }
};

export const getUsers = async (req, res) => {
  

  
  const users = await User.find({}).select('-password'); // Exclude passwords
  res.status(200).json(users);
};