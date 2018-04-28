<?php
include_once('config.php');

if(!$_POST) exit;


if (!defined("PHP_EOL")) define("PHP_EOL", "\r\n");

$name     = $_POST['name'];
$subject    = $_POST['subject'];
$email    = $_POST['email'];
$comments = $_POST['message'];




// Configuration option.

$address = CONTACT_FORM_RECIPIENT;


// Configuration option.
// i.e. The standard subject will appear as, "You've been contacted by John Doe."

// Example, $e_subject = '$name . ' has contacted you via Your Website.';

$e_subject = 'You have been contacted by ' . $name . '.';


// Configuration option.
// You can change this if you feel that you need to.
// Developers, you may wish to add more fields to the form, in which case you must be sure to add them here.

$e_body = "You have been contacted by $name. Their additional message is as follows." . PHP_EOL . PHP_EOL;
$e_content = "Subject : $subject"  . PHP_EOL . PHP_EOL;
$e_content .= "\"$comments\"" . PHP_EOL . PHP_EOL;
$e_reply = "You can contact $name via email, $email";

$msg = wordwrap( $e_body . $e_content . $e_reply, 70 );

$headers = "From: $email" . PHP_EOL;
$headers .= "Reply-To: $email" . PHP_EOL;
$headers .= "MIME-Version: 1.0" . PHP_EOL;
$headers .= "Content-type: text/plain; charset=utf-8" . PHP_EOL;
$headers .= "Content-Transfer-Encoding: quoted-printable" . PHP_EOL;

if(mail($address, $e_subject, $msg, $headers)) {

	// Email has sent successfully, echo a success page.
	echo "<fieldset>";
	echo "<div id='success_page'>";
	echo "<h3>Email Sent Successfully.</h3>";
	echo "<p>Thank you <strong>$name</strong>, your message has been submitted to us.</p>";
	echo "</div>";
	echo "</fieldset>";

} else {

	echo 'ERROR!';

}

if(trim($comments) == '') {
	echo '<div class="error_message">Please enter your message.</div>';
	exit();
}

if(get_magic_quotes_gpc()) {
	$comments = stripslashes($comments);
}
?>
