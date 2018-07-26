<?php
// This line is important to allow jquery request cross domain
header("Access-Control-Allow-Origin: *");

// Connection details.
// By default, XAMPP address will be localhost and default username is "root"
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "attapp";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get JSON data from POST method
$data = json_decode(file_get_contents('php://input'), true);

$name = $data["name"];
$sid = $data["sid"];
$email = $sid . "@student.rmit.edu.au"; // Generate email from student ID

$sql = "INSERT INTO att_student (rmit_id, full_name, email) VALUES ('{$name}', '{$sid}', '{$email}')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array('message' => 'OK'));
} else {
    echo json_encode(array('message' => 'FAIL'));
}
?>