<?php

	include_once "php/conector7.php";

	date_default_timezone_set("America/Bahia");
	$hora = date("H:i");
	$data = date("d/m/Y");
	$calendario = "$hora - $data";

	$ip = $_SERVER['REMOTE_ADDR'];

	$consulta = "INSERT INTO surpresa (ip, data) VALUES ('$ip', '$calendario')";
	$pesquisa = mysqli_query($conexao, $consulta);
	mysqli_close($conexao);
	echo "<script>console.log('Envio BEM SUCEDIDA!')</script>";

?>