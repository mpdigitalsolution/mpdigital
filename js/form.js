// emailjs-config.js
(function() {
  emailjs.init({
    publicKey: "efRrbEvsWA8_PG5Z0"
  });
})();

// Function to send email
function sendEmail(formData) {
  return emailjs.send(
    "service_tnsgf4p",
    "template_qo5y2ad",
    {
      to_email: formData.recipient || "mpalomaresdigital@gmail.com",
      from_name: formData.name || "Website Visitor",
      message: formData.message || "",
      reply_to: formData.email || "",
      // Add any other template parameters you need
    }
  ).then(
    function(response) {
      console.log("Email sent successfully", response);
      return response;
    },
    function(error) {
      console.error("Failed to send email:", error);
      throw error;
    }
  );
}