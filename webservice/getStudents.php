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

$sql = "SELECT id, student_id, student_name, check_in_time FROM att_class_attendance ORDER BY check_in_time DESC";
$result = $conn->query($sql);

$students = [];

if ($result->num_rows > 0) {
    // output data of each row
    while($row = $result->fetch_assoc()) {
        $student = [];
        $student['id'] =  $row["id"];
        $student['student_id'] =  $row["student_id"];
        $student['student_name'] =  $row["student_name"];
        $student['check_in_time'] =  $row["check_in_time"];
        $students[] = $student;
    }
} else {
    echo "0 results";
}

// Just in case, we close database connection here
$conn->close();

// Reply by JSON format
echo json_encode($students);
?>