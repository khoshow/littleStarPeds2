const nodemailer = require("nodemailer");
const path = require("path");
const PDFDocument = require("pdfkit");
const fs = require("fs");

var today = new Date();
var dd = String(today.getDate()).padStart(2, "0");
var mm = String(today.getMonth() + 1).padStart(2, "0");
var yyyy = today.getFullYear();
today = mm + "/" + dd + "/" + yyyy;

const submitRegistration = (req, res) => {
  const dataDir = path.join(__dirname, "..", "data");
  if (!fs.existsSync(dataDir)) {
    fs.mkdirSync(dataDir); // Create the directory if it doesn't exist
  }

  const filepath = path.join(dataDir, "attachment.pdf");
  const doc = new PDFDocument();

  // Pipe to write the PDF file
  const pdfStream = fs.createWriteStream(filepath);
  doc.pipe(pdfStream);

  // Generate the PDF content
  doc.image("public/images/myImages/logo.png", 50, 60, {
    fit: [150, 150],
    align: "left",
    height: 40,
  });
  doc
    .text("10575 W. Indian School Rd. Suite E-103", { align: "right" })
    .text("Avondale, Arizona 85392 ", { align: "right" })
    .text("Phone: (480) 747-0045", { align: "right" })
    .text("Fax: (480) 454-4115", { align: "right" })
    .moveDown(0.8);
  doc
    .text(
      "_____________________________________________________________________",
      { align: "center" }
    )
    .moveDown(0.8);
  doc.on("pageAdded", () =>
    doc.image("public/images/myImages/logo.png", 50, 60, {
      fit: [150, 150],
      align: "left",
      height: 40,
    })
  );
  doc.on("pageAdded", () =>
    doc
      .text("10575 W. Indian School Rd. Suite E-103", { align: "right" })
      .text("Avondale, Arizona 85392 ", { align: "right" })
      .text("Phone: (480) 747-0045", { align: "right" })
      .text("Fax: (480) 454-4115", { align: "right" })
      .moveDown(0.8)
      .text(
        "_____________________________________________________________________",
        { align: "center" }
      )
      .moveDown(0.8)
  );
  doc.fontSize(20);
  doc.text("Registration Form", { align: "center" }).moveDown(0.8);
  doc.fontSize(12);
  doc.text(
    "Date:  " +
      today +
      "                                                         " +
      "Heard about us from:  " +
      req.body.comeToKnow
  );
  // doc.text("Referred By:  " + req.body.referredBy, { align: "right" });
  doc.moveDown(0.8);
  doc.text("PATIENT INFORMATION", { align: "center", underline: true });
  doc.fontSize(12);
  doc.moveDown(0.8);
  // if (typeof req.body.middleName === "undefined") {
  //   req.body.middleName = " ";
  //   var x = req.body.middleName;
  // } else {
  //   req.body.middleName = " " + req.body.middleName;
  //   var x = req.body.middleName;
  // }

  doc.text("Name:" + " " + req.body.firstName + " " + req.body.lastName);
  doc.moveDown(0.8);
  doc.text(
    "Birth Date:  " +
      req.body.patientDOB +
      "                         " +
      "Age:  " +
      " " +
      req.body.patientAge +
      "                         " +
      "Sex:  " +
      req.body.patientSex
  );
  doc.moveDown(0.8);
  // doc.text("Age:  " + req.body.patientAge)
  // doc.text("Sex:  :" + " " + req.body.patientSex)
  doc.text("Address:  " + req.body.inputAddress + req.body.inputAddress2);
  doc.text(
    "                 " +
      req.body.inputCity +
      ", " +
      req.body.inputState +
      "," +
      req.body.inputZip
  );
  doc.moveDown(0.8);
  doc.text(
    "Primary Phone No.:  " +
      req.body.phone1 +
      "                              " +
      "Emergency Contact No. " +
      req.body.phone2
  );
  doc.moveDown(0.8);
  doc.text("Guardian email address:  " + req.body.email);
  doc.moveDown(0.8);
  doc.text("Generated form received at:  " + req.body.email2);

  // Reason for Visit
  // doc.moveDown(.8);
  // doc.fontSize(12);
  // doc.text("Preferred Clinic Location:  " + req.body.preferredLocation);

  doc.moveDown(0.8);
  doc.fontSize(12);
  doc.text("REASON FOR VISIT:  " + req.body.visitPurpose);

  // INSURANCE INFORMATION

  doc.moveDown(2);
  doc.fontSize(12);
  doc.text("INSURANCE INFORMATION", { align: "center", underline: true });
  doc.text("(Please give your insurance card(s)and ID to the receptionist.)", {
    align: "center",
  });
  doc.moveDown(0.8);
  doc.text("Insurance Name:  " + req.body.insuranceName);
  doc.moveDown(0.8);
  doc.text("Insurance ID No.  " + req.body.insuranceID);
  doc.moveDown(0.8);
  doc.text("Group No.:  " + req.body.groupNo);
  doc.moveDown(0.8);
  doc.text("Subscriber's Name:  " + req.body.subscriberName);
  doc.moveDown(0.8);
  doc.text("Subscriber's DOB:  " + req.body.subscriberDob);
  doc.moveDown(0.8);
  doc.text(
    "Patient Relationship to subscriber:  " + req.body.subscriberRelation
  );

  doc.moveDown(2);
  doc.text("PHARMACY INFORMATION", { align: "center", underline: "true" });
  doc.moveDown(0.8);
  doc.text("Pharmacy Name:  " + req.body.pharmacyName);
  doc.moveDown(0.8);
  doc.text("Pharmacy Address.:  " + req.body.pharmacyAddress);

  doc.moveDown(2);
  doc.text("EMERGENCY CONTACT", { align: "center", underline: "true" });
  doc.moveDown(0.8);
  doc.text(
    "Name:  " +
      req.body.authorizedPerson1 +
      "                  " +
      "Relationship to patient:  " +
      req.body.authorizedRelationship
  );
  doc.moveDown(0.8);
  doc.text("Phone No.:  " + req.body.authorizedPhone1);

  doc.moveDown(4);
  doc.text(
    "Signed and Agreed by:  " + req.body.iSign
    // +
    // "                     " +
    // "Date:  " +
    // req.body.signedDate
  );

  doc.moveDown(2);

  doc.moveDown(8);
  doc.text(
    "Life, love, and laughter, what priceless gifts to give our children.",
    { align: "center" }
  );
  doc.text("-Phyllis Dryden", { align: "center" });
  // Add the rest of your PDF content here...
  doc.end();

  // Wait for PDF stream to finish writing
  pdfStream.on("finish", () => {
    // Nodemailer configuration
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "khoshow.developer@gmail.com", // Replace with your Gmail address
        pass: "ejnj nywc bbbp norg", // Replace with your Gmail app password
      },
    });

    // Define email options
    const mailOptions = {
      from: "khoshow.developer@gmail.com",
      to: process.env.SEND_TO_EMAIL,
      bcc: process.env.SEND_TO_EMAIL_BCC,
      subject: "Little Star Peds new Registration from ",
      text:
        "Little Star Peds new Registration from " +
        req.body.firstName +
        " via littlestarpeds.com.",
      attachments: [
        {
          filename: "attachment.pdf", // Name of the PDF attachment
          path: filepath, // Path to the PDF file
        },
      ],
    };

    // Send email with PDF attachment
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
        return res.status(500).json({ message: "Error sending email" });
      }

      res
        .status(200)
        .json({ message: "Email sent successfully with PDF attachment" });

      // Optionally, delete the generated PDF after sending the email
      fs.unlink(filepath, (err) => {
        if (err) {
          console.error("Error deleting PDF:", err);
        } else {
          console.log("PDF deleted successfully");
        }
      });
    });
  });

  // Handle errors in PDF generation
  pdfStream.on("error", (err) => {
    console.error("Error creating PDF:", err);
    return res.status(500).json({ message: "Error generating PDF" });
  });
};

module.exports = submitRegistration;
