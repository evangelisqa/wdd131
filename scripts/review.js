document.getElementById('reviewForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting the traditional way

    // Retrieve the current count from local storage
    let submissionCount = localStorage.getItem('submissionCount');

    // If there's no count yet, initialize it to 0
    if (!submissionCount) {
        submissionCount = 0;
    }

    // Increment the count
    submissionCount++;

    // Save the updated count back to local storage
    localStorage.setItem('submissionCount', submissionCount);

    // Display the updated count
    document.getElementById('submissionCount').textContent = `You have submitted the form ${submissionCount} times.`;

    // Optionally, you can clear the form here if needed
    // document.getElementById('reviewForm').reset();
});

// Display the count on page load
document.addEventListener('DOMContentLoaded', function() {
    let submissionCount = localStorage.getItem('submissionCount') || 0;
    document.getElementById('submissionCount').textContent = `You have submitted the form ${submissionCount} times.`;
});
