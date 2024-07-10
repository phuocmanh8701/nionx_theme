document.addEventListener("DOMContentLoaded", function () {
  var cartItems = [];
  var cartListItem = document.querySelector(".cart-items");
  //   var cart = document.getElementById("cart"); // Phần tử của giỏ hàng

  //BTN
  var addToCartBtn = document.querySelectorAll(".add-to-cart-btn");

  addToCartBtn.forEach(function (button) {
    button.addEventListener("click", function () {
      //lay thong tin san pham
      var product = button.getAttribute("data-product");
      var price = parseFloat(button.getAttribute("data-price"));
      addToCart(product, price);
    });
  });

  function addToCart(product, price) {
    var cartItem = cartItems.find((item) => item.product === product);

    if (cartItem) {
      cartItem.quantity++;
    } else {
      cartItems.push({ product: product, price: price, quantity: 1 });
    }
    updateCartDisplay();
    showCart();
  }
  function updateCartDisplay() {
    //clear doan ma trong cart-items
    cartListItem.innerHTML = "";

    cartItems.forEach(function (item, index) {
      //tao li chua thong tin
      var li = document.createElement("li");

      li.textContent = `${item.product} - $${item.price.toFixed(2)} x ${
        item.quantity
      }`;

      //tao nut xoa
      var removeBtn = document.createElement("button");

      removeBtn.textContent = "Remove";
      removeBtn.classList.add("remove-btn");
      // goi ham remove de xoa
      removeBtn.addEventListener("click", function () {
        removeCart(index);
      });
      li.appendChild(removeBtn);
      cartListItem.appendChild(li);
    });
    // cartTotalDisplay.textContent = `Total: $${cartTotal.toFixed(2)}`;
  }

  function removeCart(index) {
    //thong tin san pham can xoa
    cartItems.splice(index, 1);
    updateCartDisplay();
  }
  function showCart() {
    cart.style.display = "block";
  }
});
