<?php
include "db_connection.php";

function sanitize($item) {
    global $link;
    $item = html_entity_decode($item);
    $item = trim($item);
    $item = stripslashes($item);
    $item = strip_tags($item);
    $item = mysqli_real_escape_string($link, $item);
    return $item;
}

$firstName = '';
$lastName = '';
$email = '';
$comment = '';
if (isset($_REQUEST["firstName"])) {$firstName = sanitize($_REQUEST["firstName"]);};
if (isset($_REQUEST["lastName"])) {$lastName = sanitize($_REQUEST["lastName"]);};
if (isset($_REQUEST["email"])) {$email = sanitize($_REQUEST["email"]);};
if (isset($_REQUEST["comment"])) {$comment = sanitize($_REQUEST["comment"]);};

$sql = "INSERT INTO `contact`(`id`, `firstName`, `lastnName`, `email`, `comment`, `timestamp`)
        VALUES(NULL, )
