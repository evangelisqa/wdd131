document.getElementById('storyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Get form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const story = document.getElementById('story').value;
    const photo = document.getElementById('photo').files[0];
    const permission = document.querySelector('input[name="permission"]').checked;

    // Validate form data (additional validation can be added here)
    if (name && email && story && permission) {
        alert('Thank you for your interest in sharing your story!');
        // Here you can add code to handle the form submission, e.g., sending data to a server
    } else {
        alert('Please fill out all required fields.');
    }
});

