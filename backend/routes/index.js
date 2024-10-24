const express = require('express');
const { sendEmailWithPDF } = require('../controllers/pdfController');
const router = express.Router();

// POST route to handle email submission and PDF generation
router.post('/send-pdf', sendEmailWithPDF);

module.exports = router;
