function addFormStep() {
    const formContainer = document.getElementById('form-container');
    const newFormItem = document.querySelector('.form-item').cloneNode(true); // Clone the first form-item

    // Reset all fields in the cloned form item
    const inputs = newFormItem.querySelectorAll('input, select');
    inputs.forEach(input => {
        input.value = ''; // Clear the value
        input.disabled = true; // Keep the fields disabled initially
        input.setAttribute('style', ''); // Reset any custom styles
    });

    // Optionally, you might want to change the IDs or names if they need to be unique
    // E.g., newFormItem.querySelector('input').id = 'new-id';

    formContainer.appendChild(newFormItem); // Append the new form item
}