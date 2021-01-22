<?php
    $server="localhost";
    $password="root";
    $username="root";

    $conn=mysqli_connect($server,$username,$password);

    if(!$conn){
        die("cann't to connect ".mysqli_error());
    }


?>