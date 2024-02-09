<?php
$host = "127.0.0.1";
$port = "3306";
$dbname = "soba8550_FORKI";
$user = "soba8550_kechenk";
$password = "K3ch3nk48!";

// Create connection
$conn = new mysqli($host, $user, $password, $dbname, $port);


// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

    header("Cache-Control: no-store, no-cache, must-revalidate, max-age=0");
    header("Cache-Control: post-check=0, pre-check=0", false);
    header("Pragma: no-cache");
?>

