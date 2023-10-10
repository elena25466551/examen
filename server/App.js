const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.post('/send-email', (req, res) => {
  const { from, to, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'elenacastrodm76@gmail.com',
      pass: 'icmf natz ddbj juas',
    },
  });

  const mailOptions = {
    from: 'elenacastrodm76@gmail.com',
    to,
    subject,
    text: message,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Error al enviar el correo.' });
    } else {
      console.log('Correo enviado: ' + info.response);
      res.json({ message: 'Correo enviado con éxito.' });
    }
  });
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});
