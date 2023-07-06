



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




