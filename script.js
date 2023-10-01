let products = [
    {
        name: 'Rog Flow X16',
        price: '$2500',
        image: 'img/asusrogflowx16.jpeg',
        description: '1'
    },
    {
        name: 'Rog Flow X16',
        price: '$2500',
        image: 'img/asusrogflowx16.jpeg',
        description: '2'
    },
    {
        name: 'Rog Flow X16',
        price: '$2500',
        image: 'img/asusrogflowx16.jpeg',
        description: '3'
    },
    {
        name: 'Rog Flow X16',
        price: '$2500',
        image: 'img/asusrogflowx16.jpeg',
        description: 'Add your product description here'
    },
    {
        name: 'Rog Flow X16',
        price: '$2500',
        image: 'img/asusrogflowx16.jpeg',
        description: 'Add your product description here'
    },
    {
        name: 'Rog Flow X16',
        price: '$2500',
        image: 'img/asusrogflowx16.jpeg',
        description: 'Add your product description here'
    },
    // Add more products as needed
];

function displayProducts(products) {
    let productContainer = document.getElementById('productContainer');

    for (let product of products) {
        let productBox = document.createElement('div');
        productBox.className = 'box';

        let productImage = document.createElement('img');
        productImage.src = product.image;
        productBox.appendChild(productImage);

        let productName = document.createElement('h2');
        productName.textContent = product.name;
        productBox.appendChild(productName);

        let productPrice = document.createElement('h5');
        productPrice.textContent = product.price;
        productBox.appendChild(productPrice);

        // Add an event listener to the product box
        productBox.addEventListener('click', function() {
            // Store the product details in localStorage
            localStorage.setItem('product', JSON.stringify(product));

            // Navigate to the details page
            window.location.href = 'details.html';
        });

        productContainer.appendChild(productBox);
    }
}

displayProducts(products);