let count = 0;

function addToCart() {
  count++;
  document.getElementById('cart-count').innerText = count;
  alert('Product added to your cart successfully!');
}
