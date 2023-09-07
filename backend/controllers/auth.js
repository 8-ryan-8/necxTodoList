import bcryptjs from 'bcryptjs';
import User from '../models/User.js';

export const register = async (req, res) => {
  if (!req.body.name || !req.body.email || !req.body.password) {
    return res.json('required field name, email, password');
  }

  try {
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(req.body.password, salt);

    const newUser = new User({
      name: req.body.name,
      email: req.body.email,
      password: hashedPassword,
    });

    await newUser.save();
    return res.status(201).json('New user Created');
  } catch (err) {
    console.log(err);
    return res.json('server error');
  }
};

export const login = () => {

};
