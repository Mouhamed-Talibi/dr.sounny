document.addEventListener('DOMContentLoaded', function() {
    const fab = document.getElementById('fab');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const whatsappOption = document.getElementById('whatsappOption');
    const formOption = document.getElementById('formOption');
    const contactForm = document.getElementById('contactForm');
    const messageForm = document.getElementById('messageForm');
    
    // Open modal when FAB is clicked
    fab.addEventListener('click', function() {
        contactModal.style.display = 'flex';
        contactForm.style.display = 'none';
    });
    
    // Close modal when X is clicked
    closeModal.addEventListener('click', function() {
        contactModal.style.display = 'none';
    });
    
    // Close modal when clicking outside the content
    contactModal.addEventListener('click', function(e) {
        if (e.target === contactModal) {
            contactModal.style.display = 'none';
        }
    });
    
    // WhatsApp option
    whatsappOption.addEventListener('click', function() {
        // In a real implementation, this would open WhatsApp with a pre-filled message
        const phoneNumber = "212660077768"; // Example Moroccan number
        const message = "Bonjour, je souhaite prendre rendez-vous au Centre Ophtalmologique Dr Sounny.";
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
        contactModal.style.display = 'none';
    });
    
    // Form option
    formOption.addEventListener('click', function() {
        contactForm.style.display = 'block';
    });
    
    // Form submission
    messageForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form values
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        // In a real implementation, you would send this data to a server
        console.log('Form submitted:', { name, email, message });
        
        // Show success message
        alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
        
        // Reset form and close modal
        messageForm.reset();
        contactModal.style.display = 'none';
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            contactModal.style.display = 'none';
        }
    });
});