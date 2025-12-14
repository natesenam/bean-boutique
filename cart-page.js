// cart-page.js - Cart page functionality

// Render cart items
function renderCartItems() {
  const cart = getCart();
  const cartItemsContainer = document.getElementById("cart-items");
  const emptyCart = document.getElementById("empty-cart");
  const checkoutBtn = document.getElementById("checkout-btn");

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = "";
    emptyCart.style.display = "flex";
    checkoutBtn.disabled = true;
    updateCartSummary();
    return;
  }

  emptyCart.style.display = "none";
  checkoutBtn.disabled = false;

  cartItemsContainer.innerHTML = cart
    .map(
      (item) => `
        <div class="cart-item" data-id="${item.id}" data-type="${item.type}">
            <div class="cart-item-image">
                <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
                <h3 class="cart-item-name">${item.name}</h3>
                <p class="cart-item-type">${
                  item.type === "coffee" ? "Coffee" : "Equipment"
                }</p>
                ${
                  item.description
                    ? `<p class="cart-item-description">${item.description}</p>`
                    : ""
                }
            </div>
            <div class="cart-item-price">
                <span class="price">GHS ${item.price.toFixed(2)}</span>
            </div>
            <div class="cart-item-quantity">
                <button class="quantity-btn" onclick="decreaseQuantity('${
                  item.id
                }', '${item.type}')">-</button>
                <input type="number" class="quantity-input" value="${
                  item.quantity
                }" min="1" 
                       onchange="updateQuantity('${item.id}', '${
        item.type
      }', this.value)">
                <button class="quantity-btn" onclick="increaseQuantity('${
                  item.id
                }', '${item.type}')">+</button>
            </div>
            <div class="cart-item-total">
                <span class="item-total">GHS ${(
                  item.price * item.quantity
                ).toFixed(2)}</span>
            </div>
            <button class="remove-item-btn" onclick="removeItem('${
              item.id
            }', '${item.type}')" aria-label="Remove item">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                </svg>
            </button>
        </div>
    `
    )
    .join("");

  updateCartSummary();
}

// Update cart summary
function updateCartSummary() {
  const subtotal = getCartTotal();
  const shipping = subtotal > 0 ? 5.99 : 0;
  const total = subtotal + shipping;

  document.getElementById(
    "cart-subtotal"
  ).textContent = `GHS ${subtotal.toFixed(2)}`;
  document.getElementById("cart-shipping").textContent =
    shipping > 0 ? `GHS ${shipping.toFixed(2)}` : "Free";
  document.getElementById("cart-total").textContent = `GHS ${total.toFixed(2)}`;
}

// Increase quantity
function increaseQuantity(itemId, itemType) {
  const cart = getCart();
  const item = cart.find(
    (cartItem) => cartItem.id === itemId && cartItem.type === itemType
  );
  if (item) {
    updateCartQuantity(itemId, itemType, item.quantity + 1);
    renderCartItems();
  }
}

// Decrease quantity
function decreaseQuantity(itemId, itemType) {
  const cart = getCart();
  const item = cart.find(
    (cartItem) => cartItem.id === itemId && cartItem.type === itemType
  );
  if (item && item.quantity > 1) {
    updateCartQuantity(itemId, itemType, item.quantity - 1);
    renderCartItems();
  }
}

// Update quantity from input
function updateQuantity(itemId, itemType, quantity) {
  const qty = parseInt(quantity);
  if (qty > 0) {
    updateCartQuantity(itemId, itemType, qty);
    renderCartItems();
  } else {
    removeItem(itemId, itemType);
  }
}

// Remove item
function removeItem(itemId, itemType) {
  removeFromCart(itemId, itemType);
  showSnackbar("Item removed from cart");
  renderCartItems();
}

// Checkout handler
document.addEventListener("DOMContentLoaded", function () {
  renderCartItems();

  const checkoutBtn = document.getElementById("checkout-btn");
  checkoutBtn.addEventListener("click", function () {
    alert(
      "Checkout functionality would be implemented here. Thank you for your interest!"
    );
  });
});
