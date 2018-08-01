<head>
    <title>Student Attendance Registration</title>
    <!-- Latest compiled and minified CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

    <!-- jQuery library -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

    <!-- Latest compiled JavaScript -->
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>

    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>

<nav class="navbar navbar-inverse bg-inverse">
    <button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <a class="navbar-brand" href="#">Student Attendance</a>
</nav>

<div class="panel panel-default">
    <div class="panel-heading">Check-in</div>
    <div class="panel-body">
        <div class="alert alert-info" role="alert">
            <p>Class available: Wednesday <strong>12:30 - 14:30</strong></p>
        </div>

        <form method="GET" action="http://webservice.bereadyattend.local/recordAttendance.php">
            <div class="form-group">
                <label for="sid">Student ID</label>
                <input type="text" class="form-control" name="sid">
            </div>
            <div class="form-group">
                <label for="name">Full Name</label>
                <input type="text" class="form-control" name="name">
            </div>

            <button type="submit" class="btn btn-default">Register your attendance</button>
        </form>
    </div>
</div>
</body>