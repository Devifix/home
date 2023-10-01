// Retrieve the product details from localStorage
let product = JSON.parse(localStorage.getItem('product'));

// Update the details page with the product information
document.getElementById('product-image').src = product.image;
document.getElementById('product-name').textContent = product.name;
document.getElementById('product-price').textContent = product.price;
document.getElementById('product-description').textContent = product.description; // Make sure your products have a description property