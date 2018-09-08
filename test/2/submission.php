<html>

<head>
	<title>Pitch memory test</title>
	<!-- Latest compiled and minified CSS -->
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/css/bootstrap.min.css" integrity="sha384-rwoIResjU2yc3z8GV/NPeZWAv56rSmLldC3R/AZzGRnGxQQKnKkoFVhFQhNUwEyJ" crossorigin="anonymous">
	<!-- IonIcons -->
	<link rel="stylesheet" href="http://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">
	<!-- CSS Stylesheet -->
	<link rel="stylesheet" type="text/css" href="../stylesheet.css">
	<link href="https://fonts.googleapis.com/css?family=Roboto:400,700" rel="stylesheet">
</head>

<body>
	<center>		
<?php

$servername = "mysql9.000webhost.com";
$username = "a5312828_pancho";
$password = "Pitch440";
$dbname = "a5312828_testdb";
$tbl_name = "tbl";

$connection = mysqli_connect($servername,$username,$password,$dbname);
if (!$connection) {
	echo ("Connection to database failed. Please try again later!". mysqli_error($connection));
}

// Unreachable
$user_id = 1048568;

if(isset($_POST['idnumber'])) { 
    if(!empty($_POST['idnumber'])){
		$user_id = $_POST["idnumber"];
	}
}

$sql = "SELECT TIMESTAMPDIFF(MINUTE , `time`, NOW()) from $tbl_name WHERE id = $user_id";

$result = mysqli_query($connection, $sql);

if ($result) {
	$data = mysqli_fetch_array($result);	
	if ($data[0] > 2600 && $data[0] < 3200) {
		$sql = "UPDATE $tbl_name SET test31 = ". $_POST['test31'] .", test32=". $_POST['test32']." WHERE id = $user_id";
		$result = mysqli_query($connection, $sql);
		echo("Thank you for your time! <br>You have now completed the test.");
	} else {
		echo("You can't submit at this time! Try coming back in ".number_format((2600 - $data[0])/60,2)." hours!");
	}
} else {
	echo ("Incorrect user ID. Please try again!");
}







mysqli_close($connection);


?>


		<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
		<script src="../application.js" type="text/javascript" charset="utf-8" async defer></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	</center>
</body>

</html>