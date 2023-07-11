





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
    menu.classList.toggle("d-none")
}

let homeResponsive = document.querySelector(".responsive_home");
let dropdownHome = document.querySelector(".dropdown_home")
let productResponsive = document.querySelector(".responsive_product");
let dropdownProduct = document.querySelector(".dropdown_product");
let shopResponsive = document.querySelector(".responsive_shop");
let dropdownShop = document.querySelector(".dropdown_shop");
let blogResponsive = document.querySelector(".responsive_blog");
let dropdownBlog = document.querySelector(".dropdown_blog");

// homeResponsive.addEventListener("click", homeShowNone)
// function homeShowNone() {
//     dropdownHome.classList.toggle("d-none")
// }


function showNone(item, itemBox) {
    item.addEventListener("click", itemShowNone);
    function itemShowNone() {
        itemBox.classList.toggle("d-none");
        
    }
}
showNone(homeResponsive,dropdownHome)
showNone(productResponsive,dropdownProduct)
showNone(shopResponsive,dropdownShop);
showNone(blogResponsive,dropdownBlog)