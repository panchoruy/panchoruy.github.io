<?php

$servername = "mysql9.000webhost.com";
$username = "a5312828_pancho";
$password = "Pitch440";
$dbname = "a5312828_testdb";
$tbl_name = "tbl";

$connection = mysqli_connect($servername,$username,$password,$dbname);
if (!$connection) {
	echo ("Connection to database failed. Please try again later!". mysqli_error());
}

$user_id = 0;
$check = array();

do {
	$user_id = rand(0, 1048567);
	$check = mysqli_query($connection, "SELECT * FROM $tbl_name WHERE id = $user_id");
} while (sizeof($check) == 0);

$keys = "";
$values = "";

foreach ($_POST as $key => $value) {
	$keys = $keys .',' . $key;
	$values = $values .',\'' . $value .'\'';
}

$keys = $keys .',' . 'id';
$values = $values .',\'' . $user_id .'\'';

$keys = substr($keys, 1);
$values = substr($values, 1);

$sql = "INSERT INTO $tbl_name ($keys) VALUES ($values)";

$result = mysqli_query($connection, $sql);

mysqli_close($connection);

// Sending email to user
if(isset($_POST['email'])) { 
    if(!empty($_POST['email'])){
        $sent = mail($_POST['email'], 'Your Pitch Memory test ID', "Thank you for taking our test!\n\nYour ID for when you come back is: $user_id\n\nSee you soon!", "From: Pitch-Memory-Team". "\r\n");
    }
}

?>

<html>

<head>
	<title>Pitch memory test</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<!-- IonIcons -->
	<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
	<!-- CSS Stylesheet -->
	<link rel="stylesheet" type="text/css" href="stylesheet.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
</head>

<body>
	<center>
		<h1>Pitch memory test</h1>

		Thank you for your time!
		<br>You should've received your ID number in your email (please check spam too!).
		<br>You can now close this window, we will give you instructions for the second part later.

		<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
		<script src="application.js" type="text/javascript" charset="utf-8" async defer></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	</center>
</body>

</html>