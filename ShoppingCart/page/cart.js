/* IF User is not Logged in redirect To login */
if (!localStorage.getItem("user")) {
    window.location.href = "/auth/login.html";
  }

 /* Elements */ 
 const CartItems = document.querySelector("#cartItems");
 const TotalPriceElement = document.querySelector("#totalprice");

 /* Render CartItems */


 function renderCartItems () {
    const selectedproduct = JSON.parse(localStorage.getItem('cart')) || [] ; 
    CartItems.innerHTML = "";

    let totalPrice = 0

    selectedproduct.map((item) => {
        const productCardElement = document.createElement('div');
        productCardElement.className = "w-[250px] rounded-md shadow-xl bg-secondary pb-5";
        productCardElement.innerHTML = `
       <img
            class="h-[300px] mx-auto"
            src=${item.url}
            alt=${item.name}
          />
          <div class="px-2 flex flex-col gap-5">
            <p class="text-text text-2xl">${item.name}</p>
            <p class="font-semibold text-lg text-text">
              <span class="font-thin text-sm mr-1">EGP</span>
                ${item.price}
            </p>
            <button class="text-white text-2xl bg-red-600 hover:bg-red-800"" onclick="DeleteBtn(${item.id})">Delete</button>
          </div>
   `;
       
   CartItems.append(productCardElement);
   totalPrice += item.price;
    } )
    TotalPriceElement.textContent = `${totalPrice}$`;
 }

function DeleteBtn (itemId) {
    let selectedProducts = JSON.parse(localStorage.getItem('cart')) || [];
    selectedProducts = selectedProducts.filter(item => item.id !== itemId);
    localStorage.setItem('cart', JSON.stringify(selectedProducts));
    renderCartItems();

}

 renderCartItems();
