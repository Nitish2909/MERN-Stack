const express = require("express");
const router = express.Router();
const { body, validationResult } = require("express-validator");

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/register",
    body('email').trim().isEmail(),
    body('password').trim().isLength({min:5}),
    body('username').trim().isLength({min:5}),
     (req, res) => {
    
  console.log(req.body);
  res.send("user register");
});

module.exports = router;
