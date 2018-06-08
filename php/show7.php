<!DOCTYPE html>
<html>

	<head>
		<title>--- ACESSOS ---</title>
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
	</head>

	<body style="background-color: black; color: rgb(0, 255, 0); font-size: 18px;">

		<?php 

			include_once "conector7.php";

			$sql = "SELECT * FROM surpresa ORDER BY id DESC";
		    $resultado = mysqli_query($conexao, $sql);
		    while($linha = mysqli_fetch_assoc($resultado)) {
		        echo "$linha[id] === $linha[data] === ( $linha[ip] )<br>";
		    }
		    mysqli_close($conexao);

		?>

		<script type="text/javascript">
			setTimeout("location.reload(true);", 10000);
		</script>

	</body>

</html>