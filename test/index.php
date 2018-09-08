<?php

$i = 1;

$notes = array(
	"C0"	=> 16.3516,
	"C#0"	=> 17.3239,
	"D0"	=> 18.354,
	"D#0"	=> 19.4454,
	"E0"	=> 20.6017,
	"F0"	=> 21.8268,
	"F#0"	=> 23.1247,
	"G0"	=> 24.4997,
	"G#0"	=> 25.9565,
	"A0"	=> 27.5,
	"A#0"	=> 29.1352,
	"B0"	=> 30.8677,
	"C1"	=> 32.7032,
	"C#1"	=> 34.6478,
	"D1"	=> 36.7081,
	"D#1"	=> 38.8909,
	"E1"	=> 41.2034,
	"F1"	=> 43.6535,
	"F#1"	=> 46.2493,
	"G1"	=> 48.9994,
	"G#1"	=> 51.9131,
	"A1"	=> 55,
	"A#1"	=> 58.2705,
	"B1"	=> 61.7354,
	"C2"	=> 65.4064,
	"C#2"	=> 69.2957,
	"D2"	=> 73.4162,
	"D#2"	=> 77.7817,
	"E2"	=> 82.4069,
	"F2"	=> 87.3071,
	"F#2"	=> 92.4986,
	"G2"	=> 97.9989,
	"G#2"	=> 103.826,
	"A2"	=> 110,
	"A#2"	=> 116.541,
	"B2"	=> 123.471,
	"C3"	=> 130.813,
	"C#3"	=> 138.591,
	"D3"	=> 146.832,
	"D#3"	=> 155.563,
	"E3"	=> 164.814,
	"F3"	=> 174.614,
	"F#3"	=> 184.997,
	"G3"	=> 195.998,
	"G#3"	=> 207.652,
	"A3"	=> 220,
	"A#3"	=> 233.082,
	"B3"	=> 246.942,
	"C4"	=> 261.626,
	"C#4"	=> 277.183,
	"D4"	=> 293.665,
	"D#4"	=> 311.127,
	"E4"	=> 329.628,
	"F4"	=> 349.228,
	"F#4"	=> 369.994,
	"G4"	=> 391.995,
	"G#4"	=> 415.305,
	"A4"	=> 440,
	"A#4"	=> 466.164,
	"B4"	=> 493.883,
	"C5"	=> 523.251,
	"C#5"	=> 554.365,
	"D5"	=> 587.33,
	"D#5"	=> 622.254,
	"E5"	=> 659.255,
	"F5"	=> 698.456,
	"F#5"	=> 739.989,
	"G5"	=> 783.991,
	"G#5"	=> 830.609,
	"A5"	=> 880,
	"A#5"	=> 932.328,
	"B5"	=> 987.767,
	"C6"	=> 1046.5,
	"C#6"	=> 1108.73,
	"D6"	=> 1174.66,
	"D#6"	=> 1244.51,
	"E6"	=> 1318.51,
	"F6"	=> 1396.91,
	"F#6"	=> 1479.98,
	"G6"	=> 1567.98,
	"G#6"	=> 1661.22,
	"A6"	=> 1760,
	"A#"	=> 1864.66,
	"B6"	=> 1975.53,
	"C7"	=> 2093,
	"C#7"	=> 2217.46,
	"D7"	=> 2349.32,
	"D#7"	=> 2489.02,
	"E7"	=> 2637.02,
	"F7"	=> 2793.83,
	"F#7"	=> 2959.96,
	"G7"	=> 3135.96,
	"G#7"	=> 3322.44,
	"A7"	=> 3520,
	"A#7"	=> 3729.31,
	"B7"	=> 3951.07,
	"C8"	=> 4186.01,
	"C#8"	=> 4434.92,
	"D8"	=> 4698.64,
	"D#8"	=> 4978.03,
	"E8"	=> 5274.04,
	"F8"	=> 5587.65,
);

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
		<p>Please use headphones to take the test and read the instructions carefully.</p>
		<p><b>ADJUST YOUR VOLUME WITH THIS TEST SOUND</b></p>

		<div class="btn-group margin-out">
			<button type="button" class="btn btn-secondary" id="playtest"><span class="ion-play"></span></button>
			<button type="button" class="btn btn-secondary" id="stoptest"><span class="ion-stop"></span></button>
		</div>

		<p>This test was designed to be completed in approximately 10 minutes, but feel free to take as much or little time as you need for each question.</p>
		<h2>0. Personal Information</h2>
		<form action="submission.php" method="post" accept-charset="utf-8" >
			<div class="form-group">
				<label for="email">Email Adress</label>
				<input type="email" name="email" class='form-control small-select must-fill' id="email" placeholder="example@email.edu">
			</div>

			<div class="form-group">
				<label for="gender">What is your gender?</label>
				<select name="gender" class='form-control small-select must-fill'>
					<option selected disabled>Select</option>
					<option value="female">Female</option>
					<option value="male">Male</option>
					<option value="other">Other (specify)</option>
				</select>
				<input name="genderplus" class='form-control small-select' placeholder="If other, please specify">
			</div>

			<div class="form-group">
				<label for="langfluent">What languages are you fluent in? (list them)</label>
				<input name="langfluent" class='form-control small-select must-fill'>
			</div>

			<div class="form-group">
				<label for="langnative">What is your native language?</label>
				<input name="langnative" class='form-control small-select must-fill'>
			</div>

			<div class="form-group">
				<label for="perfpitch">Do you consider yourself to have "perfect" pitch?</label>
				<select name="perfpitch" class='form-control small-select must-fill'>
					<option selected disabled>Select</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</div>

			<div class="form-group">
				<label for="musicknow">Do you have basic knowledge of music theory?</label>
				<select name="musicknow" class='form-control small-select must-fill'>
					<option selected disabled>Select</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
			</div>

			<div class="form-group">
				<label for="instr">Do you sing and/or play an instrument?</label>
				<select name="instr" class='form-control small-select must-fill'>
					<option selected disabled>Select</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
				<input name="instrlist" class='form-control small-select' placeholder="If yes, please list them here (including voice)">
			</div>

			<div class="form-group">
				<label for="instryears">Write the rounded total number of years of experience you have with music (0 if none)</label>
				<input name="instryears" class='form-control small-select must-fill'>
			</div>

			<div class="formgroup">
				<label for="hearloss">Have you been diagnosed with hearing loss?</label>
				<select name="hearloss" class='form-control small-select must-fill'>
					<option selected disabled>Select</option>
					<option value="yes">Yes</option>
					<option value="no">No</option>
				</select>
				<input name="hearlosskind" class='form-control small-select' placeholder="If yes, please state type/degree.">
			</div>

			<h2>1. Pitch recognition diagnostic</h2> The first part of the test serves as a diagnostic to measure your pre-existing pitch recognition skills.
			<br> Without any aid, you will hear a tone and try to identify its pitch in the western chromatic scale.
			<br> It's okay if you are not able to do this well, not to mention perfectly!
			<br> <b>EACH SOUND WILL PLAY FOR 2 SECONDS, AT MOST TWICE</b>

			<div id="diagnostic-test">
			<?php

				$diag_test = array("A#3","C4","D#3","G2","F5","D#4");
				$q_number = sizeof($diag_test);

				for ($j=0; $j < $q_number; $j++) { 
					echo
					("($i)
					<div class='test-box'>
						<div class='btn-group margin-out'>
							<button type='button' class='btn btn-secondary play-twice' id='".$notes[$diag_test[$j]]."' ><span class='ion-play'></span></button>
							<button type='button' class='stop btn btn-secondary'><span class='ion-stop'></span></button>
						</div>
						<select name='test$i' class='form-control pitch-sel must-fill'>
							<option value='' selected disabled>Select an option</option>
							<option value='A'>A</option>
							<option value='A#'>A#/Bb</option>
							<option value='B'>B</option>
							<option value='C'>C</option>
							<option value='C#'>C#/Db</option>
							<option value='D'>D</option>
							<option value='D#'>D#/Eb</option>
							<option value='E'>E</option>
							<option value='F'>F</option>
							<option value='F#'>F#/Gb</option>
							<option value='G'>G</option>
							<option value='G#'>G#/Ab</option>
						</select>
					</div><br>");
					$i++;
				}
				
			?>
			</div>

			<h2>2. Exact Relative hearing test</h2> 
			You will hear a tone and then you'll be asked to identify the tone you heard among four options.
			<br> <b>THE FIRST TONE CAN BE PLAYED ONCE. THE OPTIONS CAN BE PLAYED TWICE.</b>
			<div id="rel-test">
			<?php
				$rel_answer = array(648,380,1693,950,420,635,533,832);
				$q_number = sizeof($rel_answer);

				for ($j=0; $j < $q_number; $j++) { 
					echo
					("($i)
					<div class='test-box'>
						<div class='btn-group btn-group-lg'>
							<span class='input-group-addon' id='btnGroupAddon'>Tone</span>
							<button type='button' class='btn btn-secondary play-twice clicked-once enable-options' id='".$rel_answer[$j]."' ><span class='ion-play'></span></button>
							<button type='button' class='stop btn btn-secondary'><span class='ion-stop'></span></button>
						</div>
						<div class='must-fill-radio margin-out'>
						");
						$rel_possibilites = array(
							$rel_answer[$j] * (1 - 2/(6+2*$j)),
							$rel_answer[$j] * (1 - pow(2/(6+2*$j),1.33)),
							$rel_answer[$j] * (1 - pow(2/(6+2*$j),1.66)),
							$rel_answer[$j] * (1 + 2/(6+2*$j)),
							$rel_answer[$j] * (1 + pow(2/(6+2*$j),1.33)),
							$rel_answer[$j] * (1 + pow(2/(6+2*$j),1.66)));
						shuffle($rel_possibilites);
						$rel_options = array(
							// Correct answer
							$rel_answer[$j], 
							// Pick 3 random
							$rel_possibilites[0],
							$rel_possibilites[1],
							$rel_possibilites[2]);
						$opt_number = sizeof($rel_options);
						shuffle($rel_options);
						for ($k=0; $k < $opt_number; $k++) { 
							echo ("
								<div class='input-group'>
									<span class='input-group-addon'>
										<input type='radio' name='test$i' class='radio-fill' value='".$rel_options[$k]."'>
									</span>
									<span class='input-group-btn'>
									<button type='button' class='btn btn-secondary play-twice disabled option' id='".$rel_options[$k]."'><span class='ion-play'></span></button>
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
					$i++;
				}
				
			?>
			</div>
			<h2>3. Approximate Relative hearing test</h2> 
			You will hear a tone and then you'll be asked to identify the closest tone among four options.
			<br> <b>THE FIRST TONE CAN BE PLAYED ONCE. THE OPTIONS CAN BE PLAYED TWICE.</b>
			<div id="rel-test">
			<?php

				$rel_answer = array(703,1451,1360,993,257,698,1005,439);
				$q_number = sizeof($rel_answer);

				for ($j=0; $j < $q_number; $j++) { 
					echo
					("($i)
					<div class='test-box'>
						<div class='btn-group btn-group-lg'>
							<span class='input-group-addon' id='btnGroupAddon'>Tone</span>
							<button type='button' class='btn btn-secondary play-twice clicked-once enable-options' id='".$rel_answer[$j]."' ><span class='ion-play'></span></button>
							<button type='button' class='stop btn btn-secondary'><span class='ion-stop'></span></button>
						</div>
						<div class='must-fill-radio margin-out'>
						");
						$rel_possibilites = array(
							$rel_answer[$j] * (1 - 2/(6+2*$j)),
							$rel_answer[$j] * (1 - pow(2/(6+2*$j),1.33)),
							$rel_answer[$j] * (1 - pow(2/(6+2*$j),1.66)),
							$rel_answer[$j] * (1 + 2/(6+2*$j)),
							$rel_answer[$j] * (1 + pow(2/(6+2*$j),1.33)),
							$rel_answer[$j] * (1 + pow(2/(6+2*$j),1.66)));
						shuffle($rel_possibilites);
						$rel_options = array(
							// Correct answer
							$rel_answer[$j] * 1 + rand((-10000 * pow(2/(6+2*$j),2)),(10000 * pow(2/(6+2*$j),2))) / 10000, 
							// Pick 3 random
							$rel_possibilites[0],
							$rel_possibilites[1],
							$rel_possibilites[2]);
						$opt_number = sizeof($rel_options);
						shuffle($rel_options);
						for ($k=0; $k < $opt_number; $k++) {
							echo ("
								<div class='input-group'>
									<span class='input-group-addon'>
										<input type='radio' name='test$i' class='radio-fill' value='".$rel_options[$k]."'>
									</span>
									<span class='input-group-btn'>
									<button type='button' class='btn btn-secondary play-twice disabled option' id='".$rel_options[$k]."'><span class='ion-play'></span></button>
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
					$i++;
				}
				
			?>
			</div>

			<h2>4. Delayed absolute pitch test</h2>
			You will hear four different tones, named from 1 to 4, which you can play up to twice. 
			<br>Once you have finished hearing the four tones, you may press the "ready" button. 
			<br>When the "ready" button is pressed, you must wait 30 seconds, after which you can play a fifth tone. 
			<br>You will be asked to identify which of the initial four tones corresponds with the fifth tone.
			<br>

			<div id="del-abs-test">
			<?php 
				$del_abs_test = array(1191, 659, 1064, 929, 750, 432, 379, 1305);
				$q_number = sizeof($del_abs_test);

				for ($j=0; $j < $q_number; $j++) {
					$del_abs_possibilites = array(
						$del_abs_test[$j] * (1 - 2/(6+2*$j)),
						$del_abs_test[$j] * (1 - pow(2/(6+2*$j),1.33)),
						$del_abs_test[$j] * (1 - pow(2/(6+2*$j),1.66)),
						$del_abs_test[$j] * (1 + 2/(6+2*$j)),
						$del_abs_test[$j] * (1 + pow(2/(6+2*$j),1.33)),
						$del_abs_test[$j] * (1 + pow(2/(6+2*$j),1.66)));
					shuffle($del_abs_possibilites);
					$del_abs_options = array(
						$del_abs_test[$j], 
						$del_abs_possibilites[0],
						$del_abs_possibilites[1],
						$del_abs_possibilites[2]);
					$opt_number = sizeof($del_abs_options);
					shuffle($del_abs_options);

					echo("($i)
						<div class='test-box'>");
						for ($k=0; $k < $opt_number; $k++) {
							echo ("
								<div class='input-group'>
									<span class='input-group-addon'>" . ($k + 1) . "</span>
									<span class='input-group-btn'>
									<button type='button' class='btn btn-secondary play-twice' id='".$del_abs_options[$k]."' name='p$i'><span class='ion-play'></span></button>
									</span>
									<span class='input-group-btn'>
									<button type='button' class='stop btn btn-secondary'><span class='ion-stop'></span></button>
									</span>
								</div>
							");
						}
				echo
					("<br>
					<button type='button' class='btn btn-lg btn-secondary 30-timer' name='$i'>Ready</button>

					<div class='btn-group btn-group-lg margin-out'>
						<button type='button' class='btn btn-secondary play-twice clicked-once disabled' id='".$del_abs_test[$j]."' name='q$i'><span class='ion-play'></span></button>
						<button type='button' class='stop btn btn-secondary'><span class='ion-stop'></span></button>
					</div><br>
					<div class='input-group'>
						<select style='display: block' name='test$i' class='form-control pitch-sel must-fill'>
							<option value='' selected disabled>Select an option</option>
							<option value='".$del_abs_options[0]."'>1</option>
							<option value='".$del_abs_options[1]."'>2</option>
							<option value='".$del_abs_options[2]."'>3</option>
							<option value='".$del_abs_options[3]."'>4</option>
						</select>
					</div>
				</div><br>");

					$i++;
				}

			?>


			</div>
			<h2>5. Long interval absolute pitch test</h2>
			You will hear two pitches, each at most played twice.
			<br>Please try your best to remember these pitches for test 2,
			<br>which you can submit between 44 and 52 hours after submitting this first test.

			<div id="del-abs-test2">
			<?php 
				// copied answers from diag test - change at later time
				$del_abs_test2 = array(312, 2303);
				$titles = array('First tone', 'Second tone');


				for ($j=0; $j < 2; $j++) {
					echo("($i)
						<div class='test-box'>
							".$titles[$j]."<br>
							<div class='btn-group btn-group-lg margin-out'>
								<button type='button' class='btn btn-secondary play-twice' id='".$del_abs_test2[$j]."' name='q$i'><span class='ion-play'></span></button>
								<button type='button' class='stop btn btn-secondary'><span class='ion-stop'></span></button>
							</div><br>
						</div><br>");

					$i++;
				}
			?>


			</div>




			<button id="submission" type="submit" class="btn btn-primary">Submit Test</button>
		</form>

		<script src="https://code.jquery.com/jquery-3.1.1.slim.min.js" integrity="sha384-A7FZj7v+d/sdmMqp/nOQwliLvUsJfDHW+k9Omg/a/EheAdgtzNs3hpfag6Ed950n" crossorigin="anonymous"></script>
		<script src="application.js" type="text/javascript" charset="utf-8" async defer></script>
		<script src="https://cdnjs.cloudflare.com/ajax/libs/tether/1.4.0/js/tether.min.js" integrity="sha384-DztdAPBWPRXSA/3eYEEUWrWCy7G5KFbe8fFjk5JAIxUYHKkDx6Qin1DkWx51bBrb" crossorigin="anonymous"></script>
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-alpha.6/js/bootstrap.min.js" integrity="sha384-vBWWzlZJ8ea9aCX4pEW3rVHjgjt7zpkNpZk+02D9phzyeVkE+jo0ieGizqPLForn" crossorigin="anonymous"></script>
	</center>
</body>

</html>