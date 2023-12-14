var cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);

var cartContainer = document.getElementById("cart-container");
var cartTotalElement = document.getElementById("cart-total");
var checkButton = document.getElementById("checkoutBtn");

if (cart && cart.length > 0) {
    for (var i = 0; i < cart.length; i++) {
        var cartItem = cart[i];

        var cartItemDiv = document.createElement("div");
        cartItemDiv.classList.add("cart-item");
        var cartItemLi = document.createElement("li");

        var itemName = document.createElement("h3");
        itemName.textContent = cartItem.name;

        var itemPrice = document.createElement("span");
        itemPrice.textContent = "Price: EGP " + cartItem.price;

        var itemImg = document.createElement("img")
        itemImg.src = cartItem.image;

        cartItemLi.appendChild(itemName);
        cartItemLi.appendChild(itemPrice);
        cartItemLi.appendChild(itemImg);

        cartItemDiv.appendChild(cartItemLi);

        cartContainer.appendChild(cartItemDiv);

    }

    function calculateCartTotal(cart) {
        var total = 0;
        for (var i = 0; i < cart.length; i++) {
            var item = cart[i];
            total +=item.price;
        }
        return total;
    }
    
    // console.log("Total before:", cartTotal);
    var cartTotal = calculateCartTotal(cart);
    // console.log("Total after:", cartTotal);
    cartTotalElement.textContent = "Cart Total: $" + cartTotal;
} else {
    cartContainer.innerHTML = "<img src='./../img/cart empty.png'> <h2>Cart is Empty <i class='fa - solid fa - cart - shopping'></i></h2>";
    cartTotalElement.style.display = "none";
    checkButton.style.display = "none";
}