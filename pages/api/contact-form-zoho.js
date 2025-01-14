// https://www.npmjs.com/package/zeptomail

// For ES6
import { SendMailClient } from "zeptomail";

// For CommonJS
// var { SendMailClient } = require("zeptomail");

async function ContactZoho(req, res) {
  try {
    const body = req.body;
    const url = process.env.ZEPTO_URL;
    const token = process.env.ZEPTO_API_KEY;
    console.log("token", token);
    console.log("body", body);

    let client = new SendMailClient({ url, token });
    client
      .sendMail({
        from: {
          address: "info@littlestarpeds.com", //Valid domain required
          name: "Little Star Pediatrics",
        },
        to: [
          {
            email_address: {
              address: process.env.SEND_TO_EMAIL,
              //   address: "khoshow.developer@gmail.com",
              name: "Contact",
            },
          },
          {
            email_address: {
              address: process.env.SEND_TO_EMAIL2,
              name: "Office",
            },
          },
        ],
        bcc: [
          {
            email_address: {
              address: "khoshow.official@gmail.com",
              name: "Khoshow",
            },
          },
        ],
        reply_to: {
          address: "info@littlestarpeds.com",
          name: "Little Star Pediatrics",
        },

        subject: `Contact form from ${body.name} via website`,
        htmlbody: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; background: #f9f9f9; border: 1px solid #ddd; border-radius: 8px;">
        <p style="text-align: center; color: #808080;">New contact form from ${body.name} via website</p>
        <p><strong>Name:</strong> ${body.name}</p>     
        <p><strong>Email:</strong> ${body.email}</p>
        <p><strong>Phone:</strong> ${body.phone}</p>      
        <p><strong>Message:</strong> ${body.message}</p>
      </div>
    `,
      })
      .then((response) => {
        console.log("Email sent successfully:", response);
        res
          .status(200)
          .json({ success: true, message: "Email sent successfully" });
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        res.status(500).json({
          success: false,
          message: "Failed to send email",
          error: error.message,
        });
      });
  } catch (error) {
    console.error("Error processing request:", error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error.message,
    });
  }
}

export default ContactZoho;
