document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('myForm').addEventListener('submit', function(event) {
        // Your validation logic here
         // Prevent the default form submission
    event.preventDefault();

    // Get all required input fields
    const requiredFields = document.querySelectorAll('.form-group [required]');
    let firstInvalidField = null;

    // Loop through required fields to check for validity
    for (const field of requiredFields) {
        if (!field.checkValidity()) {
            // If the field is invalid, set it as the first invalid field
            if (!firstInvalidField) {
                firstInvalidField = field;
            }
            // Optionally display an error message
            field.classList.add('invalid'); // Add a class for styling invalid fields
        } else {
            field.classList.remove('invalid'); // Remove invalid class if valid
        }
    }

    // If there's an invalid field, scroll to it
    if (firstInvalidField) {
        firstInvalidField.scrollIntoView({ behavior: 'smooth', block: 'center' });
        firstInvalidField.focus(); // Optional: Focus on the invalid field
        return; // Stop further processing
    }

    // If all fields are valid, you can submit the form or handle it as needed
    console.log('Form submitted successfully!');
    // Optionally submit the form using AJAX or handle your logic here
    // this.submit(); // Uncomment to enable actual form submission
    });
});

// document.getElementById('myForm').addEventListener('submit', function(event) {
   
// });
