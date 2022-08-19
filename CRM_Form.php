<?php

$first_name = $_POST['first_name'];
$last_name = $_POST['last_name'];
$email = $_POST['email'];

$type_work = $_POST['type_work'];

// формируем URL в переменной $queryUrl
// https://b24-wbhmer.bitrix24.ru/rest/1/xo7a6aj3nbcy8xri/
$queryUrl = 'https://b24-wbhmer.bitrix24.ru/rest/1/xo7a6aj3nbcy8xri/crm.lead.add.json';

// формируем параметры для создания лида в переменной $queryData
$queryData = http_build_query(array(
    'fields' => array(
		'TITLE' => 'Заявка c сайта',
		'NAME' => $first_name,
		'LAST_NAME' => $last_name,
		'EMAIL' => Array(
	       "n0" => Array(
	           "VALUE" => "$email",
	           "VALUE_TYPE" => "WORK",
	       ),
	    ),
	    'COMMENTS' => $type_work,
	),
	'params' => array("REGISTER_SONET_EVENT" => "Y")
));

// обращаемся к Битрикс24 при помощи функции curl_exec
$curl = curl_init();
curl_setopt_array($curl, array(
    CURLOPT_SSL_VERIFYPEER => 0,
    CURLOPT_POST => 1,
    CURLOPT_HEADER => 0,
    CURLOPT_RETURNTRANSFER => 1,
    CURLOPT_URL => $queryUrl,
    CURLOPT_POSTFIELDS => $queryData,
));
$result = curl_exec($curl);
curl_close($curl);
$result = json_decode($result, 1);

var_dump($result);

?>