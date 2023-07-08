



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

let selectBtn = document.querySelector(".selected_button");
let selectBox = document.querySelector(".select_catagory");
selectBtn.addEventListener("click", showSelected);


function showSelected() {
    selectBox.classList.toggle("selectShow")
}


let languageBtn = document.querySelector(".language_btn")
let languageCatagory = document.querySelector(".language_catagory")
languageBtn.addEventListener("click", languageShow);


function languageShow() {
    languageCatagory.style.display = "block"
}


