<?php

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Get the form data
    $username = $_POST['username'];
    $dob = $_POST['dob'];
    $age = $_POST['age'];
    $contact = $_POST['contact'];
  
    // Create an associative array to hold the form data
    $form_data = array(
      'username' => $username,
      'dob' => $dob,
      'age' => $age,
      'contact' => $contact
    );
  
    // Encode the form data as a JSON string
    $json_data = json_encode($form_data);
  
    // Write the JSON data to a file
    file_put_contents('data.json', $json_data);

    // Send a response back to the client
    $response = array('message' => 'Form data successfully submitted.');
    echo json_encode($response);
  }
  





?>
