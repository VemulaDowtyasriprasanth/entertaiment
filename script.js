let cart = [];

function addToCart(productName, price) {
    cart.push({productName, price});
    alert(`${productName} added to cart.`);
}

document.getElementById('cart-button').addEventListener('click', () => {
    let cartContents = 'Cart:\n';
    cart.forEach((item, index) => {
        cartContents += `${index + 1}. ${item.productName} - $${item.price}\n`;
    });
    alert(cartContents);
});
