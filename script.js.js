// JavaScript file for transportation system website

// Function to handle button click
function handleButtonClick() {
  alert("Thank you for your interest! This feature will be available soon.");
}

// Get all buttons and attach event listener
document.addEventListener('DOMContentLoaded', function () {
  const buttons = document.querySelectorAll('.card button');
  buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
  });
});


