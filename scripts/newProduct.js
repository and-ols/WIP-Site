function bannerDay() {
   const today = new Date().getDay();
 }
 
 document.addEventListener("DOMContentLoaded", function () {
   const currentDay = bannerDay();
   if (currentDay == 1 || currentDay == 2 || currentDay == 3) 
   {
     document.getElementById("announcement").display = "flex";
   }
 });
 
 function closeBanner() {
   const banner = document.getElementById("announcement");
   banner.style.display = "none";
 }