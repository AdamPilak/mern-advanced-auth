import { PASSWORD_RESET_REQUEST_TEMPLATE } from "./emailTemplates.js";
import { PASSWORD_RESET_SUCCESS_TEMPLATE } from "./emailTemplates.js";
import { VERIFICATION_EMAIL_TEMPLATE } from "./emailTemplates.js";

import { transporter } from "./nodemailer.config.js";

export const sendVerificationEmail = async (email, verficationToken) => {
  try {
    transporter.sendMail({
      to: email,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verficationToken
      ),
    });

    console.log("Verification email sent successfully");
  } catch (err) {
    console.error("Error sending verification", err);
    throw new Error(`Error sending verification email: ${err}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  try {
    transporter.sendMail({
      to: email,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
    });

    console.log("Password reset email sent successfully");
  } catch (err) {
    console.error("Error sending password reset email", err);
    throw new Error(`Error sending password reset email: ${err}`);
  }
};

export const sendResetSuccessEmail = async (email) => {
  try {
    transporter.sendMail({
      to: email,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
    });

    console.log("Password reset success email sent successfully");
  } catch (err) {
    console.error("Error sending password success email", err);
    throw new Error(`Error sending password reset success email: ${err}`);
  }
};
