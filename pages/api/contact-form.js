const sgMail = require("@sendgrid/mail");
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

async function QuickQuery(req, res) {
  const body = JSON.parse(req.body);


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
        to: [
          {
            // email: "khoshow@gmail.com",
            email: "info@littlestarpeds.com",
          },
        ],
        cc: [{ email: "adela@littlestarpeds.com",  }],
        bcc: [
          {
            email: "khoshow.official@gmail.com",
          },
        ],
      },
    ],
    from: "info@littlestarpeds.com", // Change to your verified sender
    subject: `Little Star Pediatrics received new contact details from ${body.name} via website.`,
    text: message,
  };

  await sgMail
    .send(msg)
    .then((response) => {
      console.log(response[0].statusCode);
      console.log(response[0].headers);
    })
    .catch((error) => {
      console.error(error);
    });

  return res.status(200).json({ status: "OK" });
}

export default QuickQuery;
