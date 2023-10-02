const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");
const User = require("../models/userModel");

// Registration route (for both user and admin)
router.post(
  "/register",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Invalid email address"),
    body("password")
      .isLength({ min: 6 })
      .withMessage("Password must be at least 6 characters long"),
    body("isAdmin").isBoolean().withMessage("isAdmin must be a boolean"),
    body("secretKey")
      .custom((value, { req }) => {
        // Check the secret key if isAdmin is true
        if (req.body.isAdmin && value !== "78978167") {
          throw new Error("Admin registration failed. Incorrect secret key.");
        }
        return true;
      })
      .optional(),
  ],
  async (req, res) => {
    // Check for validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, isAdmin } = req.body;

    try {
      // Check if the email already exists in the database
      const existingUser = await User.findOne({ email });

      if (existingUser) {
        return res.status(400).json({ message: "Email already registered" });
      }

      // Create a new user with isAdmin field set appropriately
      const newUser = new User({ name, email, password, isAdmin });

      await newUser.save();

      res.status(201).json({ message: "User Registered Successfully" });
    } catch (error) {
      return res.status(500).json({ message: "Something Went Wrong" });
    }
  }
);

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.findOne({ email, password });
    if (user) {
      const currentUser = {
        name: user.name,
        email: user.email,
        isAdmin: user.isAdmin,
        _id: user._id,
      };
      res.json(currentUser);
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(500).json({ message: "Something Went Wrong" });
  }
});

// New route to fetch all users
router.get("/", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: "Internal Server Error" });
  }
});

// Delete user route
router.delete("/:id", async (req, res) => {
  try {
    // Get the user ID from the request parameters
    const userId = req.params.id;
    // Perform the user deletion logic (e.g., using User.findByIdAndDelete)
    // ...
    // Send a success response
    res.status(200).json({ message: "User deleted successfully" });
  } catch (error) {
    // Handle errors and send an error response if needed
    res.status(500).json({ message: "Internal Server Error" });
  }
});


module.exports = router;


