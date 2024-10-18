const nodemailer = require("nodemailer");

async function Contact(req, res) {
  try {
    const body = req.body;

    const message = `
       You got a new message via website! (Contact Form) Please contact the person below who is looking for your service. \r\n \r\n
        Name: ${body.name}\r\n
        Email: ${body.email} \r\n
        Phone:  ${body.phone}\r\n    
        Service:  ${body.message} \r\n 
      `;
    // Create a transporter using Gmail with App Password
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "khoshow.developer@gmail.com", // Your Gmail address
        pass: "ejnj nywc bbbp norg", // Your newly created App Password
      },
    });

    // Define email options
    const mailOptions = {
      from: "khoshow.developer@gmail.com",
      to: process.env.SEND_TO_EMAIL,
      bcc: process.env.SEND_TO_EMAIL_BCC, // Corrected this line
      subject: `Little Star Pediatrics received new contact details from ${body.name} via website.`,
      text: message,
    };

    // Send the email
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return res
          .status(500)
          .json({ message: "Error sending email", error: error.message });
      }

      return res
        .status(200)
        .json({ message: "Email sent successfully", info: info.response });
    });
  } catch (error) {
    console.log("Error processing request:", error);
    return res
      .status(400)
      .json({ message: "Error processing request", error: error.message });
  }
}

export default Contact;
