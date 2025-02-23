function sendToWhatsApp(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get the input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    // Create the WhatsApp message
    const whatsappMessage = `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\nMessage: ${message}`;
    
    // Encode the message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // WhatsApp number
    const phoneNumber = '7205852219';
    
    // Create the WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, '_blank');
  }

  function checkForm() {
    // You can add form validation logic here if needed
  }