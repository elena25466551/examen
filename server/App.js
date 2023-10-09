const nodemailer = require('nodemailer');

// Configuración del transporte SMTP
const transporter = nodemailer.createTransport({
    service: 'Gmail',  // Utiliza el servicio de Gmail
    auth: {
        user: 'elenacastrodm76@gmail.com',  // Reemplaza con tu dirección de correo de Gmail
        pass: 'Dm655125',  // Reemplaza con tu contraseña de aplicación
    },
});

// Configuración del correo
const mailOptions = {
    from: 'Remitente Anónimo <tu_correo@gmail.com>',  // Reemplaza con el remitente deseado
    to: 'correo_destinatario@gmail.com',  // Reemplaza con la dirección de correo del destinatario
    subject: 'Asunto del correo',
    text: 'Mensaje del correo.',
};

// Envía el correo
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.error('Error al enviar el correo:', error);
    } else {
        console.log('Correo enviado con éxito:', info.response);
    }
});
