const API_URL = window.location.hostname === 'localhost' ? 'http://localhost:1337' : 'todo';

export async function getProducts() {
    const response = await fetch(`${API_URL}/api/products`);
    return response.json();
}

export async function createProduct(product) {
    const response = await fetch(`${API_URL}/api/products`, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(product)
    });
    // add handler here in case of error not json data etc...
    return response.json();
}