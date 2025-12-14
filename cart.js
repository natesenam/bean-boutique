// cart.js - Cart Management System

// Cart data structure stored in localStorage
const CART_STORAGE_KEY = "beanBoutiqueCart";

// Initialize cart from localStorage or create empty cart
function getCart() {
  const cartData = localStorage.getItem(CART_STORAGE_KEY);
  return cartData ? JSON.parse(cartData) : [];
}

// Save cart to localStorage
function saveCart(cart) {
  localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
}

// Add item to cart
function addToCart(item) {
  const cart = getCart();
  const existingItem = cart.find(
    (cartItem) => cartItem.id === item.id && cartItem.type === item.type
  );

  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({
      ...item,
      quantity: 1,
    });
  }

  saveCart(cart);
  updateCartBadge();
  showSnackbar(`${item.name} added to cart!`);
  return cart;
}

// Remove item from cart
function removeFromCart(itemId, itemType) {
  const cart = getCart();
  const filteredCart = cart.filter(
    (item) => !(item.id === itemId && item.type === itemType)
  );
  saveCart(filteredCart);
  updateCartBadge();
  return filteredCart;
}

// Update item quantity in cart
function updateCartQuantity(itemId, itemType, quantity) {
  const cart = getCart();
  const item = cart.find(
    (cartItem) => cartItem.id === itemId && cartItem.type === itemType
  );

  if (item) {
    if (quantity <= 0) {
      return removeFromCart(itemId, itemType);
    }
    item.quantity = quantity;
    saveCart(cart);
    updateCartBadge();
  }
  return cart;
}

// Get total number of items in cart
function getCartItemCount() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.quantity, 0);
}

// Get cart total price
function getCartTotal() {
  const cart = getCart();
  return cart.reduce((total, item) => total + item.price * item.quantity, 0);
}

// Update cart badge in navigation
function updateCartBadge() {
  const badge = document.querySelector(".cart-badge");
  const count = getCartItemCount();

  if (badge) {
    if (count > 0) {
      badge.textContent = count;
      badge.style.display = "flex";
    } else {
      badge.style.display = "none";
    }
  }
}

// Show snackbar notification
function showSnackbar(message) {
  // Remove existing snackbar if any
  const existingSnackbar = document.querySelector(".snackbar");
  if (existingSnackbar) {
    existingSnackbar.remove();
  }

  // Create snackbar element
  const snackbar = document.createElement("div");
  snackbar.className = "snackbar";
  snackbar.textContent = message;
  document.body.appendChild(snackbar);

  // Show snackbar
  setTimeout(() => {
    snackbar.classList.add("show");
  }, 10);

  // Hide and remove snackbar after 3 seconds
  setTimeout(() => {
    snackbar.classList.remove("show");
    setTimeout(() => {
      snackbar.remove();
    }, 300);
  }, 3000);
}

// Initialize cart badge on page load
document.addEventListener("DOMContentLoaded", function () {
  updateCartBadge();
});

// Export functions for use in other scripts
if (typeof module !== "undefined" && module.exports) {
  module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    getCartItemCount,
    getCartTotal,
    updateCartBadge,
    showSnackbar,
  };
}
