// // Define the product data variable (assuming you have the JSON data in a separate file)
// let products;

// // Function to fetch product data (if using an external JSON file)
// function fetchProducts() {
//   fetch('/data/products.json') // Replace with the actual path to your JSON file
//     .then(response => response.json())
//     .then(data => {
//       products = data.products;
//       displayRandomProducts();
//     })
//     .catch(error => console.error(error));
// }

// // Function to select and display 3 random products
// function displayRandomProducts() {
//   const productContainer = document.getElementById("productGallery"); // Replace with your container ID

//   // Clear any existing content
//   productContainer.innerHTML = "";

//   // Select 3 random non-repeating product indices
//   const selectedIndices = new Set();
//   while (selectedIndices.size < 3) {
//     selectedIndices.add(Math.floor(Math.random() * products.length));
//   }

//   // Loop through selected indices and create elements for each product
//   for (const index of selectedIndices) {
//     const product = products[index];

//     const productElement = document.createElement("div");
//     productElement.classList.add("product"); // Add a CSS class for styling

//     const productTitle = document.createElement("h3");
//     productTitle.textContent = product.name;

//     const productImage = document.createElement("img");
//     productImage.src = product.icon;
//     productImage.alt = product.name;

//     const productTestimony = document.createElement("p");
//     productTestimony.textContent = product.testimony;

//     productElement.appendChild(productTitle);
//     productElement.appendChild(productImage);
//     productElement.appendChild(productTestimony);

//     productContainer.appendChild(productElement);
//   }
// }

// // Check if products are defined (external data) or use them directly (inline data)
// if (typeof products === 'undefined') {
//   fetchProducts();
// } else {
//   displayRandomProducts();
// }

// // Call the function on page load (or after data is fetched)
// window.onload = displayRandomProducts;

// Define the product data variable (assuming you have the JSON data in a separate file)
let products;

// Function to fetch product data (if using an external JSON file)
function fetchProducts() {
  fetch('/data/products.json') // Replace with the actual path to your JSON file
    .then(response => response.json())
    .then(data => {
      products = data.products;
      displayRandomProducts();
      startRotation(); // Call the startRotation function after data is fetched
    })
    .catch(error => console.error(error));
}

// Function to select and display 3 random products
function displayRandomProducts() {
  const productContainer = document.getElementById("productGallery"); // Replace with your container ID

  // Clear any existing content
  productContainer.innerHTML = "";

  // Select 3 random non-repeating product indices
  const selectedIndices = new Set();
  while (selectedIndices.size < 3) {
    selectedIndices.add(Math.floor(Math.random() * products.length));
  }

  // Loop through selected indices and create elements for each product
  for (const index of selectedIndices) {
    const product = products[index];

    const productElement = document.createElement("div");
    productElement.classList.add("product"); // Add a CSS class for styling

    const productTitle = document.createElement("h3");
    productTitle.textContent = product.name;

    const productImage = document.createElement("img");
    productImage.src = product.icon;
    productImage.alt = product.name;

    const productTestimony = document.createElement("p");
    productTestimony.textContent = product.testimony;

    productElement.appendChild(productTitle);
    productElement.appendChild(productImage);
    productElement.appendChild(productTestimony);

    productContainer.appendChild(productElement);
  }
}

// Function to start the rotation at intervals
function startRotation() {
  setInterval(() => {
    displayRandomProducts(); // Call displayRandomProducts again to update with new items
  }, 30000); // Call every 30 seconds (30000 milliseconds)
}

// Check if products are defined (external data) or use them directly (inline data)
if (typeof products === 'undefined') {
  fetchProducts();
} else {
  displayRandomProducts();
  startRotation(); // Call startRotation even if data is defined inline
}