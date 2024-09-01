document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevent default form submission
        
        // Simple validation
        if (!nameInput.value || !emailInput.value || !messageInput.value) {
            alert('Please fill in all fields.');
            return;
        }
        
        // Simulate sending data (you would replace this with an actual API call)
        console.log('Form Submitted');
        console.log('Name:', nameInput.value);
        console.log('Email:', emailInput.value);
        console.log('Message:', messageInput.value);
        
        // Clear the form after submission
        form.reset();
        
        // Provide feedback to the user
        alert('Your message has been sent successfully!');
    });
});
document.getElementById("download-btn").addEventListener("click", function() {
    const link = document.createElement("a");
    link.href = "resume.pdf"; // Path to your resume file
    link.download = "resume.pdf"; // The file name to download as
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
});
