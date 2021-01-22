<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

    require('connect.php');
    mysqli_select_db($conn,'exam');

    
    $trp = mysqli_query($conn, "SELECT * from user");
    $rows = array();
    while($r = mysqli_fetch_assoc($trp)) {
     $rows[] = $r;
    }
    print json_encode($rows);

?>