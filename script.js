
let displayLimit = 5; // Set the number of products to display at a time
let showAllButton = document.getElementById('showAllButton'); // Assuming this is your h2 element

function displayProducts(products, limitDisplay = true, ...tags) {
    let productContainer = document.getElementById('productContainer');
    let start = 0;

    function display() {
        // Clear the product container
        productContainer.innerHTML = '';

        let end = limitDisplay ? Math.min(start + displayLimit, products.length) : products.length;
        for (let i = start; i < end; i++) {
            let product = products[i];

            // If the product does not have all the tags, skip it
            if (!tags.every(tag => product.tags.includes(tag))) {
                continue;
            }

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

        start = limitDisplay ? start + displayLimit : 0;

        // Update the button text based on the limitDisplay state
        showAllButton.textContent = limitDisplay ? 'Show All' : 'Show Less';
    }

    // Initially display the first set of products
    display();

    // Add an event listener to the "Show All" button
    showAllButton.addEventListener('click', function() {
        limitDisplay = !limitDisplay; // Toggle the limitDisplay state
        start = 0;
        display();
    });
}
function searchProducts(products, query) {
    let productContainer = document.getElementById('productContainer');
    let searchResultsDiv = document.querySelector('.show-result');

    // Clear the product container and the search results div
    productContainer.innerHTML = '';
    searchResultsDiv.innerHTML = '';

    let found = false;

    for (let product of products) {
        // If the product name does not include the query (case-insensitive), skip it
        if (!product.name.toLowerCase().includes(query.toLowerCase())) {
            continue;
        }

        found = true;

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

    // Create a new element for the search results message
    let searchResultsMessage = document.createElement('p');
    searchResultsMessage.className = 'result'; // Add your CSS class here

    if (found) {
        // Set the text of the search results message
        searchResultsMessage.textContent = 'Showing results for: "' + query + '"';
    } else {
        searchResultsMessage.textContent = 'No products found';
    }

    // Add the search results message to the search results div
    searchResultsDiv.appendChild(searchResultsMessage);
}
let products = [
    {
        name: 'Lenovo M710Q',
        price: '$285',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTIxi3pJkb1P63KKNnVO6K65mCqeFFFYOqXZUXer8Fw2AtNgBKDpn2PNOVqCwhqZwaAuALhQ8bradl7kfrVC4pnXbbG51A5Ez-kKjfA1ALOvgzTMiv1C081Hg&usqp=CAE',
        description: '1',
        tags: ['pc'] // Add tags here
    },
    {
        name: 'iPhone 11 128GB',
        price: '$164',
        image: 'https://shopdunk.com/images/thumbs/0012132_iphone-11-128gb_550.jpeg',
        description: 'The iPhone 11 is a smartphone from Apple Inc. It was unveiled on September 10, 2019, as the thirteenth generation of iPhone, succeeding the iPhone XR. It originally came with iOS 13, but can be updated to iOS 17.2.1. It has an A13 Bionic CPU and 4 GB LPDDR4X RAM. Storage options include 64, 128 or 256 GB. The display is a 6.1 inch diagonal Liquid Retina LED-backlit IPS LCD with a resolution of 1792×828 px. It has dual 12MP Wide and Ultra Wide cameras. The battery is a 3.83 V 11.91 Wh (3110 mAh) Li-ion. It supports Wi-Fi 6, Bluetooth 5.0, and Ultra-wideband connectivity. It is water-resistant up to 2 m for 30 minutes. The iPhone 11 comes in six colors: black, green, purple, red, white, and yellow. It was discontinued on September 7, 2022.',
        tags: ['phone'] // Add tags here
    },
    {
        name: 'Galaxy Book Pro 15',
        price: '$410',
        image: 'https://product.hstatic.net/1000238589/product/laptop_samsung_galaxy_book_pro_15_950xdb-ke6_9822f2dbcc6c45e0bd10c9394203ad00_large.jpg',
        description: 'The Samsung Galaxy Book Pro 15 950xdb-ke6 is a 15.6-inch laptop that features a 1080p AMOLED display, an Intel Core i7-1165G7 processor, 16 GB of LPDDR4x RAM, 512 GB of NVMe SSD, and an Intel Iris Xe Graphics G7 96EUs integrated GPU. It is one of the lightest laptops in its class, weighing only 1.07 kg (2.36 lbs). It also has a fingerprint reader, a microSD card reader, a Thunderbolt 4 port, and a fast charging battery. It is part of the Intel Evo platform, which means it meets certain standards for performance, responsiveness, battery life, and connectivity. The laptop is designed for users who want a powerful and portable device that can handle various tasks, such as productivity, entertainment, and gaming',
        tags: ['laptop'] // Add tags here
    },
    {
        name: 'Rog Flow X16',
        price: '$2500',
        image: 'img/asusrogflowx16.jpeg',
        description: 'The ROG Flow X16 is a gaming laptop with two versions. The 2022 version has an AMD Ryzen™ 9 6900HS processor, GeForce RTX™ 3070 Ti Laptop GPU, a Mini LED Nebula HDR Display™, and can be used in various configurations thanks to its 360° hinge. It also has quad speakers, a 3D Mic Array for voice capture, and Dolby Atmos® support.',
        tags: ['laptop'] // Add tags here
    },
    {
        name: 'STAR | R5 5600G',
        price: '$2500',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyrzQxrS2OYY0Wg5V8WUMZYWbNhqiO-Wquck9zp1YGramdCdUoNC7L_0z6euHaiOY3zKD6y5a0zrpIars_2-qtvF48nhKvDcM2MFMhyURCfXcVkObTK4ATdw&usqp=CAE',
        description: 'The STAR desktop with the AMD Ryzen 5 5600G features an AMD Ryzen 5 5600G Processor with Radeon Graphics (Chinese Edition), an MSI A520M-A Pro AM4 AMD Micro-ATX Motherboard, Corsair Vengeance LPX 8GB 3200MHz DDR4 Desktop RAM, a Value-Top VT-R858 RGB Micro-ATX Gaming Casing, and an HP EX900 M.2 250GB PCIe NVMe Internal SSD. This configuration offers powerful performance and efficient computing for both work and gaming.',
        tags: ['pc'] // Add tags here
    },
    {
        name: 'Dell XPS 13 9315',
        price: '$1000',
        image: 'data:image/jpeg;base64,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',
        description: 'The Dell XPS 13 9315 is a laptop that features a 12th Gen Intel Core i5-1230U processor with up to 4.40 GHz Turbo. It comes with Windows 11 Home, English as the operating system. The graphics card is Intel Iris Xe Graphics. The display is a 13.4" FHD+ 1920x1200, 60Hz, Non-Touch, Anti-Glare, 500 nit, InfinityEdge. It has 8 GB of LPDDR5, 5200 MT/s (onboard), dual-channel memory. The storage is a 256 GB, PCIe x2 NVMe, SSD integrated. The keyboard is an English US backlit keyboard. It has 2 x Thunderbolt 4 (USB Type-C with DisplayPort and Power Delivery) ports. The dimensions are Height: 0.55 in. (13.99 mm), Width: 11.63 in. (295.4 mm), Depth: 7.86 in. (199.4 mm), and it weighs a minimum of 2.59 lb (1.17 kg). The camera is a 720p at 30 fps HD RGB camera, 400p at 30 fps IR camera, with dual-array microphones.',
        tags: ['laptop'] // Add tags here
    },
    {
        name: 'HP Omen 16 2022',
        price: '$1600',
        image: 'data:image/jpeg;base64,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',
        description: 'The HP Omen 16 2022 is a gaming laptop. It’s built for the next generation of gaming with 12th Gen Intel Core Processors. It can have up to an Intel Core i9-12900H processor with up to 5.0 GHz with Intel Turbo Boost Technology. The graphics card can be up to a NVIDIA GeForce RTX 3070 Ti Laptop GPU with 8 GB GDDR6 dedicated. It can have up to 32 GB DDR5-4800 MHz RAM. The storage can be up to a 2 TB PCIe Gen4 NVMe TLC M.2 SSD. The operating system is Windows 11 Home. The display is a 40.9 cm (16.1") diagonal display with IPS, micro-edge and anti-glare. It has up to QHD (2560 x 1440) resolution and up to 165 Hz refresh rate. It has up to Intel Wi-Fi 6E3 AX411 (2x2) and Bluetooth 5.2 combo for wireless connectivity. It has a multi-format SD media card reader. The sound is provided by Bang & Olufsen with dual speakers. The keyboard is a full-size, per key RGB backlit, shadow black keyboard and 26-Key Rollover Anti-Ghosting Key technology. It has an HP Imagepad with multi-touch gesture support. The external I/O Ports include 1 SuperSpeed USB Type-A 5Gbps signaling rate (HP Sleep and Charge), 2 SuperSpeed USB Type-A 5Gbps signaling rate, HDMI 2.1, 2 Thunderbolt 4 with USB4 Type-C 40Gbps signaling rate (USB Power Delivery, DisplayPort 1.4, HP Sleep and Charge), and 2 SuperSpeed USB Type-C 10Gbps signaling rate (USB Power Delivery, DisplayPort 1.4, HP Sleep and Charge).',
        tags: ['laptop'] // Add tags here
    },
    {
        name: 'Crucial 32GB Ddr5',
        price: '$190',
        image: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8SEhAQEhMVEhUWExUSEBURExMQEBcQFRUWFhgWExUYHSggGholGxYVITIhJSkvLjAuGCA3ODMsOSktOisBCgoKDg0OGhAQGjImHSUuLS0vLS8tLSsrLTUtLzAtLS0tLTUzKzEtNS8tLS0tLS0tLy0tKy8vLS0tLS0tLS0rLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAABwECAwUGBAj/xABIEAABBAADBAUJBAUJCQAAAAABAAIDEQQSIQUTMUEGByJRYRQWIzJUcYGS0WKRocEXJELh8AgzNVJ0grPS8RU0Q0Ryk6OxtP/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgQFA//EACoRAQACAQMBBgYDAAAAAAAAAAABAhEDEhMxBAVRodHwQWGBkcHhFCFx/9oADAMBAAIRAxEAPwCcUREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQFE3W/0zlwkzsKx8sbnYWOXDvhcGASulma8y36wyxtoe9Syvnv+UD/ScP8AYov8fEJjI5jz82x7dP8AMPoqefm2Pbp/mH0XNkpaqOk8/Nse3T/MPonn5tj26f5h9Fzdqoy0ddbFCtK1uzenLkbs8K1Do/PzbHt0/wAw+iefe2PbsR84+i5u0tB0nn3tj27EfOPoqefe2PbsR84+i5u1c4jSiToLsAa1qBqdL58+4IOj8+tse3Yj5x9FaOnm1/b8R84+i50yGquhd/kus6M49s0rWyYYYjdwPGW4Xglz2kvyz9ltcNNdVJ/oU2f0v2xM/djabozlLs2IxDIGaECg5w9bXh4FYX9NdtAhvl2Is1lp95rNAt01B5LpOjm3sfHs10EeCdJDkxQ3onjYAHOkLvR8dLcPGtFwTzE127yZcuucOdvhQzaEOyX4gUg3eK6Y7didklxeLidQOWW43UeB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cFPCKIiICIiDSdM+kI2fg5cYYzKIywZA4MJzyNZxINetfwXy50q2p5TOcRkdHvN7KGvIIAlxM8tRuAGZoMhBP9YP8K+kOtfZ0uI2ZiIYmPkc50ByxtzyZWzxucWt5kNBNeCidvVZNMCWSYmOIF4hjxOEeZWsa52XMGvDQTbnaAeudNSs2tFYzKxGUZRdogWBZq3Gmj3nkvVj39jC63WHA1LTXpptOyNON0bOvHgpDPVBOQCZnmtADg5TTe4ek4K4dT82ZtTvHA5hgpRR/wC5xWOanuJ9F2Si+PUgWBZAsmmizVk8h4r2Y5/osIM11HJ+001+sSmqAsd+uuvdSkH9D85BJmfd88FISSeJvP8AxaqOp2e21O/kb8ikFH505qe4n0NkoxYbIFgXpZNAXzPgvbjXVDhRnzVvxWdrmj0vIAWAeOvHkpAPU/OcxMzybvXBykuJOp9f4qw9UUvZudwvjeCkbWtc3pzU9xJslGgd/HJbDGOAw+HbmByyYm8r2uGpi1AqwDWhPGl3buqjV2bF27U64fVx79ZLJVzOqlzcrhjCD9mDKRy47zuKnPp+PlJx2RmilDE9V0kjnufjnyOAoOkhL3HLoBbpbrwWE9U5oHyvifZ+H/kV/kafj5Scdkex4KV0b5msJjYQJH2KaSWgAi74vb96rgsIJM9yxxZW5vSuy5tD2Waau04eIUiw9V+7lhzTunj8pw7ZImxOjzwvnjY+3NkJFNcSSOTTw4jU4joOZNp4jCsbLh4BPO2N5ie9jY2Zy0B76BBoAEnnzWo1KzEzHRJrMThwyo4aFSf+idtE+VnjVblvP++q/olZ2R5YdePoW0L/AL6zz08fKV2S1Gx9rQPzvdK2Il1jfuGawxjdQ0eGmi20e1MM0EeU4U3XHMe8c26VxWSfquLy578fI5wAaC9mdxZq0tsyXVcuFWsY6pI+z+ucePoG6a/9fuXbTvSK1iuOn++jzdTuuL3m+eqyTaWGJcfKsML5Bzmg+4Zef5rxYPauHa+S5oQDXrOYTo3TKTG/TiPjypbFvVMwF1YwigaIhaLvQj1+dq0dUrCBWKJPMNgDq+56xrd4xq12/ifR9Oz93Ro33xLW4naOB1xBfE54jybsSstzS66DNxkvU8ddPv8AHH0mwo/4A46j9XDSL0sCIXoAF0jeqAhxyzz6XTm4OQXy4g87+5P0NOoHfS+7yR3+Zc3LX3Eu3bKOJsS1znOJaLN6ZWjXwaAB8AvZ/tqXd7rMzJkyfzcWbKRXr5c11zu13w6m3h3ZnlFA04YVwN1w9b4K0dTD6vfSXdV5IeFXfr/BOWvz+0m2Wz6nummSeLZW6D9+WyCcSg5cmBjthYGakbjLx0uta1m5Ql0J6ASYLaeBkazEybt0/lE0kTIsLu34Zwj3YsuzZ3lpvmNFNq3HRBERUEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQf/Z',
        description: '2',
        tags: ['accessory'] // Add tags here
    },
    {
        name: 'Galaxy M14',
        price: '$109',
        image: 'https://cdn.dienthoaigiakho.vn/photos/1682566498656-ss-m14-5g-bl-4.jpg',
        description: 'The Samsung Galaxy M14 is a 5G smartphone that was released in March 2023. It has a 6.6-inch FHD+ display with a 90Hz refresh rate and Gorilla Glass 5 protection. It is powered by a 5nm Exynos 1330 processor and comes with 4GB or 6GB of RAM and 64GB or 128GB of storage. It has a 6000mAh battery that supports 25W fast charging in India and 15W fast charging in other regions. It has a 50MP main camera, a 2MP macro camera, a 2MP depth camera, and a 13MP selfie camera. It runs on Android 13 with One UI core 5.1. It is available in Navy Blue, Light Blue, and Silver colors.',
        tags: ['phone'] // Add tags here
    },
    {
        name: 'Galaxy A04e',
        price: '$66',
        image: 'https://passhop.vn/sites/default/files/products/Samsung-Galaxy-A04e-Price-in-South-Africa-1536x1536.png',
        description: '2',
        tags: ['phone'] // Add tags here
    },
    {
        name: 'Assassin X 120',
        price: '$12',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcRczAEY1Ro7_BD2wbQllXvemgbVVvsTr-RiuBuguhFUdeoqKfJtEXI6vJZ2i_wuEpK4w6c3VsSA7EUpbP50uIIkjnVICKIrA-PqTQ4hT0Sdf4ktWROx7BUR&usqp=CAE',
        description: 'The Thermalright Assassin X 120 Refined SE RGB is a CPU cooler. It has a heatsink with dimensions of L120 mm x W46 mm x H148 mm and it weighs 630g. It has 6mm heatpipe x 4 units. The TL-C12C FAN has dimensions of L120 mm x W120 mm x H25 mm and it weighs 120g. The rated speed is 1550 RPM±10% (MAX). The noise level is 25.6 dBA. The air flow is 66.17 CFM (MAX). The air pressure is 1.53mm H2O (MAX). The ampere is 0.20 A. It has a 4 Pin (PWM Fan connector) and a 3 PIN 5V ARGB Connector. The bearing type is S-FDB Bearing.',
        tags: ['accessory'] // Add tags here
    },
    {
        name: 'LG Velvet 5G',
        price: '$240',
        image: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQc3cDv06OdgvCdgtJZfDPt_eEvj4jW318p5_jx7rRiXW8-tMk-qKXUZNkzB57Q4BWhRtRkNgsasHM4cO5VFvQ_T3ex6GtD&usqp=CAE',
        description: 'The HP EliteDesk 800 G3 Desktop Mini Business PC is one of HP’s most secure and manageable PCs. It’s ultra-small, which makes it suitable for modern workplaces where space might be limited. It can be configured with a range of processors, memory, and storage options to suit different needs. It supports various operating systems, including Windows. It has multiple ports for connectivity, including USB and HDMI. It comes with integrated graphics. It has a stylishly redesigned chassis for the modern workplace.',
        tags: ['phone'] // Add tags here
    },
    {
        name: 'ExpertBook B1',
        price: '$610',
        image: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTH5RY5q78d0XCj2ACGFRawDi241psc7DNwCFQeit4PKsZkLrb1E6b8MiwTrfZi-B91v4cTteP58BAxLKd_n64MyPMoEZkfGnLph1cIDGqke3KnpB9RyCfmrA&usqp=CAE',
        description: 'The ASUS ExpertBook B1 is a laptop designed for business use. It’s powered by up to a 13th Gen Intel Core i7 processor and features up to Intel Iris Xe graphics. The laptop has a compact 15.6-inch screen and offers enterprise-grade security features. It’s built to meet the MIL-STD 810H US military standard for durability. The laptop is designed with a compact form factor and a bright, clear 15.6-inch display for vibrant visuals. It delivers impressive performance and is ready for everyday business tasks. It also features robust security features including face login, a fingerprint sensor, a Kensington lock slot, a physical webcam shield, and TPM 2.0 security. The laptop meets the industry-leading MIL-STD 810H US military standard, offering exceptional protection wherever you go',
        tags: ['laptop'] // Add tags here
    },
    {
        name: 'HP Elitedesk 800 G3',
        price: '$90',
        image: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQ_pV8mdFZ521z9AjZStiYNOTRBOorKojmWxYMWcPJ9CzeB5T-J8DwEmD-JfIXsdvU9G8vSvoFCN_Axmouul-PEzbYRwvmu&usqp=CAE',
        description: 'The HP EliteDesk 800 G3 Desktop Mini Business PC is one of HP’s most secure and manageable PCs. It’s ultra-small, which makes it suitable for modern workplaces where space might be limited. It can be configured with a range of processors, memory, and storage options to suit different needs. It supports various operating systems, including Windows. It has multiple ports for connectivity, including USB and HDMI. It comes with integrated graphics. It has a stylishly redesigned chassis for the modern workplace.',
        tags: ['pc'] // Add tags here
    },
    {
        name: 'Rog Phone 7',
        price: '$632',
        image: 'data:image/jpeg;base64,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',
        description: 'The ROG Phone 7 is a gaming smartphone made by Asus. It’s powered by the Qualcomm Snapdragon 8 Gen2, SM8550, Octa-core CPUs, with a clock speed of up to 3.2 GHz. It supports 5G connectivity. The phone features a 6.78" FHD+ display with a resolution of 2448x1080 and a refresh rate of 165Hz. It has a triple rear camera setup with a 50MP main sensor, a 13MP ultrawide sensor, and a 5MP macro sensor. The front camera is 32MP. The phone runs on Android 13 with Game Genie, ROG UI, and Classic UI. It has a 6000 mAh battery and comes with a ROG 30W power adapter. The phone is available with either 12GB or 16GB of LPDDR5X RAM and either 256GB or 512GB of UFS4.0 storage.',
        tags: ['phone'] // Add tags here
    },
    {
        name: 'i5-12400f',
        price: '$80',
        image: 'https://nguyencongpc.vn/media/product/250-25018-i5-12400f-trayi5-12400f-trayi5-12400f-tray.jpg',
        description: 'CPU Intel Core I5-12400F Tray (Up To 4.4Ghz, 6 Cores 12 Threads, 18MB Cache, 65W) - Socket Intel LGA 1700)',
        tags: ['accessory'] // Add tags here
    },
];