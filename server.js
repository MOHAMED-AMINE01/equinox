import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config({ path: '.env.local' });

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('public'));

const PORT = process.env.PORT || 3001;

app.post('/api/contact', async (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  // Validation basique
  if (!name || !email || !message) {
    return res.status(400).json({ message: 'Veuillez remplir tous les champs obligatoires.' });
  }

  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_HOST,
    port: parseInt(process.env.EMAIL_PORT || '587'),
    secure: process.env.EMAIL_SECURE === 'true',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
    tls: {
      rejectUnauthorized: false // Aide à éviter certaines erreurs de connexion TLS
    }
  });

  const mailOptions = {
    from: `"Equinox Contact" <${process.env.EMAIL_USER}>`,
    to: process.env.EMAIL_RECIPIENT || 'contact@equinox.mc',
    subject: `Nouveau message de ${name}: ${subject || 'Sans sujet'}`,
    text: `
      Nom: ${name}
      Email: ${email}
      Téléphone: ${phone || 'Non renseigné'}
      Sujet: ${subject || 'Non renseigné'}
      
      Message:
      ${message}
    `,
    html: `
      <!DOCTYPE html>
      <html>
        <head>
          <meta charset="utf-8">
          <style>
            body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #333333; margin: 0; padding: 0; -webkit-font-smoothing: antialiased; }
            .wrapper { background-color: #f4f4f4; padding: 40px 10px; }
            .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; shadow: 0 4px 6px rgba(0,0,0,0.1); border: 1px solid #eeeeee; }
            .header { background-color: #030303; padding: 40px; text-align: center; border-bottom: 3px solid #c9a050; }
            .logo { width: 140px; height: auto; }
            .content { padding: 40px; }
            .title { color: #030303; font-size: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 30px; border-bottom: 1px solid #eeeeee; padding-bottom: 15px; text-align: center; }
            .info-table { width: 100%; border-collapse: collapse; margin-bottom: 30px; }
            .info-table td { padding: 12px 0; border-bottom: 1px solid #fafafa; vertical-align: top; }
            .label { color: #c9a050; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; width: 120px; }
            .value { color: #333333; font-size: 15px; }
            .message-label { color: #c9a050; font-size: 11px; font-weight: bold; text-transform: uppercase; letter-spacing: 1px; margin-bottom: 15px; display: block; }
            .message-box { background-color: #fcfcfc; padding: 25px; border-left: 3px solid #c9a050; border-radius: 4px; font-style: italic; line-height: 1.6; color: #555555; }
            .footer { background-color: #ffffff; padding: 30px; text-align: center; font-size: 11px; color: #999999; border-top: 1px solid #eeeeee; text-transform: uppercase; letter-spacing: 1px; }
            .accent { color: #c9a050; text-decoration: none; }
          </style>
        </head>
        <body>
          <div class="wrapper">
            <div class="container">
              <div class="header">
                <!-- Logo fallback text if image not loaded -->
                <h2 style="color: white; margin: 0; letter-spacing: 4px; font-weight: 300;">EQUINOX</h2>
                <div style="color: #c9a050; font-size: 10px; margin-top: 5px; opacity: 0.8; letter-spacing: 2px;">CUISINES PROFESSIONNELLES</div>
              </div>
              
              <div class="content">
                <div class="title">Nouvelle Demande</div>
                
                <table class="info-table">
                  <tr>
                    <td class="label">Client</td>
                    <td class="value"><strong>${name}</strong></td>
                  </tr>
                  <tr>
                    <td class="label">E-mail</td>
                    <td class="value"><a href="mailto:${email}" class="accent">${email}</a></td>
                  </tr>
                  <tr>
                    <td class="label">Téléphone</td>
                    <td class="value">${phone || 'Non renseigné'}</td>
                  </tr>
                  <tr>
                    <td class="label">Sujet</td>
                    <td class="value">${subject || 'Demande de contact'}</td>
                  </tr>
                </table>

                <span class="message-label">Message</span>
                <div class="message-box">
                  ${message.replace(/\n/g, '<br>')}
                </div>
              </div>

              <div class="footer">
                &copy; ${new Date().getFullYear()} EQUINOX MONACO &bull; NICE<br>
                Service Clientèle &bull; <a href="https://equinox.mc" class="accent">equinox.mc</a>
              </div>
            </div>
          </div>
        </body>
      </html>
    `,
    replyTo: email
  };

  try {
    console.log('Tentative d\'envoi d\'email via:', process.env.EMAIL_HOST);
    // 1. Email pour Equinox (Notification de nouveau message)
    await transporter.sendMail(mailOptions);

    // 2. Email pour le Client (Confirmation)
    const clientMailOptions = {
      from: `"Equinox" <${process.env.EMAIL_USER}>`,
      to: email, // Envoyer au client
      subject: `Confirmation de votre demande - Equinox`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <style>
              body { font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; background-color: #f9f9f9; color: #333333; margin: 0; padding: 0; }
              .wrapper { background-color: #f4f4f4; padding: 40px 10px; }
              .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #eeeeee; }
              .header { background-color: #030303; padding: 40px; text-align: center; border-bottom: 3px solid #c9a050; }
              .content { padding: 40px; text-align: center; }
              .title { color: #030303; font-size: 20px; font-weight: bold; text-transform: uppercase; letter-spacing: 2px; margin-bottom: 20px; }
              .text { font-size: 16px; line-height: 1.6; color: #555555; margin-bottom: 30px; }
              .footer { background-color: #ffffff; padding: 30px; text-align: center; font-size: 11px; color: #999999; border-top: 1px solid #eeeeee; text-transform: uppercase; letter-spacing: 1px; }
              .accent { color: #c9a050; }
            </style>
          </head>
          <body>
            <div class="wrapper">
              <div class="container">
                <div class="header">
                  <h2 style="color: white; margin: 0; letter-spacing: 4px; font-weight: 300;">EQUINOX</h2>
                  <div style="color: #c9a050; font-size: 10px; margin-top: 5px; opacity: 0.8; letter-spacing: 2px;">CUISINES PROFESSIONNELLES</div>
                </div>
                <div class="content">
                  <div class="title">Merci de nous avoir contactés</div>
                  <p class="text">
                    Bonjour <strong class="accent">${name}</strong>,<br><br>
                    Nous avons bien reçu votre message concernant : <strong>"${subject || 'Demande de contact'}"</strong>.<br><br>
                    Notre équipe étudie votre demande et reviendra vers vous dans les plus brefs délais.
                  </p>
                  <p style="font-size: 13px; color: #999999; margin-top: 30px; border-top: 1px solid #eeeeee; padding-top: 20px; text-align: center;">
                    Ce message est envoyé automatiquement, merci de ne pas y répondre. Pour toute question, contactez-nous à <a href="mailto:contact@equinox.mc" class="accent" style="color: #c9a050; text-decoration: none;">contact@equinox.mc</a>
                  </p>
                </div>
                <div class="footer">
                  &copy; ${new Date().getFullYear()} EQUINOX MONACO &bull; NICE<br>
                  Service Clientèle &bull; equinox.mc
                </div>
              </div>
            </div>
          </body>
        </html>
      `
    };

    await transporter.sendMail(clientMailOptions);
    console.log('Emails envoyés avec succès');
    res.status(200).json({ message: 'Emails envoyés avec succès' });
  } catch (error) {
    console.error('Erreur Nodemailer détaillée:', error);
    res.status(500).json({ message: 'Erreur lors de l\'envoi de l\'email', error: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});
