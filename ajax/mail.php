<?php
    $name = $_POST['name'];
    $tel = $_POST['tel'];
    $email = $_POST['email'];
    $message = $_POST['message'];

    $subject = "=?utf-8?B?".base64_encode("Сообщение с сайта АльфЭнерго")."?=";
    $headers = "From: $email\r\nReply-to: $email\r\nContent-type: text/html; charset=utf-8\r\n";

    $success = mail("ax4gema@yandex.ru", $subject, $message, $headers);
    echo $success;
?>