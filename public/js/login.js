const loginFormHandler = async (event) => {
  event.preventDefault();

  // Collect values from the login form
  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

  if (email && password) {
    // Send a POST request to the API endpoint
    const response = await fetch('/api/users/login', {
      method: 'POST',
      body: JSON.stringify({ email, password }),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      setTimeout(function(){
        document.location.replace('/dev');
      }, 1000)
      
      // document.location.reload();
      // console.log(response)
    } else {
      alert(response.statusText);
    }
  }
};
  
  document
    .querySelector('.login-form')
    .addEventListener('submit', loginFormHandler);
  