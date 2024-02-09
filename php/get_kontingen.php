<?php
include 'connection.php';

$sql = "SELECT DISTINCT KONTINGEN FROM PARTICIPANT";
$result = $conn->query($sql);

if ($result->num_rows > 0) {
   $contingents = array();
   while ($row = $result->fetch_assoc()) {
      $contingents[] = $row["KONTINGEN"];
   }

   sort($contingents);

   echo json_encode($contingents);
} else {
   echo json_encode(array());
}

$conn->close();
?>
