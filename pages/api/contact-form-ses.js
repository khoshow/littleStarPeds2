const AWS = require("aws-sdk");

// async function Contact(req, res) {
//   const { title, body } = req.body; // Extract data from the request body
//   console.log("body", req.body);

//   try {
//     return "hi";
//   } catch (error) {
//     console.error("Error sending message:", error);
//     res.status(500).send({ success: false, error: error.message });
//   }
// }

// Configure AWS SES with your region and credentials
AWS.config.update({
  region: "us-east-1", // Your SES region
  accessKeyId: process.env.AWS_ACCESS_KEY_ID, // Replace with your access key khoshow.official
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, // Replace with your secret access key
});

// Create an SES instance
const ses = new AWS.SES({ apiVersion: "2010-12-01" });

// Function to send email
async function sendFormEmail(req, res) {
  console.log("Body", req.body);
  const body = req.body;
  console.log("send", process.env.SEND_TO_EMAIL);
  console.log("bcc", process.env.SEND_TO_EMAIL_BCC);
  console.log("dfgd", process.env.AWS_ACCESS_KEY_ID);

  const params = {
    Destination: {
      ToAddresses: ["khoshow.developer@gmail.com"],
    },
    Message: {
      Body: {
        Html: {
          Data: `<html>
            <head>
              <style>
                body { font-family: Arial, sans-serif; line-height: 1.6; }
                .header { background-color: #f4f4f4; padding: 10px; }
                .content { padding: 20px; }
                .footer { font-size: 12px; color: #777; }
              </style>
            </head>
            <body>
              <div class="header">
                <h2>You got a new message via website! (Contact Form) Please contact the person below who is looking for your service.</h2>
              </div>
              <div class="content">
              
              <table border="1" cellpadding="5" cellspacing="0">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Service</th>
      
                    </tr>
                </thead>
                <tbody>                
                        <tr>
                          <td>${body.name}</td>
                          <td>${body.email}</td>
                          <td>${body.phone}</td>
                          <td>${body.message}</td>
                          </tr>
                    
                </tbody>
              </table>
              </div>
            
            </body>
          </html>`,
          Charset: "UTF-8",
        },
      },
      Subject: {
        Data: `Little Star Pediatrics received new contact details from ${body.name} via website.`,
        Charset: "UTF-8",
      },
    },
    Source: "khoshow.developer@gmail.com", // Replace with your verified sender email
  };

  try {
    const data = await ses.sendEmail(params).promise();

    return res.status(200).json({
      success: true,
      message: "Email sent successfully",
      data: data,
    });
  } catch (error) {
    console.error("Error sending email:", error);
  }
}

// Example usage
export default sendFormEmail;
