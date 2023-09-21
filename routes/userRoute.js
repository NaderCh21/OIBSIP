const express = require("express");
const router = express.Router();
const User = require("../models/userModel"); // Corrected variable name

router.post("/register", async (req, res) => {
  const { name, email, password } = req.body;
  const newUser = new User({ name, email, password });
  try {
    // Use await to wait for the save operation to complete
    await newUser.save(); // Add await here
    res.send("User Registered Successfully");
  } catch (error) {
    return res.status(400).json({ message: error.message }); // Use error.message to get the error message
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await User.find({ email, password });
    if (user.length > 0) {
      const currentUser = {
        name: user[0].name,
        email: user[0].email,
        isAdmin: user[0].isAdmin,
        _id: user[0]._id,
      };
      res.send(currentUser)
    } else {
      return res.status(400).json({ message: "User Login Failed" });
    }
  } catch (error) {
    return res.status(400).json({ message: "Something Went Wrong" });
  }
});

module.exports = router;
