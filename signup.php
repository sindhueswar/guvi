

  // Connect to the database and save the new user

   // Change this to the result of the database operation

<?php

if ($_SERVER["REQUEST_METHOD"] === "POST") {
  $username = $_POST["username"];
  $ema = $_POST["email"];
  $password = $_POST["password"];

 $servername = "localhost";
 $username = "username";
 $password = "password";
 $dbname = "database_name";

 // Create connection
 $conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$sql = "INSERT INTO table_name (column1, column2, column3)
VALUES ('value1', 'value2', 'value3')";

if ($conn->query($sql) === TRUE) {
    echo "New record created successfully";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();
$success = true;

header("Content-Type: application/json");
echo json_encode(["success" => $success]);
}