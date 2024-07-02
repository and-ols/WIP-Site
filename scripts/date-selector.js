function restrictDate() {
// Get today's date
var today = new Date();

// Calculate the minimum allowed date (one week before today)
var minDate = new Date(today.getTime() + (6 * 24 * 60 * 60 * 1000));

// Get the date input element
var dateInput = document.getElementById("date");

// Set the minimum allowed date for the input
dateInput.setAttribute("min", minDate.toISOString().split('T')[0]);
}

// Call the function to apply the restriction on page load
window.onload = restrictDate();