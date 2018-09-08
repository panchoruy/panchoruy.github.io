<html>

<head>
	<title>Pitch memory test - part 2</title>
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
		<h1>Pitch memory test</h1>
		<p>Please use headphones to take the test and read the instructions carefully.</p>
		<p><b>ADJUST YOUR VOLUME WITH THIS TEST SOUND</b></p>

		<div class="btn-group margin-out">
			<button type="button" class="btn btn-secondary" id="playtest"><span class="ion-play"></span></button>
			<button type="button" class="btn btn-secondary" id="stoptest"><span class="ion-stop"></span></button>
		</div>

		<form action="submission.php" method="post" accept-charset="utf-8">

			<div class="form-group">
				<label for="idnumber">Please input your ID Number (we emailed you last time):</label>
				<input name="idnumber" class='form-control small-select must-fill' placeholder="ex. 123456">
			</div>

			<h2>5. Long interval absolute pitch test</h2>
			In the last test you heard two tones and were asked to remember them.
			<br>Try your best to identify each tone among the options.
			<br>You will only be allowed to submit this part between 44 and 52 hours after submitting this first test.

			<div>
				<?php
				$del_abs_answer = array(312, 2303);
				$titles = array('First tone', 'Second tone');
				$q_number = sizeof($del_abs_answer);

				echo
				("(31)
				<div class='test-box'>
					".$titles[0]."<br>
					<div class='must-fill-radio margin-out'>
					");
					$del_abs_possibilities = array(
						$del_abs_answer[0],
						$del_abs_answer[0] * 3,
						$del_abs_answer[0] * 3.5,
						$del_abs_answer[0] * 0.33);
					shuffle($del_abs_possibilities);
					for ($k=0; $k < 4; $k++) { 
						echo ("
							<div class='input-group'>
								<span class='input-group-addon'>
									<input type='radio' name='test31' class='radio-fill' value='".$del_abs_possibilities[$k]."'>
								</span>
								<span class='input-group-btn'>
								<button type='button' class='btn btn-secondary play-twice' id='".$del_abs_possibilities[$k]."'><span class='ion-play'></span></button>
								</span>
								<span class='input-group-btn'>
								<button type='button' class='stop btn btn-secondary'><span class='ion-stop'></span></button>
								</span>
							</div>
						");
					}
			echo ("
				</div>				
			</div><br>");
				
			
			echo
				("(32)
				<div class='test-box'>
					".$titles[1]."<br>
					<div class='must-fill-radio margin-out'>
					");
					$del_abs_possibilities2 = array(
						$del_abs_answer[1],
						$del_abs_answer[1] * 2,
						$del_abs_answer[1] * 0.33,
						$del_abs_answer[1] * 0.2);
					shuffle($del_abs_possibilities2);
					for ($k=0; $k < 4; $k++) { 
						echo ("
							<div class='input-group'>
								<span class='input-group-addon'>
									<input type='radio' name='test32' class='radio-fill' value='".$del_abs_possibilities2[$k]."'>
								</span>
								<span class='input-group-btn'>
								<button type='button' class='btn btn-secondary play-twice' id='".$del_abs_possibilities2[$k]."'><span class='ion-play'></span></button>
								</span>
								<span class='input-group-btn'>
								<button type='button' class='stop btn btn-secondary'><span class='ion-stop'></span></button>
								</span>
							</div>
						");
					}
			echo ("
				</div>				
			</div><br>");

			?>


			</div>

			<button id="submission" type="submit" class="btn btn-primary">Submit Test</button>
		</form>

		<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
		<script src="../application.js" type="text/javascript" charset="utf-8" async defer></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	</center>
</body>

</html>