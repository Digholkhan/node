const registationModel = require("../models/registationModel");
const nodemailer = require("nodemailer");

let registationController = async (req, res) => {
  const { username, email, password } = req.body;

  let user = new registationModel({
    username: username,
    email: email,
    password: password,
  });
  user.save();
  const transporter = nodemailer.createTransport({
  host: "smtp.example.com",
  port: 587,
  secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});
 const info = await transporter.sendMail({
    from: '"Example Team" <team@example.com>', // sender address
    to: "alice@example.com, bob@example.com", // list of recipients
    subject: "Hello", // subject line
    text: "Hello world?", // plain text body
    html: "<b>Hello world?</b>", // HTML body
  });

  console.log("Message sent: %s", info.messageId);
  res.send(user);
};

module.exports = registationController;
