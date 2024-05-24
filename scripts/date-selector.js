function validateDate(selectedDate) {
   const today = new Date();
   const twoWeeks = 14 * 24 * 60 * 60 * 1000;
   const maxDate = new Date(today.getTime() + twoWeeks);
   return selectedDate <= maxDate;
 }

 const form = document.getElementById("order-form");
 form.addEventListener("submit", function(event) {
   event.preventDefault(); // Prevent default form submission

   const selectedDate = new Date(document.getElementById("date").value);
   if (validateDate(selectedDate)) {
     console.log("Valid date selected!");
     // You can perform further actions here (e.g., submit form data using AJAX)
   } else {
     alert("Please select a date within the next two weeks.");
   }
 });