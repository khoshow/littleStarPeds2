const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function QuickQuery(req, res) {
  try {
    const body = JSON.parse(req.body); // Assuming body-parser middleware is used
    const toEmail = process.env.emailSendTo;
    const ccEmail = process.env.emailSendToCC;
    const bccEmail = process.env.emailSendToBCC;



    const message = `
       You got a new message via website! (Contact Form) Please contact the person below who is looking for your service. \r\n \r\n
        Name: ${body.name}\r\n
        Email: ${body.email} \r\n
        Phone:  ${body.phone}\r\n    
        Service:  ${body.message} \r\n 
      `;

    const msg = {
      personalizations: [
        {
          to: [{ email: toEmail }],
          cc: [{ email: ccEmail }],
          bcc: [{ email: bccEmail }],
        },
      ],
      from: "info@littlestarpeds.com", // Change to your verified sender
      subject: `Little Star Pediatrics received new contact details from ${body.name} via website.`,
      text: message,
    };

    const response = await sgMail.send(msg);

    return res.status(200).json({ status: "OK" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ status: "Error", message: error.message });
  }
}

export default QuickQuery;
