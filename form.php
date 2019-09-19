<?php
session_start();
$data['result']='error';

function validStringLength($string,$min,$max) {
  $length = mb_strlen($string,'UTF-8');
  if (($length<$min) || ($length>$max)) {
    return false;
  }
  else {
    return true;
  }
}
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $data['result']='success';
    if (isset($_POST['first-name'])) {
      $firstname = $_POST['first-name'];
      if (!validStringLength($name,2,30)) {
        $data['first-name']='Поля имя содержит недопустимое количество символов.';   
        $data['result']='error';     
      }
    } else {
      $data['result']='error';
    }
    if (isset($_POST['last-name'])) {
      $lastname = $_POST['last-name'];
      if (!validStringLength($name,2,30)) {
        $data['last-name']='Поля имя содержит недопустимое количество символов.';   
        $data['result']='error';     
      }
    } else {
      $data['result']='error';
    }
    if (isset($_POST['email'])) {
      $email = $_POST['email'];
      if (!filter_var($email,FILTER_VALIDATE_EMAIL)) {
        $data['email']='Поле email введено неправильно';
        $data['result']='error';
      }
    } else {
      $data['result']='error';
    }
    if (isset($_POST['name'])) {
      $name = $_POST['name'];
      if (!validStringLength($name,2,30)) {
        $data['name']='Поля имя содержит недопустимое количество символов.';   
        $data['result']='error';     
      }
    } else {
      $data['result']='error';
    }
    if (isset($_POST['message'])) {
      $message = $_POST['message'];
      if (!validStringLength($message,20,500)) {
        $data['message']='Поле сообщение содержит недопустимое количество символов.';     
        $data['result']='error';   
      }      
    } else {
      $data['result']='error';
    }     
    if ($data['result']=='success'){
        $data['result']='error';
    }
  if ($data['result']=='success') {

    $output = "---------------------------------" . "\n";
    $output .= date("d-m-Y H:i:s") . "\n";
    $output .= "1 " . $firstname . "\n";
    $output .= "2 " . $lastname . "\n";  
    $output .= "3" . $email . "\n";
    $output .= "4" . $name . "\n";  
    $output .= "5" . $message . "\n";
    if (file_put_contents(dirname(__FILE__).'/message.txt', $output, FILE_APPEND | LOCK_EX)) {
        $data['result']='success';
    } else {
      $data['result']='error';         
    } 
 
    $myemail = "my_email@gmail.com"; 
    $from =  $firstname . $lastname; 
    $message_to_myemail = date("d-m-Y H:i:s") . "\n" . "1". $from . "\n" . "2" . $email . "\n" . "3" . $name . "\n" . "4" . $message . "\n";
        
  mail($myemail, $message_to_myemail);       
  }