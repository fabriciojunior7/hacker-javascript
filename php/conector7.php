<?php
	
	
	$host = "localhost";
	$usuario = "root";
	$senha = "";
	$banco = "surpresa";

	$conexao = mysqli_connect($host, $usuario, $senha, $banco);
	mysqli_query($conexao, "SET NAMES 'utf8'");

	if (!$conexao) {
	    echo "<script>console.log('Conexão ERRO!')</script>";
	    die("Não foi possível conectar: " . mysqli_error());
	}
	else{
		echo "<script>console.log('Conexão BEM SUCEDIDA!')</script>";
	}
?>