$(".card").hover(function () {
    $(".card").hide("products_icon", 1000)


})


let newBtn = document.querySelector(".new");
let featuredBtn = document.querySelector(".featuredbutton");
let topsellersBtn = document.querySelector(".topsellers");
let myCards = document.querySelector(".all_products");
let myCardsAgain = document.querySelector(".all_products_again")
let featuredCard = document.querySelector(".featured")
let TopSellersCard = document.querySelector(".TopSellers")

featuredBtn.addEventListener("click", showFeature)
newBtn.addEventListener("click", showNew)
topsellersBtn.addEventListener("click", ShowTopSellers)

function showFeature() {
    featuredCard.classList.remove("featuredblock")
    featuredBtn.style.color = "#0989ff"
    removeTopsellers()
    removeNew()

}

function showNew() {
    myCards.classList.remove("mystyle")
    myCardsAgain.classList.remove("mystyle");
    featuredCard.classList.add("featuredblock")
    newBtn.style.color = "#0989ff"
    removeTopsellers()
    removeFeature()
}

function ShowTopSellers() {
    TopSellersCard.classList.remove("TopSellers")
    topsellersBtn.style.color = "#0989ff"
    removeNew()
    removeFeature()
}





function removeTopsellers() {
    TopSellersCard.classList.add("TopSellers")
    topsellersBtn.style.color = "black"
}
function removeNew() {
    myCards.classList.add("mystyle")
    myCardsAgain.classList.add("mystyle");
    newBtn.style.color = "black"
}
function removeFeature() {
    featuredCard.classList.add("featuredblock")
    featuredBtn.style.color = "black"
}



let homeItem = document.querySelector(".home");
let itemBox = document.querySelector(".zindex_item");

let shopDeatilBox = document.querySelector(".show_detail");
let shopDetailItem = document.querySelector(".shop");

let productItem = document.querySelector("#product");
let productBox = document.querySelector(".product_detail");

let blogItem = document.querySelector(".blog")
let blogBox = document.querySelector(".blog_detail")

let languageBtn = document.querySelector(".language_btn")
let languageCatagory = document.querySelector(".language_catagory")

let usdBox = document.querySelector(".usd_catagory");
let usdBtn = document.querySelector(".usd_btn");

let settingBox = document.querySelector(".setting_catagory");
let settingBtn = document.querySelector(".setting_btn")

function all(item, boxes) {
    item.addEventListener("mouseover", show)

    item.addEventListener("mouseout", none)


    function show() {
        boxes.style.display = "flex";
    }

    function none() {
        boxes.style.display = "none";
    }

}

all(homeItem, itemBox);
all(productItem, productBox);
all(shopDetailItem, shopDeatilBox);
all(blogItem, blogBox)
all(languageBtn, languageCatagory);
all(usdBtn, usdBox)
all(settingBtn, settingBox)



let selectBtn = document.querySelector(".selected_button");
let selectBox = document.querySelector(".select_catagory");
selectBtn.addEventListener("click", showSelected);


function showSelected() {
    selectBox.classList.toggle("selectShow")
}








let iconResponsive = document.querySelector(".responsiv_icon");
let menu = document.querySelector(".responsive_dropdow");

iconResponsive.addEventListener("click", responsiveMenu);

function responsiveMenu() {
    menu.classList.toggle("d-none");
}

let homeResponsive = document.querySelector(".responsive_home");
let dropdownHome = document.querySelector(".dropdown_home")
let productResponsive = document.querySelector(".responsive_product");
let dropdownProduct = document.querySelector(".dropdown_product");
let shopResponsive = document.querySelector(".responsive_shop");
let dropdownShop = document.querySelector(".dropdown_shop");
let blogResponsive = document.querySelector(".responsive_blog");
let dropdownBlog = document.querySelector(".dropdown_blog");

function showNone(item, itemBox) {
    item.addEventListener("click", itemShowNone);
    function itemShowNone() {
        itemBox.classList.toggle("d-none");

    }
}
showNone(homeResponsive, dropdownHome)
showNone(productResponsive, dropdownProduct)
showNone(shopResponsive, dropdownShop);
showNone(blogResponsive, dropdownBlog)




let product = [
    {
        id: 1,
        name: 'Sony Smart Watch',
        price: 190.00,
        img: "/Photo/image (2).webp"

    },
    {
        id: 2,
        name: "Apple Watch Sport Band",
        price: 426.55,
        img: "/Photo/image (1).webp"

    },
    {
        id: 3,
        name: 'Lenovo Sports Bluetooth',
        price: 66.50,
        img: "/Photo/image (10).webp"

    },
    {
        id: 4,
        name: 'Sony Lady Fitness Watch',
        price: 145.50,
        img: "/Photo/image (3).webp"

    },
    {
        id: 5,
        name: 'Lenovo Wireless Bluetooth',
        price: 66.50,
        img: "/Photo/image (4).webp"

    },
    {
        id: 6,
        name: 'Headphone with Mic',
        price: 110.00,
        img: "/Photo/image (8).webp"

    },
    {
        id: 7,
        name: 'iPhone 14 Pro',
        price: 1019.15,
        img: "/Photo/image (6).webp"

    },
    {
        id: 8,
        name: 'Gaming Headphone',
        price: 123.50,
        img: "/Photo/image (12).webp"

    },
    {
        id: 9,
        name: 'Antec Air Cooler',
        price: 80,
        img: "/Photo/image (11).webp"

    },
    {
        id: 10,
        name: 'Galaxy Android Tablet',
        price: 288.00,
        img: "/Photo/image (7).webp"

    },
    {
        id: 11,
        name: 'Apple iPad Air',
        price: 949.05,
        img: "/Photo/image (5).webp"

    },
    {
        id: 12,
        name: 'Grand Plumping Highlighter',
        price: 60.00,
        img: "/Photo/lip-liner-1.webp"

    },
    {
        id: 13,
        name: 'Mielle Rosemary Mint Scalp',
        price: 62.00,
        img: "/Photo/skin-1.webp"

    },
    {
        id: 14,
        name: 'Blue Rescue Face Mask',
        price: 72.00,
        img: "/Photo/beauty-1.webp"

    },
    {
        id: 15,
        name: 'Fortuna Creole Earring',
        price: 180.00,
        img: "/Photo/earring-1.webp"

    },
    {
        id: 16,
        name: 'Innisfree Face Wash',
        price: 68.00,
        img: "/Photo/cream-1.webp"

    },
    {
        id: 17,
        name: 'Nike Retro GTS-2',
        price: 250.00,
        img: "/Photo/shoes-1.webp"

    },
    {
        id: 18,
        name: 'Jefferson Star Wars™',
        price: 270.00,
        img: "/Photo/shoes-5.webp"

    },
    {
        id: 19,
        name: 'Headphones Wireless',
        price: 103.20,
        img: "/Photo/image (9).webp"
    },
];



let cartItems = JSON.parse(localStorage.getItem("cart")) || [];
let cartsBtn = document.querySelectorAll(".btn");


[...cartsBtn].forEach(btn => {
    btn.addEventListener('click', () => addtoCart(btn.id))

})

function addtoCart(productId) {
    let currentProduct = product.find((x) => x.id == productId)
    cartItems.push({...currentProduct,count:1})
    localStorage.setItem("cart", JSON.stringify(cartItems));
    cartNumbers();
}

let basketCount=document.querySelector(".basket_count_item")
function cartNumbers() {
    // let productNumbers = localStorage.getItem('cartNumbers')
    // productNumbers = parseInt(productNumbers);
    // if (productNumbers) {
    //     localStorage.setItem('cartNumbers', productNumbers + 1)
    //     basketCount.textContent = productNumbers + 1;
    // }
    // else {
    //     localStorage.setItem('cartNumbers', 1)
    //     basketCount.textContent = productNumbers;
    // }
    getBasketCount()
    console.log(cartNumbers);
}

function getBasketCount() {
    basketCount.innerHTML = cartItems.length;
}

getBasketCount()

function test() {
    Swal.fire({
        position: 'top-end',
        icon: 'success',
        title: 'Your work has been saved',
        showConfirmButton: false,
        timer: 1500
    })
}


function timeProductTwo(){
    let countDownDate = new Date("Novomber 5, 2023 15:37:25").getTime();


    let x = setInterval(function () {
    
        let now = new Date().getTime();
    
        let distance = countDownDate - now;
    
    
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
        document.getElementById("demo2").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo2").innerHTML = "EXPIRED";
        }
    }, 1000);
}
timeProductTwo();

function timeProductThree(){
    let countDownDate = new Date("Novomber 5, 2023 15:37:25").getTime();


    let x = setInterval(function () {
    
        let now = new Date().getTime();
    
        let distance = countDownDate - now;
    
    
        let days = Math.floor(distance / (1000 * 60 * 60 * 24));
        let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    
        document.getElementById("demo3").innerHTML = days + "d " + hours + "h "
            + minutes + "m " + seconds + "s ";
    
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo3").innerHTML = "EXPIRED";
        }
    }, 1000);
}
timeProductThree();