const nodemailer = require("nodemailer");
const path = require("path");

// Configure Nodemailer transporter for GreenGeeks email
const transporter = nodemailer.createTransport({
  host: "ams202.greengeeks.net",  // GreenGeeks outgoing hostname
  port: 465,  // Port for SSL
  secure: true,  // Use SSL for port 465
  auth: {
    user: process.env.EMAIL_USER,  // Your full email address (info@devco.az)
    pass: process.env.EMAIL_PASS,  // The password for this email
  },
});

// Function to send an email with the generated PDF as an attachment
exports.sendEmail = (to, pdfPath, name) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,  // Your email address (info@devco.az)
    to,
    subject: "DEVCO-dan Zərərsizlik nöqtəsi (BEP) hesablanması.",
    html: `
      <p style="font-size: 19px;">Hörmətli <strong>${name}</strong>,</p>
      <p style="font-size: 19px;">Zərərsizlik nöqtəsi haqqında izahlı məlumatı özündə əks etdirən <strong>PDF sənədini</strong> bu e-poçta əlavə etdim, lakin getməzdən əvvəl sizə sizin və ya biznesiniz üçün faydalı ola biləcək bəzi əlavə xidmətlərlə tanış etmək istərdim.</p>
      <p><a href="https://www.devco.az" target="_blank"><img src="cid:serviceImage1" alt="Service Image 1" style="width: 100%; max-width: 900px; height: auto;"></a></p>
      <p style="font-size: 19px;">Bu xidmətlərin sizin məqsədlərinizə necə dəyər verə biləcəyini müzakirə etmək üçün zəng və ya video görüş təyin etməkdən məmnun olaram.</p>
      <p style="font-size: 19px;">Hörmətlə,<br><strong>Arzu Bayramov</strong><br><strong>Founder and Director</strong><br><a href="https://www.devco.az" target="_blank" style="color: #0000EE; text-decoration: none; font-size: 19px; font-weight: bold;">DEVCO Training and Consulting</a><br>Tel. +994702240677</p>
    `,
    attachments: [
      {
        filename: "breakeven-report.pdf",
        path: pdfPath,
      },
      {
        filename: "serviceImage1.png",
        path: path.join(__dirname, "../images/Blue and White School Trifold Brochure.png"), // Example image
        cid: "serviceImage1",
      },
    ],
  };

  return new Promise((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        reject(error);
      } else {
        console.log("Email sent: " + info.response);
        resolve(info);
      }
    });
  });
};
