



let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let basketCount=document.querySelector(".basket_count p");
function cartNumbers() {
    let productNumbers = localStorage.getItem('cartNumbers')
    productNumbers = parseInt(productNumbers);
    if (productNumbers) {
        localStorage.setItem('cartNumbers', productNumbers + 1)
        basketCount.textContent = productNumbers + 1;
    }
    else {
        localStorage.setItem('cartNumbers', 1)
        basketCount.textContent = productNumbers;
    }
    console.log(cartNumbers);
}



let basket_newpages = document.querySelector(".basket_product_description");
function handleRenderCartItem() {
    basket_newpages.innerHTML = " "
    cartItems.map((item) => {
        basket_newpages.innerHTML += `
    
        <div class="container basket_style">
        <p>Id:${item.currentProduct.id}</p>
        <img class="basket_photo" src="${item.currentProduct.img}" alt="">
        <div class="basket_description">
            <h5>${item.currentProduct.name}</h5>
            <p>${item.currentProduct.price}$</p>

        </div>
         <div class="basket_item_count">
            <button onclick="handleChangeCount("plus",${item.id})" class="count-changer" >-</button>
          <input type="text"value=1>
            <button onclick="handleChangeCount("minus",${item.id})" class="count-changer">+</button>
        </div>

    </div>
        `
    })

}

handleRenderCartItem()


function getBasketCount() {
    basketCount.innerHTML = cartItems.length;
}

getBasketCount()


function handleChangeCount(action, id) {
    
    cartItems = cartItems.map((item => {
        let oldCount = item.count;
        if (item.id === id) {
            if (action === 'minus') {
                if (item.count > 1) {
                    oldCount--;
                }

            } else {
                console.log(oldCount);
                oldCount++;
                cartNumbers(products[i])
                console.log(oldCount);
            }
        }

        return {
            ...item,
            count: oldCount,
        }

    }))

    upload()

}
