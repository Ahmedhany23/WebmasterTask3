/* IF User is not Logged in redirect To login */
if (!localStorage.getItem("user")) {
  window.location.href = "/pages/auth/login.html";
}

/* Elements */
const ProductsCards = document.querySelector("#products");
const ProductAdded = document.querySelector("#productAdded");
const ProductRemoved = document.querySelector("#productRemoved")
/* Products Data */
const products = [
  {
    id: 1,
    name: "ASUS",
    description:
      "  ASUS TUF A15 FA507NU-LP125W Gaming Laptop AMD R5-7535HS 8GB RAM 512GB...",
    url: "https://res.cloudinary.com/dhbwzyd99/image/upload/v1720013302/laptop2_removebg_preview_81bb83e4f0.png",
    price: 40000,
  },
  {
    id: 2,
    name: "Hlwatch PRO",
    description:
      "  T800 Ultra Series 8 (2023) Smart Watch 1.99 Inch IPS display NFC Bluet...",
    url: "https://res.cloudinary.com/dhbwzyd99/image/upload/v1720012741/small_watch2_removebg_preview_d4a8dd294d.png",
    price: 20000,
  },
  {
    id: 3,
    name: "Samsung",
    description:
      " Galaxy A15 Dual SIM Blue/Black 6GB RAM 128GB 4G LTE - Middle East Version",
    url: "https://res.cloudinary.com/dhbwzyd99/image/upload/v1720007914/small_samsung2_removebg_preview_46d9eb9967.png",
    price: 6000,
  },
  {
    id: 4,
    name: "Iphone",
    description:
      " iPhone 15 Pro 256GB Natural Titanium 5G With FaceTime - Middle East Version",
    url: "https://res.cloudinary.com/dhbwzyd99/image/upload/v1720007445/iphone2_removebg_preview_39963f86be.png",
    price: 61666,
  },
  {
    id: 5,
    name: "SamsungTv",
    description:
      "  65-Inch 4K UHD Smart LED TV with Built in Reciever 65CU7000UXEG Black",
    url: "https://res.cloudinary.com/dhbwzyd99/image/upload/v1720005498/small_television_removebg_preview_4b8b1b9002.png",
    price: 20000,
  },
];

/* Products Render */
function renderProducts() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
    ProductsCards.innerHTML = "" ;
    products.forEach((item) => {
      const productInCart = cart.find(product => product.id === item.id);
        const productCardElement = document.createElement('div');
        productCardElement.className = 'card w-[250px] rounded-md shadow-xl bg-secondary pb-5';
        productCardElement.innerHTML = `
          <img
            class="h-[300px] mx-auto"
            src=${item.url}
            alt=${item.name}
          />
          <div class="px-2 flex flex-col gap-5">
            <p class="text-text text-2xl">${item.name}</p>
            <p class="font-medium text-text hover:text-laccent duration-200">
              ${item.description}
            </p>
            <div class="flex justify-between items-center">
             <p class="font-semibold text-lg text-text">
              <span class="font-thin text-sm mr-1">EGP</span>
              ${item.price}
            </p>
             ${productInCart ? `<button class="font-semibold text-lg text-text bg-red-500 px-3" onclick="DeleteBtn(${item.id})">Delete</button>` : ''}
            </div>
           
            ${productInCart ? `<p class="font-semibold text-lg text-text">Quantity: ${productInCart.quantity}</p>` : ''}
            
            <button class="py-2.5 px-5 bg-white text-lg font-semibold hover:text-text hover:bg-accent" onclick="addToCart(${item.id})">Add To Cart</button>
          </div>
        `;
        
        ProductsCards.append(productCardElement);
    });
}


/* Add product to cart */
function addToCart(productId) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    const productIndex = cart.findIndex(product => product.id === productId);

    if (productIndex !== -1) {
        cart[productIndex].quantity += 1;
    } else {
        const product = products.find(product => product.id === productId);
        if (product) {
          cart.push({ ...product, quantity: 1 });
        }
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    ProductAdded.classList.add("show");
    setTimeout(() => {
        ProductAdded.classList.remove("show");
    }, 1000);
    renderProducts(); 
}


/* DeleteBtn cart */
function DeleteBtn(productId) {
  let selectedProducts = JSON.parse(localStorage.getItem("cart")) || [];
  let productIndex = selectedProducts.findIndex(
    (product) => product.id === productId
  );
  if (productIndex !== -1) {
    if (selectedProducts[productIndex].quantity > 1) {
      selectedProducts[productIndex].quantity -= 1;
    } else {
      selectedProducts = selectedProducts.filter(
        (product) => product.id !== productId
      );
    }
  }
    localStorage.setItem("cart", JSON.stringify(selectedProducts));
    ProductRemoved.classList.add("show");
    setTimeout(() => {
        ProductRemoved.classList.remove("show");
    }, 1000);
    renderProducts(); 
}


renderProducts();
