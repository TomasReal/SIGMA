// import express from 'express';
// import nodemailer from 'nodemailer';
// import cors from 'cors';
// import dotenv from 'dotenv';

// dotenv.config();

// const app = express();
// const PORT = process.env.PORT || 3001;

// app.use(cors());
// app.use(express.json());

// app.post('/api/contact', async (req, res) => {
//     const { name, email, phone, company, message } = req.body;

//     if (!name || !email || !message) {
//         return res.status(400).json({ error: 'Faltan datos obligatorios' });
//     }

//     // Configurar transporte SMTP con tus datos (Gmail, Outlook, etc)
//     let transporter = nodemailer.createTransport({
//         host: process.env.SMTP_HOST,
//         port: Number(process.env.SMTP_PORT),
//         secure: process.env.SMTP_SECURE === 'true', // true para puerto 465, false para otros
//         auth: {
//             user: process.env.SMTP_USER,
//             pass: process.env.SMTP_PASS,
//         },
//     });

//     try {
//         await transporter.sendMail({
//             from: `"${name}" <${email}>`, // remitente
//             to: process.env.CONTACT_RECEIVER, // destinatario (tu email)
//             subject: `Nuevo mensaje de contacto de ${name}`,
//             html: `
//         <p><strong>Nombre:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
//         <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
//         <p><strong>Mensaje:</strong></p>
//         <p>${message}</p>
//       `,
//         });

//         res.json({ message: 'Email enviado correctamente' });
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'Error enviando el email' });
//     }
// });

// app.listen(PORT, () => {
//     console.log(`Servidor corriendo en http://localhost:${PORT}`);
// });


import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Necesario para __dirname en ESModules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(cors());
app.use(express.json());

// 👉 Servir el frontend
app.use(express.static(path.join(__dirname, 'public', 'dist')));
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'dist', 'index.html'));
});

// 👉 API para enviar email
app.post('/api/contact', async (req, res) => {
    const { name, email, phone, company, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }

    let transporter = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: process.env.SMTP_SECURE === 'true',
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS,
        },
    });
    console.log('variable de entorno SMTP_USER:', process.env.SMTP_USER);

    try {
        await transporter.sendMail({
            from: `"${name}" <${email}>`,
            to: process.env.CONTACT_RECEIVER,
            subject: `Nuevo mensaje de contacto de ${name}`,
            html: `
                <p><strong>Nombre:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Teléfono:</strong> ${phone || 'No proporcionado'}</p>
                <p><strong>Empresa:</strong> ${company || 'No proporcionada'}</p>
                <p><strong>Mensaje:</strong></p>
                <p>${message}</p>
            `,
        });

        res.json({ message: 'Email enviado correctamente' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Error enviando el email' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
