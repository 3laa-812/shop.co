document.addEventListener("DOMContentLoaded", function() {
    console.log("Navbar script loaded!");
});

const API_URL = "https://ecommerce.routemisr.com/api/v1/products";

// Function to fetch data
async function fetchProducts() {
    try {
        const response = await fetch(API_URL);
        const data = await response.json();
        displayProducts(data, "new-arrivals");
        displayProducts(data, "top-selling");
    } catch (error) {
        console.error("Error fetching data:", error);
    }
}

// Function to display products
function displayProducts(products, containerId) {
    const container = document.getElementById(containerId);
    container.innerHTML = "";

    products.forEach(product => {
        let productCard = `
            <div class="bg-white p-4 rounded-lg shadow-md">
                <img src="${product.imageCover}" alt="${product.title}" class="w-full h-48 object-cover rounded">
                <h3 class="text-lg font-semibold mt-2">${product.title}</h3>
                <p class="text-gray-500">${product.rating} ⭐ (${product.reviews} Reviews)</p>
                <p class="text-lg font-bold text-gray-900">$${product.price}</p>
                ${product.discount ? `<p class="text-red-500 text-sm">${product.discount}% Off</p>` : ""}
            </div>
        `;
        container.innerHTML += productCard;
    });
}

// Call function when page loads
fetchProducts();