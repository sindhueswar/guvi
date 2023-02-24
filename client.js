const data = { username:'username' , dob:'dob', age: 'age', contact: 'contact' };

fetch('/save-data', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
.then(response => {
  if (response.ok) {
    console.log('Data saved successfully!');
  } else {
    throw new Error('Unable to save data.');
  }
})
.catch(error => {
  console.error('Error:', error);
});