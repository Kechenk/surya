<?php
include 'connection.php';

$filter = isset($_GET['filter']) ? $_GET['filter'] : '';
$contingent = isset($_GET['contingent']) ? $_GET['contingent'] : '';

$sql = "SELECT NAME FROM PARTICIPANT WHERE NAME LIKE '%" . $filter . "%' AND KONTINGEN = '" . $contingent . "'";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
    $names = array();
    while ($row = $result->fetch_assoc()) {
        $names[] = $row["NAME"];
    }
    sort($names);
    echo json_encode($names);
} else {
    echo json_encode(array());
}
$conn->close();
?>
