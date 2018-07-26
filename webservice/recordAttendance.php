<?php
// This line is important to allow jquery request cross domain
header("Access-Control-Allow-Origin: *");

// Connection details.
// By default, XAMPP address will be localhost and default username is "root"
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bereadyattend";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// Get JSON data from POST method
$data = json_decode(file_get_contents('php://input'), true);

$sid = $data["sid"];
$name = $data["name"];


$sql = "INSERT INTO att_class_attendance (student_id, student_name) VALUES ('{$sid}','{$name}')";

if (mysqli_query($conn, $sql)) {
    echo json_encode(array('message' => 'OK'));
} else {
    echo json_encode(array('message' => 'FAIL'));
}
?>