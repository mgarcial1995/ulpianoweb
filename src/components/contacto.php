<?php 
	$nombre = $_POST['nombre'];
	$celular = $_POST['celular'];
	$correo = $_POST['correo'];
	$consulta = $_POST['consulta'];

	$header = 'From: ' . $mail . " \r\n";
	$header .= "X-Mailer: PHP/" . phpversion() . " \r\n";
	$header .= "Mime-Version: 1.0 \r\n";
	$header .= "Content-Type: text/plain";

	$consulta = "Nombre del usuario " . $nombre . ",\r\n";
	$consulta .= "Correo: " . $correo . " \r\n";
	$consulta .= "Celular: " . $celular . " \r\n";
	$consulta .= "Mensaje de consulta: " . $_POST['consulta'] . " \r\n";
	$consulta .= "Enviado el " . date('d/m/Y', time());

	$para = 'martingarcial-18@hotmail.com, martingarcial.1995@gmail.com';
	$asunto = 'Mensaje de usuario de conciliacionesulpiano.com';

if(isset($_POST['dejarenblanco'])){
    $dejarenblanco = $_POST['dejarenblanco'];
}
if(isset($_POST['nocambiar'])){
    $nocambiar = $_POST['nocambiar'];
}
if ($dejarenblanco == '' && $nocambiar == 'http://') { 
	mail($para, $asunto, utf8_decode($consulta), $header);
	header("Location:index.html");
}
?>