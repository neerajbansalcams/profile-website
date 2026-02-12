// configuration notes:
// the contact endpoint uses nodemailer and requires these env vars:
//   SMTP_HOST   - SMTP server hostname
//   SMTP_PORT   - port (587 for starttls, 465 for ssl)
//   SMTP_SECURE - "true" if using ssl (465)
//   SMTP_USER   - username for the SMTP server
//   SMTP_PASS   - password for the SMTP server
//   CONTACT_EMAIL - destination address (defaults to contact@neeraj-bansal.com)

import express, { type Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

import nodemailer from "nodemailer";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // put application routes here
  // prefix all routes with /api

  // simple contact form endpoint
  app.post("/api/contact", express.json(), async (req, res) => {
    const { name, email, subject, message } = req.body;
    if (!name || !email || !subject || !message) {
      return res.status(400).json({ error: "All fields are required" });
    }

    // configure transport - expects SMTP credentials in env
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT) || 587,
      secure: process.env.SMTP_SECURE === "true", // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: `${name} <${email}>`,
      to: process.env.CONTACT_EMAIL || "contact@neeraj-bansal.com",
      subject: `[enquiry from NB website] ${subject}`,
      text: message,
      html: `<p>${message.replace(/\n/g, "<br />")}</p>`,
    };

    try {
      await transporter.sendMail(mailOptions);
      return res.json({ success: true });
    } catch (err) {
      console.error("Error sending contact email", err);
      return res.status(500).json({ error: "Failed to send email" });
    }
  });

  // use storage to perform CRUD operations on the storage interface
  // e.g. storage.insertUser(user) or storage.getUserByUsername(username)

  return httpServer;
}
