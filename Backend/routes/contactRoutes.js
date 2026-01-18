const router = require("express").Router();
const Contact = require("../models/Contact");

router.post("/", async (req, res) => {
  try {
    const newContact = new Contact(req.body);
    await newContact.save();
    res.status(201).json({
  success: true,
  message: "Message sent successfully",
});

  } catch (err) {
   res.status(500).json({
  success: false,
  error: "Server error",
});

  }
});

module.exports = router;
