<?php 
$name = $_POST['name'];
$phone = $_POST['phone_number'];
$email = $_POST['email'];

$token = "6422613854:AAFaja5ehDXiMLzvEyxuEtPX3zut8MgfnuI";
$chat_id = "-968370702";

$arr = array(
    'Name: ' => $name,
    'Phone: ' => $phone,
    'Email: ' => $email
    );

foreach ($arr as $key => $value) {
    $txt .= "<b>".$key."</b>".$value."%0A";
}

$sendToTelegram = fopen("https://api.telegram.org/bot{$token}/sendMessage?chat_id={$chat_id}&parse_mode=html&text={$txt}", "r");

if ($sendToTelegram) {
    header('Location: thank-you.html');
    return true;
} else {
    echo('Error');
}
?>