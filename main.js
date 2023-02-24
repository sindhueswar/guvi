// Get a reference to the "Sign Up" button
const signupBtn = $('#signupBtn');

// Bind an event listener to the "Sign Up" button
signupBtn.on('click', function(event) {
  // Prevent the default form submission behavior
  event.preventDefault();
  
  // Get the values of the form fields
  const username = $('#username').val();
  const dob = $('#dob').val();
  const age = $('#age').val();
  const contact = $('#contact').val();
  
  // Create a new XMLHttpRequest object
  const xhr = new XMLHttpRequest();
  
  // Configure the XMLHttpRequest object
  xhr.open('POST', '/submit-form.php');
  xhr.setRequestHeader('Content-Type', 'application/json');
  
  // Set up the data to be sent in the request
  const data = {
    username: username,
    dob: dob,
    age: age,
    contact: contact
  };
  
  // Convert the data to a JSON string
  const jsonData = JSON.stringify(data);
  
  // Send the AJAX request
  xhr.send(jsonData);
  
  // Handle the response from the server
  xhr.onreadystatechange = function() {
    if (xhr.readyState === 4 && xhr.status === 200) {
      const response = JSON.parse(xhr.responseText);
      alert(response.message);
    }
  };
  
  $.ajax({
    url: '/submit-form.php',
    type: 'POST',
    data: jsonData,
    success: function(response) {
      // Handle the response from the server
      console.log(response);
    },
    error: function(error) {
      console.log(error);
    }
  });
});




