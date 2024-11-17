import {
  PASSWORD_RESET_REQUEST_TEMPLATE,
  PASSWORD_RESET_SUCCESS_TEMPLATE,
  VERIFICATION_EMAIL_TEMPLATE,
} from "./emailTemplates.js";
import { mailtrapClient, sender } from "./mailtrap.config.js";

export const sendVerificationEmail = async (email, verficationToken) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Verify your email",
      html: VERIFICATION_EMAIL_TEMPLATE.replace(
        "{verificationCode}",
        verficationToken
      ),
      category: "Email Verification",
    });

    console.log("Verification email sent successfully", response);
  } catch (err) {
    console.error("Error sending verification", err);
    throw new Error(`Error sending verification email: ${err}`);
  }
};

export const sendWelcomeEmail = async (email, name) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      template_uuid: "a4f7d33e-3cbf-48fc-89b0-185888b09b1f",
      template_variables: {
        company_info_name: "OrganizeIt.",
        name,
      },
    });

    console.log("Welcome email sent successfully", response);
  } catch (err) {
    console.error("Error sending welcome email", err);

    throw new Error(`Error sending welcome email: ${err}`);
  }
};

export const sendPasswordResetEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Reset your password",
      html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
      category: "Password Reset",
    });

    console.log("Password reset email sent successfully", response);
  } catch (err) {
    console.error("Error sending password reset email", err);

    throw new Error(`Error sending password reset email: ${err}`);
  }
};

export const sendResetSuccessEmail = async (email, resetURL) => {
  const recipient = [{ email }];

  try {
    const response = await mailtrapClient.send({
      from: sender,
      to: recipient,
      subject: "Password Reset Successful",
      html: PASSWORD_RESET_SUCCESS_TEMPLATE,
      category: "Password Reset",
    });

    console.log("Password reset success email sent successfully", response);
  } catch (err) {
    console.error("Error sending password success email", err);
    throw new Error(`Error sending password reset success email: ${err}`);
  }
};
