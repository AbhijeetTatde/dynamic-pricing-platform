document.getElementById('registerForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Registration form submitted!');
});

document.getElementById('loginForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Login form submitted!');
});

document.getElementById('productForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const productName = document.getElementById('productName').value;
  const productPrice = document.getElementById('productPrice').value;
  const productList = document.getElementById('productList').querySelector('ul');
  const newProduct = document.createElement('li');
  newProduct.textContent = `${productName} - $${productPrice}`;
  productList.appendChild(newProduct);
  alert('Product listed successfully!');
  document.getElementById('productForm').reset();
});

function showScreen(screenId) {
  const screens = document.querySelectorAll('.screen');
  screens.forEach(screen => {
    screen.style.display = 'none';
  });
  document.getElementById(screenId).style.display = 'block';
}

// Show the register screen by default
showScreen('register');
