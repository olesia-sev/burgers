<?php

$name = htmlspecialchars($_POST['form_name']);
$phone = htmlspecialchars($_POST['form_phone']);
$address = htmlspecialchars($_POST['form_address']);
$house = htmlspecialchars($_POST["form_house"]);
$building = htmlspecialchars($_POST['form_building']);
$flat = htmlspecialchars($_POST['form_flat']);
$floor = htmlspecialchars($_POST['form_floor']);
$comment = htmlspecialchars($_POST['form_comment']);
$payment = htmlspecialchars($_POST['form_payment']);
$callback = htmlspecialchars($_POST['form_callback']);

if (empty($phone)) {
  echo json_encode([
    "status" => 'ERROR',
    "text" => 'Пустой телефон'
  ]);

  die();
}

if (empty($address)) {
  echo json_encode([
    "status" => 'ERROR',
    "text" => 'Пустой адрес'
  ]);
  
  die();
}

$mail_message = '
<html>
    <head>
        <title>Заявка</title>
    </head>
    <body>
        <h2>Заказ</h2>
        <ul>
            <li>Имя: ' . $name . '</li>
            <li>Телефон: ' . $phone . '</li>
            <li>Адрес: ' . $address . '</li>
            <li>Дом: ' . $house . '</li>
            <li>Корпус: ' . $building . '</li>
            <li>Квартира: ' . $flat . '</li>
            <li>Этаж: ' . $floor . '</li>
            <li>Комментарий: ' . $comment . '</li>
            <li>Оплата: ' . $payment . '</li>
            <li>Перезвон: ' . $callback . '</li>
        </ul>
    </body>
</html>    
';

$headers = "From: Администратор сайта <olesya0191@gmail.com>\r\n" .
"MIME-Version: 1.0" . "\r\n" .
"Content-type: text/html; charset=UTF-8" . "\r\n";

$mail = mail('olesya0191@gmail.com', 'Заказ', $mail_message, $headers);

$data = [];

if ($mail) {
    $data['status'] = "OK";
    $data['text'] = "Письмо успешно отправлено";
} else {
    $data['status'] = "ERROR";
    $data['text'] = "На сервере произошла ошибка";
}

echo json_encode($data);

die();
