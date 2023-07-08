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

let usdBox=document.querySelector(".usd_catagory");
let usdBtn=document.querySelector(".usd_btn");

let settingBox=document.querySelector(".setting_catagory");
let settingBtn=document.querySelector(".setting_btn")

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
all(languageBtn,languageCatagory);
all(usdBtn,usdBox)
all(settingBtn,settingBox)



let selectBtn = document.querySelector(".selected_button");
let selectBox = document.querySelector(".select_catagory");
selectBtn.addEventListener("click", showSelected);


function showSelected() {
    selectBox.classList.toggle("selectShow")
}
