// Prices for products
const productPrices = {
    carrot: 5,
    cabbage: 7,
    spinach: 6,
    mango: 10,
    potatoes: 8,
    milk: 12,
    juice: 15,
    water: 5
};

// Function to calculate order total
function calculateTotal() {
    let name = document.getElementById("customerName").value.trim();
    let email = document.getElementById("customerEmail").value.trim();
    let phone = document.getElementById("customerPhone").value.trim();
    let product = document.getElementById("product").value;
    let quantity = parseInt(document.getElementById("quantity").value);
    let acceptTerms = document.getElementById("acceptTerms").checked;

    if (name === "" || email === "" || phone === "") {
        alert("Please fill in all required fields!");
        return false;
    }

    if (!acceptTerms) {
        alert("Please accept the terms to place an order.");
        return false;
    }

    if (isNaN(quantity) || quantity < 1) {
        alert("Please enter a valid quantity.");
        return false;
    }

    let total = productPrices[product] * quantity;
    let deliveryMethod = document.querySelector('input[name="delivery"]:checked').value;
    let paymentMethod = document.querySelector('input[name="payment"]:checked').value;

    document.getElementById("orderResult").innerHTML =
        "<b>Order Summary:</b><br>" +
        "Customer: " + name + "<br>" +
        "Email: " + email + "<br>" +
        "Phone: " + phone + "<br>" +
        "Product: " + product + "<br>" +
        "Quantity: " + quantity + "<br>" +
        "Delivery Method: " + deliveryMethod + "<br>" +
        "Payment Method: " + paymentMethod + "<br>" +
        "Total Price: R" + total;

    alert("Order submitted successfully!");
    return false; // prevent form refresh
}

// Function to validate contact form
function validateFeedback() {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all required fields!");
        return false;
    }

    alert("Thank you for contacting us, " + name + "! We will reply soon.");
    return true; // allow form submission (optional: can also return false if no refresh wanted)
}

// Attach event listeners (optional: improves separation of HTML & JS)
window.addEventListener("DOMContentLoaded", () => {
    const orderForm = document.getElementById("orderForm");
    if (orderForm) orderForm.onsubmit = calculateTotal;

    const contactForm = document.getElementById("contactForm");
    if (contactForm) contactForm.onsubmit = validateFeedback;
});

