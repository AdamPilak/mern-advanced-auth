import nodemailer from "nodemailer";
import dotenv from "dotenv";
dotenv.config();

export const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    type: "OAuth2",
    user: process.env.NODEMAILER_SMTP_LOGIN,
    clientId: process.env.NODEMAILER_SMTP_CLIENT_ID,
    clientSecret: process.env.NODEMAILER_SMTP_CLIENT_SECRET,
    refreshToken: process.env.NODEMAILER_SMTP_REFRESH_TOKEN,
    accessToken: process.env.NODEMAILER_SMTP_ACCESS_TOKEN,
  },
});
