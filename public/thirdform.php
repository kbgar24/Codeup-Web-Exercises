<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html>
<head> 
		<title>Warpseed Form</title>
		<meta charset="utf-8">
</head>
<body> 
		<h4>Basic Info</h4>
		<form method="POST" action="thirdform.php" id="form">
			<label for="name">Name</label>
			<input id="name" name ="name" type="text" placeholder="Enter Your Name"></input>
			<label for="password">Password</label>
			<input id="password" name ="password" type="text" placeholder="Enter Your Password"></input>
			<input type="checkbox" id="mailing_list" value="yes">
			<label for="spam" name="span" type="text">Check Here for Spam!</label>
			<br>
			<br>
			<label for="textarea">Review</label>
			<textarea id="review" name="review" rows="5" cols="40" placeholder="Text Area"></textarea>
			<p>What Operating System Do You Use?</p>
				<label>Operating System 1
				<input type="checkbox" id="os1" name="os[]">
				</label>
			<label>Operating System 2
				<input type="checkbox" id="os2" name="os[]">
			</label>
			<label>Operating System 3
				<input checked="checked" type="checkbox" id="os3" name="os[]">
			</label>
			<p>
        		<button type="submit">Submit</button>
    		</p>
    		<p>What is Dylan's Favorite Band?</p>
    			<label>
    				<input type="radio" name="band" value="Spice Girls">Nickelback
    			</label>
    			<label>
    				<input type="radio" name="band" value="Spice Girls">Spice Girls
    			</label>
    			<label>
    				<input type="radio" name="band" value="Spice Girls">Metalica
    			</label>
    		<p>
        		<button type="submit">Submit</button>
    		</p>
		</form>
</body>
</html>