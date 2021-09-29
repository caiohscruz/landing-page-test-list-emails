<?php

$connString = getenv("JAWSDB_URL");

$username= substr($connString, 8, 16);
$password = substr($connString, 25, 16);
$hostname = substr($connString, 42, 62);
$db_name = substr($connString, -16, 16);

try{
    $mysql = new mysqli($hostname, $username, $password, $db_name);
}catch(Exception $err){
    echo "<font color='red'>Erro interno - conexão. Por favor, contacte o administrador</font>";
}

?>