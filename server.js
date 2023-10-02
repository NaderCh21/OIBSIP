const express = require("express");
const Pizza = require("./models/pizzaModel");
const app = express();
const db = require("./db.js");
app.use(express.json());

const pizzasRoute = require("./routes/pizzasRoute");
const userRoute = require("./routes/userRoute");
const ordersRoute = require("./routes/ordersRoute");

app.use("/api/pizzas/", pizzasRoute);
app.use("/api/users/", userRoute);
app.use("/api/orders/", ordersRoute);

// Middleware to check if a user is an admin
function isAdmin(req, res, next) {
  if (req.user && req.user.isAdmin) {
    return next();
  }
  res.status(403).json({ message: "Access denied. Admins only." });
}

// Admin page route
app.get("/admin", isAdmin, (req, res) => {
  // Handle the admin page rendering or sending data here
});

// Admin API endpoints for user management (fetching users, updating user data, etc.)
app.get("/api/admin/users", isAdmin, (req, res) => {
  // Implement logic to fetch users from the database
});

app.put("/api/admin/users/:id", isAdmin, (req, res) => {
  // Implement logic to update user data based on the provided ID
});

app.delete("/api/admin/users/:id", isAdmin, (req, res) => {
  // Implement logic to delete a user based on the provided ID
});

app.get("/", (req, res) => {
  res.send("Server Working!");
});

const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server running on port ${port}`));
