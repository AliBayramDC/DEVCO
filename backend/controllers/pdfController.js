const PDFDocument = require('pdfkit');
const fs = require('fs');
const path = require('path');
const { sendEmail } = require('../utils/email');

exports.sendEmailWithPDF = (req, res) => {
  const { sellingPrice, variableCost, fixedCost, result, email, name } = req.body;

  if (!email || !sellingPrice || !variableCost || !fixedCost || !result || !name) {
    console.error('Missing input data', req.body);
    return res.status(400).json({ message: 'Invalid input data' });
  }

  console.log('Using EMAIL_USER:', process.env.EMAIL_USER);
  console.log('Using EMAIL_PASS:', process.env.EMAIL_PASS);

  // Path to the font that supports Azerbaijani characters
  const fontPath = path.join(__dirname, '../fonts/DejaVuSans.ttf'); // Change to the path where you saved the font

  const doc = new PDFDocument();
  const pdfPath = path.join(__dirname, '../pdfs', `${Date.now()}_breakeven.pdf`);
  const writeStream = fs.createWriteStream(pdfPath);
  doc.pipe(writeStream);

  // Registering the font
  doc.font(fontPath); // Use the custom font that supports Azerbaijani

  // Content with dynamic values
  doc
    .fontSize(20)
    .text('Zərərsizlik nöqtəsi (BEP)', { align: 'center' })
    .moveDown();

  doc
    .fontSize(14)
    .text('Zərərsizlik nöqtəsi (BEP) ümumi xərclərin və ümumi gəlirin bərabər olduğu nöqtəni təmsil edən maliyyə anlayışıdır, yəni biznes və ya layihə nə mənfəət əldə edir, nə də zərər verir.')
    .text('Bu, müəssisənin bütün xərclərini ödədiyi satış və ya istehsal səviyyəsidir. Zərərsizlik nöqtəsi müəssisələrə mənfəət əldə etməyə başlamaq üçün nə qədər satmalı olduqlarını anlamağa kömək edir.')
    .moveDown();

  doc
    .fontSize(14)
    .text('Sabit xərclər', { underline: true })
    .text(`Sabit xərclər: ${fixedCost} manat. İcarə, əmək haqqı və sığorta kimi istehsal və ya satış səviyyəsi ilə dəyişməyən xərclərdir.`)
    .moveDown();

  doc
    .fontSize(14)
    .text('Vahid başına düşən satış qiyməti', { underline: true })
    .text(`Bir vahid xidmət/məhsulun satış qiyməti: ${sellingPrice} manat.`)
    .moveDown();

  doc
    .fontSize(14)
    .text('Vahid başına düşən dəyişən xərc', { underline: true })
    .text(`Bir vahid xidmət/məhsul üçün dəyişən xərc: ${variableCost} manat. Buraya materialların, çapın və s. xərcləri daxildir.`)
    .moveDown();

  doc
    .fontSize(14)
    .text('Hesablama:', { underline: true })
    .text(`Zərərsizlik nöqtəsi (Vahid) = Sabit Xərclər / (Vahid başına satış qiyməti – Vahid başına dəyişən xərc)`)
    .text(`Zərərsizlik nöqtəsi (Vahid) = ${fixedCost} / (${sellingPrice} – ${variableCost}) = ${fixedCost} / ${sellingPrice - variableCost} ≈ ${result} vahid.`)
    .moveDown();

  doc
    .fontSize(14)
    .text(`Zərərsizlik nöqtəsinə çatmaq üçün ${result} vahid məhsul və ya xidmət satılmalıdır. Bu nöqtəyə çatıldıqdan sonra mənfəət əldə etməyə başlayacaqsınız. Əgər daha az satılsa, zərər ediləcək.`)
    .moveDown();

  doc.end();

  writeStream.on('finish', () => {
    sendEmail(email, pdfPath, name)
      .then(() => {
        res.status(200).json({ message: 'Email sent successfully' });
        fs.unlink(pdfPath, (err) => {
          if (err) console.error('Failed to delete PDF:', err);
        });
      })
      .catch((error) => {
        console.error('Error sending email:', error);
        res.status(500).json({ message: 'Failed to send email', error: error.message });
      });
  });

  writeStream.on('error', (err) => {
    console.error('Error writing PDF:', err);
    res.status(500).json({ message: 'Failed to generate PDF', error: err.message });
  });
};
