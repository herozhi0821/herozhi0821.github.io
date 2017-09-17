<?php
error_reporting(E_ALL ^ E_NOTICE);



$to = '';	//your email address
$subject = 'Message from '. $_POST['name'] .' ('. $_POST['email'] .')';	//email subject



if($_POST['name'] != '' AND $_POST['email'] != '' AND $_POST['msg'] != ''){		
	$msg = $_POST['msg'];
	$msg = str_replace('\n', '\r\n', str_replace('\r\n', '\n', $msg));
	$headers = 'From: webmaster@example.com' . "\r\n" .
	'Reply-To: webmaster@example.com' . "\r\n" .
	'X-Mailer: PHP/' . phpversion();
	if(@mail($to, $subject, $msg, $headers)){
		print '1';
	}else{
		$err = error_get_last();
		print $err['message'];
	}
}

?>