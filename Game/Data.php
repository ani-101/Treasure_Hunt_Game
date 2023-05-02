<!DOCTYPE html>
<html>

<head>
    <meta charset="UTF-8">
    <title>Treasure Hunt Game</title>
    <style>
        /* Define CSS styles for the user interface */
        body {
            font-family: Arial, sans-serif;
            background-color: #f0f0f0;
        }

        h1 {
            text-align: center;
        }

        #startButton {
            display: block;
            margin: 0 auto;
            padding: 10px 20px;
            font-size: 24px;
            font-weight: bold;
            color: #fff;
            background-color: #008CBA;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #startButton:hover {
            background-color: #005f70;
        }

        form {
            display: block;
            margin: 0 auto;
            width: 30%;
            text-align: center;
            padding: 69px;
        }

        input[type=text],
        input[type=number],
        input[type=email],
        input[type=password],
        select {
            display: block;
            margin: 10px auto;
            padding: 10px;
            width: 100%;
            font-size: 18px;
            border-radius: 5px;
            border: 1px solid #ccc;
            box-sizing: border-box;
        }

        #submitForm {
            display: block;
            margin: 0 auto;
            padding: 10px 20px;
            font-size: 18px;
            font-weight: bold;
            color: #fff;
            background-color: #008CBA;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        #submitForm:hover {
            background-color: #005f70;
        }

        table {
            border-collapse: collapse;
        }

        th,
        td {
            border: 1px solid black;
            padding: 8px;
        }
    </style>
</head>

<body>



    <?php
    if ($_SERVER['REQUEST_METHOD'] == 'POST') {
        $name = $_POST['name'];
        $age = $_POST['age'];
        $email = $_POST['email'];
        $Password = $_POST['Password'];



        //connecting to a database
        $servername = "localhost";
        $username = "root";
        $password = "Gamer";
        $database = "DataRecord";

        $conn = mysqli_connect($servername, $username, $password, $database);
        if (!$conn) {
            die("sorry, failed to connect: " . mysqli_connect_error());
        } else {


            $sql = "INSERT INTO `record`(`Name`, `Age`, `Email`,`Password`) VALUES ('$name', '$age', '$email','$Password')";
            $result = mysqli_query($conn, $sql);

            //add new trip to table
            if ($result) {
                echo '<div class="alert alert-warning alert-dismissible fade show" role="alert">
				<strong>Success</strong> Your query has been submitted successfully!!
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			  </div>';

            } else {
                //echo "record not inserted because". mysqli_error($conn);
                echo '<div class="alert alert-danger alert-dismissible fade show" role="alert">
				<strong>ERROR</strong> Your entry has not been submitted due to some technical issue!!
				<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
			  </div>';

            }
        }



    }
    ?>

    <h1>Welcome to the Treasure Hunt Game!</h1>
    <form action="/php_tu/Data.php" id="userInfoForm" method="post">
        <label for="name">Enter Name:</label>
        <input type="text" id="name" name="name" required>
        <label for="age">Enter Age:</label>
        <input type="number" id="age" name="age" required>
        <label for="email">Enter Email:</label>
        <input type="email" id="email" name="email" required>
        <label for="Password">Enter Password:</label>
        <input type="password" id="Password" name="Password" required>
    </form>

    <button onclick="startTimer()" onclick="saveResponse()" id="startButton">Start the Game</button>
    <p>Time elapsed: <span id="timer">0</span> seconds</p>


    <script>
        // Get the button element
        const startButton = document.getElementById('startButton');
        var startTime;
        var timer = document.getElementById("timer");

        function startTimer() {
            startTime = new Date().getTime();
            setInterval(updateTimer, 1000);
        }

        function updateTimer() {
            var currentTime = new Date().getTime();
            var timeElapsed = (currentTime - startTime) / 1000;
            timer.innerText = timeElapsed + " seconds";
        }




        // Add an event listener to the button
        startButton.addEventListener('click', function () {
            // Code to start the game goes here

            alert('The game has started!');
            window.location.href = 'tHunt2.html';

        });
    </script>
</body>

</html>