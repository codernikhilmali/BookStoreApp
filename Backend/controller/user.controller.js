import User from '../model/user.model.js';
import bcryptjs from 'bcryptjs';

export const signUp = async (req, res) => {
    try {
      const { fullname, email, password } = req.body;
  
      console.log('Request Body:', req.body);
  
      // Check if user already exists
      const user = await User.findOne({ email });
      if (user) {
        return res.status(400).json({ message: 'User already exists' });
      }
  
      const hashPassword = await bcryptjs.hash(password, 10);
  
      const createdUser = new User({
        fullname,
        email,
        password: hashPassword,
      });
      await createdUser.save();
  
      // Return the user data
      res.status(201).json({ _id: createdUser._id, fullname: createdUser.fullname, email: createdUser.email });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  };
  
export const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user by email
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    // Compare passwords
    const isMatch = await bcryptjs.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid username or password' });
    }

    res.status(200).json({ message: 'Login Successful', user: { _id: user._id, fullname: user.fullname, email: user.email } });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};
