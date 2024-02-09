<?php
// Include the database connection
include 'connection.php';

// Get the selected name from the form
$selectedName = isset($_POST['selectedName']) ? $_POST['selectedName'] : '';

// Fetch data for the selected participant based on the name
$sql = "SELECT * FROM PARTICIPANT WHERE NAME = '$selectedName'";
$result = $conn->query($sql);

// Check if there are rows in the result
if ($result->num_rows > 0) {
    // Display participant data
    while ($row = $result->fetch_assoc()) {
        echo "Name: " . $row["NAME"] . "<br>";
        echo "NIK: " . $row["NIK"] . "<br>";
        echo "DOB: " . $row["DOB"] . "<br>";
        echo "Weight: " . $row["WEIGHT"] . "<br>";
        echo "Kontingen: " . $row["KONTINGEN"] . "<br>";
    }
} else {
    echo "No data found for the selected participant.";
}

// Close the database connection
$conn->close();
?>

