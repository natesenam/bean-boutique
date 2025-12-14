// add-to-cart.js - Add to cart functionality for product pages

// Coffee products data
const coffeeProducts = {
  "ethiopian-yirgacheffe": {
    id: "ethiopian-yirgacheffe",
    name: "Ethiopian Yirgacheffe",
    type: "coffee",
    price: 18.99,
    image: "images/ethopian.jpeg",
    description:
      "Bright and floral with delicate citrus notes, this Ethiopian heirloom variety offers a tea-like body and complex sweetness.",
  },
  "house-blend": {
    id: "house-blend",
    name: "House Blend",
    type: "coffee",
    price: 16.99,
    image: "images/house-blend.jpeg",
    description:
      "Our signature blend balances rich chocolate notes with a smooth caramel finish, perfect for everyday enjoyment.",
  },
  "colombian-supremo": {
    id: "colombian-supremo",
    name: "Colombian Supremo",
    type: "coffee",
    price: 17.99,
    image: "images/columbian.jpeg",
    description:
      "Medium-bodied with balanced acidity, featuring notes of brown sugar and hints of tropical fruit from high-altitude farms.",
  },
  "sumatra-mandheling": {
    id: "sumatra-mandheling",
    name: "Sumatra Mandheling",
    type: "coffee",
    price: 19.99,
    image: "images/sumatra.jpeg",
    description:
      "Full-bodied and earthy with low acidity, this Indonesian coffee delivers rich, syrupy sweetness with herbal complexity.",
  },
  "morning-glory": {
    id: "morning-glory",
    name: "Morning Glory",
    type: "coffee",
    price: 15.99,
    image: "images/morning glory.jpeg",
    description:
      "A bright breakfast blend combining Central American beans for a clean, vibrant cup that awakens the senses.",
  },
  "guatemala-antigua": {
    id: "guatemala-antigua",
    name: "Guatemala Antigua",
    type: "coffee",
    price: 18.99,
    image: "images/guatemala Antigua.jpeg",
    description:
      "Grown in volcanic soil, this coffee offers intense cocoa flavors with a smoky finish and velvety body.",
  },
  "swiss-water-decaf": {
    id: "swiss-water-decaf",
    name: "Swiss Water Decaf",
    type: "coffee",
    price: 17.99,
    image: "images/swiss water decaf.jpeg",
    description:
      "All the flavor without the caffeine, processed naturally to preserve rich chocolate and nutty characteristics.",
  },
  "costa-rica-tarrazu": {
    id: "costa-rica-tarrazu",
    name: "Costa Rica Tarrazu",
    type: "coffee",
    price: 19.99,
    image: "images/costa rica tarrazu.jpeg",
    description:
      "Honey-processed beans from high altitudes create exceptional sweetness with bright acidity and crisp apple notes.",
  },
  "espresso-intenso": {
    id: "espresso-intenso",
    name: "Espresso Intenso",
    type: "coffee",
    price: 18.99,
    image: "images/espresso Intenso.jpeg",
    description:
      "Our boldest blend crafted specifically for espresso, delivering intense crema and deep chocolate-caramel flavors.",
  },
};

// Equipment products data
const equipmentProducts = {
  "espresso-machine": {
    id: "espresso-machine",
    name: "Professional Espresso Machine",
    type: "equipment",
    price: 899.99,
    image: "images/espresso machine.jpeg",
    description:
      "Dual boiler system with PID temperature control ensures precise extraction and consistent steam pressure for café-quality espresso at home.",
  },
  "pour-over-dripper": {
    id: "pour-over-dripper",
    name: "Copper Pour-Over Dripper",
    type: "equipment",
    price: 89.99,
    image: "images/pour over device.jpeg",
    description:
      "Handcrafted copper dripper with superior heat retention and elegant design. Perfect for bringing out the delicate notes in single-origin beans.",
  },
  "french-press": {
    id: "french-press",
    name: "French Press",
    type: "equipment",
    price: 34.99,
    image: "images/french press.jpeg",
    description:
      "Classic brewing method with borosilicate glass carafe and stainless steel plunger. Produces full-bodied, rich coffee with natural oils intact.",
  },
  "burr-grinder": {
    id: "burr-grinder",
    name: "Precision Burr Grinder",
    type: "equipment",
    price: 249.99,
    image: "images/precision burr grinder.jpeg",
    description:
      "Conical burr grinder with 40 grind settings. From espresso-fine to French press coarse, achieve consistent particle size for optimal extraction.",
  },
  "gooseneck-kettle": {
    id: "gooseneck-kettle",
    name: "Gooseneck Kettle",
    type: "equipment",
    price: 79.99,
    image: "images/gooseneck kettle.jpeg",
    description:
      "Variable temperature electric kettle with precision spout for controlled pouring. Essential for pour-over and tea brewing enthusiasts.",
  },
  aeropress: {
    id: "aeropress",
    name: "AeroPress",
    type: "equipment",
    price: 29.99,
    image: "images/aeropress.jpeg",
    description:
      "Versatile and portable brewing device using air pressure to create smooth, rich coffee. Perfect for travel and experimenting with brew recipes.",
  },
  "cold-brew-maker": {
    id: "cold-brew-maker",
    name: "Cold Brew Maker",
    type: "equipment",
    price: 49.99,
    image: "images/cold brew maker.jpeg",
    description:
      "Slow-drip cold brew tower with adjustable flow rate. Creates smooth, low-acidity concentrate perfect for iced coffee and cocktails.",
  },
  chemex: {
    id: "chemex",
    name: "Chemex Coffee Maker",
    type: "equipment",
    price: 44.99,
    image: "images/chemex coffee maker.jpeg",
    description:
      "Iconic hourglass design with thick paper filters produces exceptionally clean, bright coffee. A beautiful centerpiece for any kitchen.",
  },
  "moka-pot": {
    id: "moka-pot",
    name: "Moka Pot",
    type: "equipment",
    price: 24.99,
    image: "images/moka pot.jpeg",
    description:
      "Traditional Italian stovetop espresso maker. Produces strong, full-bodied coffee with rich crema using steam pressure extraction.",
  },
};

// Product name to ID mapping
const productNameToId = {
  // Coffee
  "Ethiopian Yirgacheffe": "ethiopian-yirgacheffe",
  "House Blend": "house-blend",
  "Colombian Supremo": "colombian-supremo",
  "Sumatra Mandheling": "sumatra-mandheling",
  "Morning Glory": "morning-glory",
  "Guatemala Antigua": "guatemala-antigua",
  "Swiss Water Decaf": "swiss-water-decaf",
  "Costa Rica Tarrazu": "costa-rica-tarrazu",
  "Espresso Intenso": "espresso-intenso",
  // Equipment
  "Professional Espresso Machine": "espresso-machine",
  "Copper Pour-Over Dripper": "pour-over-dripper",
  "French Press": "french-press",
  "Precision Burr Grinder": "burr-grinder",
  "Gooseneck Kettle": "gooseneck-kettle",
  AeroPress: "aeropress",
  "Cold Brew Maker": "cold-brew-maker",
  "Chemex Coffee Maker": "chemex",
  "Moka Pot": "moka-pot",
};

// Initialize add to cart buttons
document.addEventListener("DOMContentLoaded", function () {
  // Add buttons to coffee cards
  const coffeeCards = document.querySelectorAll(".coffee-card");
  coffeeCards.forEach((card) => {
    const coffeeName = card.querySelector(".coffee-name")?.textContent.trim();
    if (coffeeName && productNameToId[coffeeName]) {
      const productId = productNameToId[coffeeName];
      const product = coffeeProducts[productId];
      if (product) {
        addAddToCartButton(card, product);
      }
    }
  });

  // Add buttons to equipment cards
  const equipmentCards = document.querySelectorAll(".equipment-card");
  equipmentCards.forEach((card) => {
    const equipmentName = card
      .querySelector(".equipment-name")
      ?.textContent.trim();
    if (equipmentName && productNameToId[equipmentName]) {
      const productId = productNameToId[equipmentName];
      const product = equipmentProducts[productId];
      if (product) {
        addAddToCartButton(card, product);
      }
    }
  });
});

// Add "Add to Cart" button to a card
function addAddToCartButton(card, product) {
  // Check if button already exists
  if (card.querySelector(".add-to-cart-btn")) {
    return;
  }

  const button = document.createElement("button");
  button.className = "add-to-cart-btn";
  button.textContent = "Add to Cart";
  button.setAttribute("data-product-id", product.id);
  button.setAttribute("data-product-type", product.type);

  button.addEventListener("click", function (e) {
    e.preventDefault();
    addToCart(product);
  });

  // Find the content area and append button
  const content =
    card.querySelector(".coffee-content") ||
    card.querySelector(".equipment-content");
  if (content) {
    // Create a wrapper for the button
    const buttonWrapper = document.createElement("div");
    buttonWrapper.className = "add-to-cart-wrapper";
    buttonWrapper.appendChild(button);
    content.appendChild(buttonWrapper);
  }
}
