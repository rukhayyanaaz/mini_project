
    // Function to store signup data and switch to login form
    document.getElementById('signupForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('signupEmail').value;
      const password = document.getElementById('signupPassword').value;
      const confirmPassword = document.getElementById('confirmPassword').value;

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      localStorage.setItem('userEmail', email);
      localStorage.setItem('userPassword', password);

      document.getElementById('check').checked = false;
    });

    // Function to validate login data
    document.getElementById('loginForm').addEventListener('submit', function(e) {
      e.preventDefault();

      const email = document.getElementById('loginEmail').value;
      const password = document.getElementById('loginPassword').value;

      const storedEmail = localStorage.getItem('userEmail');
      const storedPassword = localStorage.getItem('userPassword');

      if (email === storedEmail && password === storedPassword) {
        window.location.href = 'main.html';
      } else {
        alert("Invalid email or password");
      }
    });