<?php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Credentials: true");
header("Access-Control-Max-Age: 1000");
header("Access-Control-Allow-Headers: X-Requested-With, Content-Type, Origin, Cache-Control, Pragma, Authorization, Accept, Accept-Encoding");
header("Access-Control-Allow-Methods: PUT, POST, GET, OPTIONS, DELETE");

require('connect.php');
mysqli_select_db($conn,'loginDB');

if(isset($_POST['submit'])){
    $name=json_encode($_POST['username']);
    $password=json_encode($_POST['password']);
    $qu="select * from user where username='$name' and $password='$password'";

    $ex=mysqli_query($conn,$qu);
    $ge=mysqli_fetch_assoc($ex);

    if($ge){
        echo "username and password are correct";
    }

}
    



?>