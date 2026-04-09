// SLIDER
const images = [
  "https://images-eu.ssl-images-amazon.com/images/G/31/img21/Beauty/GW/Makeup-PC._CB123456789_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img22/Electronics/GW._CB123456789_.jpg",
  "https://images-eu.ssl-images-amazon.com/images/G/31/img23/Fashion/GW._CB123456789_.jpg"
];

let i = 0;
function slider() {
  document.getElementById("slider").src = images[i];
  i = (i + 1) % images.length;
}
setInterval(slider, 3000);
slider();

// PRODUCTS
const products = [
  {
    id: 1,
    name: "Apple iPhone 14 (128 GB)",
    price: 79999,
    rating: "⭐⭐⭐⭐☆",
    badge: "Deal",
    img: "https://m.media-amazon.com/images/I/61cwywLZR-L._SX679_.jpg"
  },
  {
    id: 2,
    name: "HP Laptop 15s",
    price: 55999,
    rating: "⭐⭐⭐⭐☆",
    badge: "Best Seller",
    img: "https://m.media-amazon.com/images/I/71jG+e7roXL._SX679_.jpg"
  },
  {
    id: 3,
    name: "boAt Headphones",
    price: 2999,
    rating: "⭐⭐⭐⭐⭐",
    badge: "Hot Deal",
    img: "https://m.media-amazon.com/images/I/61KNJav3S9L._SX679_.jpg"
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 1999,
    rating: "⭐⭐⭐⭐☆",
    badge: "Limited",
    img: "https://m.media-amazon.com/images/I/71li-ujtlUL._UX695_.jpg"
  }
];

let cart = [];

function renderProducts(list) {
  const container = document.getElementById("products");
  container.innerHTML = "";

  list.forEach(p => {
    container.innerHTML += `
      <div class="card">
        <div class="badge">${p.badge}</div>
        <img src="${p.img}">
        <div class="title">${p.name}</div>
        <div class="rating">${p.rating}</div>
        <div class="price">₹${p.price}</div>
        <button onclick="addToCart(${p.id})">Add to Cart</button>
      </div>
    `;
  });
}

function addToCart(id) {
  cart.push(id);
  document.getElementById("cartCount").innerText = cart.length;
}

// SEARCH
function searchProduct() {
  let value = document.getElementById("searchBox").value.toLowerCase();
  let filtered = products.filter(p =>
    p.name.toLowerCase().includes(value)
  );
  renderProducts(filtered);
}

// LOAD
renderProducts(products);