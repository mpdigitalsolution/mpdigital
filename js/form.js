(function() {
    // Initialize EmailJS with your public key
    emailjs.init("efRrbEvsWA8_PG5Z0");
    
    // Get form elements
    const contactForm = document.getElementById('contactForm');
    const submitBtn = document.getElementById('submitBtn');
    const spinner = document.getElementById('spinner');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    
    // Function to display a notification toast
    function showNotification(message, type) {
      const notification = document.getElementById('notification');
      notification.textContent = message;
      if (type === 'error') {
        notification.classList.add('error');
      } else {
        notification.classList.remove('error');
      }
      notification.style.display = 'block';
      setTimeout(() => {
        notification.style.display = 'none';
      }, 3000);
    }
    
    // Form submission handler
    contactForm.addEventListener('submit', function(event) {
      event.preventDefault();
      
      // Show loading spinner and disable button
      spinner.style.display = 'block';
      submitBtn.disabled = true;
      
      // Hide previous messages
      formSuccess.style.display = 'none';
      formError.style.display = 'none';
      
      // Get form data
      const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        message: document.getElementById('message').value,
        to_email: "mpalomaresdigital@gmail.com" // This will be used in your EmailJS template
      };
      
      // Send the email using EmailJS with your actual service ID
      emailjs.send('service_tnsgf4p', 'template_contact', formData)
        .then(function(response) {
          // Hide spinner and enable button
          spinner.style.display = 'none';
          submitBtn.disabled = false;
          
          // Show success message and reset form
          formSuccess.style.display = 'block';
          contactForm.reset();
          
          // Show a notification toast
          showNotification("Email sent successfully!", "success");
          
          console.log('SUCCESS!', response.status, response.text);
        }, function(error) {
          // Hide spinner and enable button
          spinner.style.display = 'none';
          submitBtn.disabled = false;
          
          // Show error message
          formError.style.display = 'block';
          
          // Show an error notification toast
          showNotification("Failed to send email. Please try again later.", "error");
          
          console.log('FAILED...', error);
        });
    });
  })();