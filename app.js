const express = require("express");
const nodemailer = require("nodemailer");
const path = require("path");
require("dotenv").config();

const app = express();
const port = 3000;

// Middleware
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Mailtrap transporter
let transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST,
  port: process.env.SMTP_PORT,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Home page
app.get("/", (req, res) => {
  res.render("index"); // views/index.ejs
});

// Contact form
app.post("/send", (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).send("❌ Missing required fields");
  }

  let mailOptions = {
    from: email,
    to: "test@portfolio.com",
    subject: `Message from ${name}`,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("❌ Email error:", error);
      return res.status(500).send("Error sending email");
    }
    console.log("✅ Email sent:", info.messageId);
    res.send("✅ Message sent successfully!");
  });
});

app.listen(port, () => {
  console.log(`Server running at http://127.0.0.1:${port}`);
});
