<?php
//
//$fname = $_POST["fname"];
//$lname = $_POST["lname"];
//$email = $_POST["email"];
//$description = $_POST["description"];
//
//require "vendor/autoload.php";
//
//use PHPMailer\PHPMailer\PHPMailer;
//use PHPMailer\PHPMailer\SMTP;
//
//$mail = new PHPMailer(true);
//
//// $mail->SMTPDebug = SMTP::DEBUG_SERVER;
//
//$mail->isSMTP();
//$mail->SMTPAuth = true;
//
//$mail->Host = "smtp.gmail.com";
//$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
//$mail->Port = 587;
//
//$mail->Username = "atestphp@gmail.com";
//$mail->Password = "password";
//
//$mail->setFrom($email, $fname);
//$mail->addAddress("dave@example.com", "Dave");
//
//mail->Body = $description;
//
//$mail->send();
//
//echo "email sent";
//
//header("Location: sent.html");

// Replace with your Gmail credentials
$from_email = "atestphp@gmail.com";
$from_name = "Test Name";
$password = "WDD131SeniorProject";

// Get form data
$fname = $_GET["fname"];
$lname = $_GET["lname"];
$email = $_GET["email"];
$description = $_GET["description"];

// Subject for the email
$subject = "Contact Form Submission from $fname $lname";

// Email body content
$body = "You have received a new contact form submission from:\n";
$body .= "  - Name: $fname $lname\n";
$body .= "  - Email: $email\n";
$body .= "  - Message: $description\n";

// Include PHPMailer library (need to be installed separately)
require 'vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;

$mail = new PHPMailer(true);

try {
  // Server settings
  $mail->isSMTP();                                            // Send using SMTP
  $mail->Host       = 'smtp.gmail.com';                       // Set the SMTP server address
  $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
  $mail->Username   = $from_email;                             // Set username for SMTP authentication
  $mail->Password   = $password;                               // Set password for SMTP authentication
  $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` for older servers
  $mail->Port       = 587;                                       // TCP port to connect to

  // Set email content
  $mail->setFrom($from_email, $from_name);
  $mail->addAddress($from_email); // Set recipient email (change this if you want to send to a different address)
  $mail->isHTML(false);                                  // Set email format to plain text
  $mail->Subject = $subject;
  $mail->Body    = $body;

  if ($mail->send()) {
    echo 'Message has been sent successfully.';
  } else {
    echo 'Error sending message: ', $mail->ErrorInfo;
  }
} catch (Exception $e) {
  echo 'Error: ', $e->getMessage();
}