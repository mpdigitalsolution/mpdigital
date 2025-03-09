// Replace your existing messageForm event listener with this updated version
messageForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Get form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;
  
  // Prepare template parameters - make sure these match EXACTLY with your template variables
  const templateParams = {
    from_name: name,
    reply_to: email,  // Make sure your template expects 'reply_to' instead of 'from_email'
    message: message
    // Don't include parameters that aren't in your template
  };
  
  console.log("Sending with params:", templateParams); // For debugging
  
  // Send email using EmailJS
  emailjs.send('service_tnsgf4p', 'template_qo5y2ad', templateParams)
    .then(function(response) {
      console.log('SUCCESS!', response.status, response.text);
      alert(`Thank you, ${name}! Your message has been sent. I'll get back to you soon.`);
      
      // Reset form and close modal
      messageForm.reset();
      messageModal.classList.remove('active');
    }, function(error) {
      console.log('FAILED...', error);
      alert('Sorry, there was a problem sending your message. Please try again later.');
    });
});