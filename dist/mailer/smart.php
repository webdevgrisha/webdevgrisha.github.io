<?php 

$name = $_POST['user_name'];
$phone = $_POST['user_tel'];
$controller = $_POST['remote'];

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

//$mail->SMTPDebug = 3;                               // Enable verbose debug output

$mail->isSMTP();                                      // Set mailer to use SMTP
$mail->Host = 'smtp.mail.ru';  // Specify main and backup SMTP servers
$mail->SMTPAuth = true;                               // Enable SMTP authentication
$mail->Username = 'roy.grisha.3007@mail.ru';                 // Наш логин
$mail->Password = '30072003Roi';                           // Наш пароль от ящика
$mail->SMTPSecure = 'ssl';                            // Enable TLS encryption, `ssl` also accepted
$mail->Port = 465;                                    // TCP port to connect to
 
$mail->setFrom('roy.grisha.3007@mail.ru', 'Пользователь' );   // От кого письмо 
$mail->addAddress('krosbite17@mail.ru');     // Add a recipient
//$mail->addAddress('ellen@example.com');               // Name is optional
//$mail->addReplyTo('info@example.com', 'Information');
//$mail->addCC('cc@example.com');
//$mail->addBCC('bcc@example.com');
//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
$mail->isHTML(true);                                  // Set email format to HTML

$mail->Subject = 'Это тема сообщения';
$mail->Body    = '
	Пользователь оставил свои данные <br> 
	Имя: ' . $name . ' <br>
	Телефон: ' . $phone . ' <br>
	Комплектация: ' . $controller. '';
$mail->AltBody = 'Это альтернативный текст';

if(!$mail->send()) {
  echo 'Message could not be sent.';
  echo 'Mailer Error: ' .$mail->ErrorInfo;
} else{
	header ('Location: ../thanks.html');
}
?>