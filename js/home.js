var xhr = new XMLHttpRequest;
xhr.open('GET', "/products.json");
xhr.send();
xhr.addEventListener('readystatechange', function () {
    if (this.readyState == 4 && this.status == 200) {
        // console.log(xhr.responseText);
        var data = JSON.parse(xhr.responseText);
        // console.log(data);
        // console.log(data.section1);
        var phones = data.section1;
        var electronics = data.section2;
        var sport = data.section3;
        var games = data.section4;
        var home = data.section5;
        console.log(phones);
        ////////////////////////////////////////////////////////////////
        function createProductElement(product) {
            // console.log(product);
            var productDiv = document.createElement("div")
            productDiv.classList.add("product")

            var productHead = document.createElement("div")
            productHead.classList.add("head")

            var productName = document.createElement("h3")
            productName.classList.add("hproduct")
            productName.textContent = product.name

            var productPrice = document.createElement("span")
            productPrice.classList.add("price")
            productPrice.textContent = "Price: "

            var productPriceValue = document.createElement("span")
            productPriceValue.classList.add("pricer")
            productPriceValue.textContent = `EGP ${product.price}`


            productPrice.appendChild(productPriceValue)
            productHead.appendChild(productName)
            productHead.appendChild(productPrice)

            var productImage = document.createElement("img")
            productImage.classList.add("imgproduct")
            productImage.width = 200
            productImage.height = 200
            productImage.src = product.image

            var productFoot = document.createElement("div")
            productFoot.classList.add("foot")

            var addToCartLink = document.createElement("a")
            addToCartLink.id = "addcart"
            addToCartLink.innerHTML = '<i class="fa-solid fa-cart-shopping"></i> Add To Cart'
            addToCartLink.addEventListener("click", function () {
                addToCart(product);
            });

            productFoot.appendChild(addToCartLink)

            productDiv.appendChild(productHead)
            productDiv.appendChild(productImage)
            productDiv.appendChild(productFoot)

            return productDiv
        }
        //////////////////////////////////////////////////////////

        function displayProducts(sectionId, productsData) {
            var productsContainer = document.getElementById(sectionId);
            for (var i = 0; i < productsData.length; i++) {
                var productDiv = createProductElement(productsData[i]);
                productsContainer.appendChild(productDiv);
            }
        }

        
        displayProducts("section1-products", phones);
        displayProducts("section2-products", electronics);
        displayProducts("section3-products", sport);
        displayProducts("section4-products", games);
        displayProducts("section5-products", home);
    }
});


function addToCart(product) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    console.log(cart);
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    console.log(cart);
    alert("Product added to the cart!");
}
