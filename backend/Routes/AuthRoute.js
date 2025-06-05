const { Signup, Login } = require("../Controllers/AuthController");
const { userVerification } = require("../Middlewares/AuthMiddlewares");
const router = require("express").Router();
const passport = require("passport");


router.post("/signup", Signup);
router.post("/login", Login);
router.post("/", userVerification);

// Google OAuth login route
router.get(
  "/auth/google",
  passport.authenticate("google", { scope: ["profile", "email"] })
);

// Google OAuth callback route
router.get(
  "/auth/google/callback",
  passport.authenticate("google", {
    successRedirect: "http://localhost:3000/", // or your desired frontend route
    failureRedirect: "http://localhost:3000/login",
  })
);

// Optional route to get current user
router.get("/auth/user", (req, res) => {
  res.send(req.user);
});


module.exports = router;
