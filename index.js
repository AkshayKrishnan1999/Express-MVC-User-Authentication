// Please don't change the pre-written code
// Import the necessary modules here

import express, { urlencoded } from "express";
import path from "path";
import expressEjsLayouts from "express-ejs-layouts";
import UserController from "./src/controllers/user.controller.js"; // Import the UserController

const app = express();

app.use(express.json());
app.use(urlencoded({ extended: true }));

app.use(expressEjsLayouts);
app.set("view engine", "ejs");
app.set("views", path.resolve("src", "views"));

// Create routes here
const userController = new UserController();

// i) GET route for user registration
app.get('/register', userController.getRegister);

// ii) POST route for user registration
app.post('/register', userController.addUser);

// iii) GET route for user login
app.get('/login', userController.getLogin);

// iv) POST route for user login
app.post('/login', userController.loginUser);

export default app;
