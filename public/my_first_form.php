<?php
  var_dump($_GET);
  var_dump($_POST);
?>
<!DOCTYPE html>
<html>
<head>	
	<meta charset="utf-8">
	<title>My First Form</title>
</head>
<body>
	<main>
	<form method="POST" action="/my_first_form.php">
    <p>
        <label for="login">Login</label>
        <input id="login" name="login" type="text" placeholder="Enter Login">
    </p>
    <p>
        <label for="password">Password</label>
        <input id="password" name="password" type="password" placeholder="Enter Your Password">
    </p>
    <p>
        <button type="submit">Submit</button>
    </p>
	<br>
	<h2>Gahoo!gle Email</h2>
	<form>
	<p>
        <label for="to">To</label>
        <input id="to" name="to" type="text" placeholder="Enter Recipient(s) Email">
    </p>
    <p>
        <label for="from">From</label>
        <input id="from" name="from" type="text" placeholder="Enter Your Email">
    </p>
    <p>
    	<label>Save a copy in sent folder?
				<input checked="checked" type="checkbox" id="sentsave" name="sentsave">
		</label>
    </p>
     <p>
        <label for="subject">Subject</label>
        <input id="subject" name="subject" type="text" placeholder="Enter Subject">
    </p>
    <p>
        <label for="body">Body</label>
        <textarea id="body" name="body" type="text" rows="25" cols="40" placeholder="Compose Email"></textarea>
    </p>
     <p>
        <button type="submit"><img src="/img/send.jpg"></button>
    </p>
	<p>	
        <ol><h1>Multiple Choice Test</h1>
		<li><p><strong>What is your favorite color?</strong></p></li>
			<label>
				<input type="radio" name="color" value="Red">Red
			</label>
			<label>
				<input type="radio" name="color" value="Green">Green
			</label>
			<label>
				<input type="radio" name="color" value="Blue">Blue
			</label>
			<label>
				<input type="radio" name="color" value="None">None of these
			</label>
    	<li><p><strong>What is your favorite beverage?</strong></p></li>
			<label>
				<input type="radio" name="beverages" value="Water">Water
			</label>
			<label>
				<input type="radio" name="beverages" value="Soda">Soda
			</label>
			<label>
				<input type="radio" name="beverages" value="Milk">Milk
			</label>
			<label>
				<input type="radio" name="beverages" value="Alcohol">Rubbing Alcohol
			</label>
			<label>
				<input type="radio" name="beverages" value="None">None of these
			</label>
    	<li><p><strong>Where would you like to go on vacation?</strong><em> Select all that apply!</em></p></li>
    			<label>
    				<input type="checkbox" name="vacation" value="Mallorca">Mallorca
    			</label>
    			<label>
    				<input type="checkbox" name="vacation" value="Grand Cayman">Grand Cayman
    			</label>
    			<label>
    				<input type="checkbox" name="vacation" value="Hawaii">Hawaii
    			</label>
        <li><p><strong>What are your favorite movie genres?</strong><em> Select all that apply!</em></p></li>
             <select id="movie-genres" name="movie-genres[]" multiple>
                <option value="horror">Horror</option>
                <option value="action">Action</option>
                <option value="drama">Drama</option>
                <option value="comedy">Comedy</option>
                <option value="documentary">Documentary</option>
                <option value="love interest">Love Interest</option>
            </select>
    	</ol>
    	</p>
        <p>
        <label for="comments">Comments</label>
        <textarea id="comments" name="comments" type="text" rows="5" cols="40" placeholder="Nobody actually reads this stuff."></textarea>
    	</p>
		<p><h2>Select Testing</h2></p>
		<label for="test">Are you ok?</label>
    	<select id="test" name="test">
    		<option value=1>Yes</option>
    		<option value=0 selected>No</option>
    	</select>
        <h2>Favorite Hobbies</h2>
        <label>Tennis
            <input type="checkbox" id="checkbox-tennis" value="checkbox-tennis" name="hobbies">
        </label>
         <label>Netflix
            <input type="checkbox" id="checkbox-netflix" value="checkbox-netflix" name="hobbies">
        </label> <label>Stamp Collecting
            <input type="checkbox" id="checkbox-stamp collecting" value="checkbox-stamp-collecting" name="hobbies">
        </label>
        <label for="snacks">Select your favoite snacks</label>
            <option value="cheetos">Cheetos</option>
            <option>Cheetos</option>
            <option>Cheetos</option>
    </form>
	</main>
</body>
</html>
