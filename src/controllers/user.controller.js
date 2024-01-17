// Please don't change the pre-written code
// Import the necessary modules here

import { registerUser, authenticateUser, users } from '../models/user.model.js';

export default class UserController {
  getRegister = (req, res, next) => {
    // i) GET route for user registration
    res.render('user-register'); // Assuming the view file is named "user-register.ejs"
  };

  getLogin = (req, res, next) => {
    // iii) GET route for user login
    res.render('user-login'); // Assuming the view file is named "user-login.ejs"
  };

  addUser = (req, res) => {
    // ii) POST route for user registration
    const { name, email, password } = req.body;
    const newUser = { id: users.length + 1, name, email, password };

    registerUser(newUser);
    res.redirect('/login'); // Redirect to the login page after successful registration
  };

  loginUser = (req, res) => {
    // iv) POST route for user login
    const { email, password } = req.body;
    const reqUser = { email, password };

    if (authenticateUser(reqUser)) {
      res.json({ success: true, message: 'Login successful' });
    } else {
      res.json({ success: false, message: 'Login failed' });
    }
  };
}
