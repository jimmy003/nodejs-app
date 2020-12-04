var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  //   host: 'localhost',
  host: '192.168.1.28',
  port: 2525,
  secure: false, // upgrade later with STARTTLS
  // auth: {
  //   user: "username",
  //   pass: "password"
  // }
});

var mailOptions = {
  from: 'youremail@gmail.com',
  to: 'myfriend@yahoo.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy! huha!',
};

transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
