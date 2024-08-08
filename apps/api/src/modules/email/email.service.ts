import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT),
      secure: true,
      auth: {
        user: process.env.SMTP_AUTH_USER,
        pass: process.env.SMTP_AUTH_PASS,
      },
    });
  }

  async sendEmail(to: string, subject: string, text: string, html: string) {
    const mailOptions = {
      from: process.env.EMAIL_SENDER,
      to,
      subject,
      text,
      html,
    };

    return await this.transporter.sendMail(mailOptions);
  }

  async sendEmailToFixedRecipient(data: any) {
    const emailContent = this.generateEmailContent(data, 'fixed');
    return await this.sendEmail(
      process.env.EMAIL_RECEIVER,
      'Nueva Solicitud de Certificado de Nacimiento',
      'Nueva solicitud recibida',
      emailContent,
    );
  }

  async sendEmailToUser(data: any) {
    const emailContent = `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .header {
            background-color: #d52b1e;
            padding: 20px;
            text-align: center;
            color: #fff;
          }
          .header img {
            width: 50px;
            height: auto;
            vertical-align: middle;
          }
          .header h1 {
            display: inline;
            margin: 0;
            padding-left: 10px;
            font-size: 28px;
            vertical-align: middle;
            font-weight: bold;
          }
          .container {
            padding: 30px;
          }
          h2 {
            color: #d52b1e;
            font-size: 24px;
            border-bottom: 2px solid #d52b1e;
            padding-bottom: 10px;
          }
          p {
            margin: 15px 0;
            line-height: 1.6;
            font-size: 18px;
          }
          .footer {
            margin-top: 30px;
            text-align: center;
            color: #888;
            font-size: 14px;
            border-top: 1px solid #ddd;
            padding-top: 10px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1920px-Bandera_de_Espa%C3%B1a.svg.png" alt="Spain Flag">
          <h1>Gobierno de España</h1>
        </div>
        <div class="container">
          <h2>Confirmación de Solicitud de Certificado de Nacimiento</h2>
          <p>Estimado(a) ${data.datosSolicitante.nombre} ${data.datosSolicitante.primerApellido},</p>
          <p>
            Le informamos que hemos recibido correctamente su solicitud para obtener el Certificado de Nacimiento.
            Nuestro equipo está trabajando en su solicitud y le notificaremos una vez que esté procesada.
          </p>
          <p>
            Por favor, conserve este correo como confirmación de su solicitud. Si tiene alguna pregunta o necesita más información, no dude en ponerse en contacto con nosotros.
          </p>
          <p>Atentamente,</p>
          <p>Departamento de Registro Civil</p>
          <p><strong>Gobierno de España</strong></p>
        </div>
        <div class="footer">
          <p>Este es un correo automático, por favor no responda a este mensaje.</p>
        </div>
      </body>
      </html>
    `;
    return await this.sendEmail(
      data.datosSolicitante.email,
      'Confirmación de Solicitud de Certificado de Nacimiento',
      'Hemos recibido su solicitud',
      emailContent,
    );
  }

  private generateEmailContent(data: any, recipient: string) {
    const recipientText = '<h1>Solicitud de Certificado de Nacimiento</h1>';

    return `
      <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            color: #333;
            margin: 0;
            padding: 0;
          }
          .header {
            background-color: #d52b1e;
            padding: 10px;
            text-align: center;
            color: #fff;
          }
          .header img {
            width: 50px;
            height: auto;
            vertical-align: middle;
          }
          .header h1 {
            display: inline;
            margin: 0;
            padding-left: 10px;
            font-size: 24px;
            vertical-align: middle;
          }
          .container {
            padding: 20px;
          }
          h2 {
            color: #d52b1e;
          }
          p {
            margin: 10px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin-top: 20px;
          }
          th, td {
            padding: 10px;
            border: 1px solid #ddd;
            text-align: left;
          }
          th {
            background-color: #f4f4f4;
          }
          .footer {
            margin-top: 20px;
            text-align: center;
            color: #888;
            font-size: 12px;
          }
        </style>
      </head>
      <body>
        <div class="header">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/89/Bandera_de_Espa%C3%B1a.svg/1920px-Bandera_de_Espa%C3%B1a.svg.png" alt="Spain Flag">
          <h1>Gobierno de España</h1>
        </div>
        <div class="container">
          ${recipientText}
          <h2>Datos Generales</h2>
          <table>
            <tr><th>Campo</th><th>Valor</th></tr>
            <tr><td>Idioma</td><td>${data.datosGenerales.idioma.label}</td></tr>
            <tr><td>Persona</td><td>${data.datosGenerales.persona.label}</td></tr>
          </table>

          <h2>Datos del Solicitante</h2>
          <table>
            <tr><th>Campo</th><th>Valor</th></tr>
            <tr><td>Nombre</td><td>${data.datosSolicitante.nombre}</td></tr>
            <tr><td>Primer Apellido</td><td>${data.datosSolicitante.primerApellido}</td></tr>
            <tr><td>Segundo Apellido</td><td>${data.datosSolicitante.segundoApellido}</td></tr>
            <tr><td>Género</td><td>${data.datosSolicitante.genero.label}</td></tr>
            <tr><td>País Emisor</td><td>${data.datosSolicitante.paisEmisor.label}</td></tr>
            <tr><td>Hijo de</td><td>${data.datosSolicitante.hijoDe}</td></tr>
            <tr><td>Y de</td><td>${data.datosSolicitante.yDe}</td></tr>
            <tr><td>Día de Nacimiento</td><td>${data.datosSolicitante.diaNacimiento.label}</td></tr>
            <tr><td>Mes de Nacimiento</td><td>${data.datosSolicitante.mesNacimiento.label}</td></tr>
            <tr><td>Año de Nacimiento</td><td>${data.datosSolicitante.anoNacimiento.label}</td></tr>
            <tr><td>País de Nacimiento</td><td>${data.datosSolicitante.paisNacimiento.label}</td></tr>
            <tr><td>Lugar de Nacimiento</td><td>${data.datosSolicitante.lugarNacimiento}</td></tr>
            <tr><td>Tipo de Identificación</td><td>${data.datosSolicitante.tipoIdentificacion.label}</td></tr>
            <tr><td>Número de Identificación</td><td>${data.datosSolicitante.numeroIdentificacion}</td></tr>
            <tr><td>Email</td><td>${data.datosSolicitante.email}</td></tr>
            <tr><td>Confirmar Email</td><td>${data.datosSolicitante.confirmEmail}</td></tr>
          </table>

          <h2>Datos del Certificado</h2>
          <table>
            <tr><th>Campo</th><th>Valor</th></tr>
            <tr><td>Tipo de Certificado</td><td>${data.datosCertificado.tipoCertificado.label}</td></tr>
            <tr><td>Número de Copias</td><td>${data.datosCertificado.numeroCopias.label}</td></tr>
            <tr><td>Destinatario</td><td>${data.datosCertificado.destinatario.label}</td></tr>
            <tr><td>Motivo</td><td>${data.datosCertificado.motivo.label}</td></tr>
            <tr><td>Observaciones</td><td>${data.datosCertificado.observaciones}</td></tr>
            <tr><td>Idioma del Anexo</td><td>${data.datosCertificado.idiomaAnexo.label}</td></tr>
          </table>

          <h2>Datos de Notificación</h2>
          <table>
            <tr><th>Campo</th><th>Valor</th></tr>
            <tr><td>Tipo de Vía</td><td>${data.datosNotificacion.tipoVia.label}</td></tr>
            <tr><td>Nombre de la Vía</td><td>${data.datosNotificacion.nombreVia}</td></tr>
            <tr><td>Número de la Vía</td><td>${data.datosNotificacion.numeroVia}</td></tr>
            <tr><td>Portal</td><td>${data.datosNotificacion.portal}</td></tr>
            <tr><td>Escalera</td><td>${data.datosNotificacion.escalera}</td></tr>
            <tr><td>Piso</td><td>${data.datosNotificacion.piso}</td></tr>
            <tr><td>Puerta</td><td>${data.datosNotificacion.puerta}</td></tr>
            <tr><td>Bloque</td><td>${data.datosNotificacion.bloque}</td></tr>
            <tr><td>Teléfono de Contacto</td><td>${data.datosNotificacion.telefonoContacto}</td></tr>
            <tr><td>Código Postal</td><td>${data.datosNotificacion.codigoPostal}</td></tr>
            <tr><td>País de Domicilio</td><td>${data.datosNotificacion.paisDomicilio.label}</td></tr>
            <tr><td>País de Inscripción</td><td>${data.datosNotificacion.paisInscripcion.label}</td></tr>
            <tr><td>Registro Civil</td><td>${data.datosNotificacion.registroCivil.registroCivil}</td></tr>
            <tr><td>Tomo</td><td>${data.datosNotificacion.tomo}</td></tr>
            <tr><td>Página</td><td>${data.datosNotificacion.pagina}</td></tr>
            <tr><td>Acepto Política</td><td>${data.datosNotificacion.aceptoPolitica ? 'Sí' : 'No'}</td></tr>
            <tr><td>Opción Prioritaria</td><td>${data.datosNotificacion.opcionPrioritaria ? 'Sí' : 'No'}</td></tr>
            <tr><td>Precio Total</td><td>${data.datosNotificacion.precioTotal}€</td></tr>
          </table>
        </div>
      </body>
      </html>
    `;
  }
}
