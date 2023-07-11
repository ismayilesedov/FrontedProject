
let littleImg1 = document.querySelector(".image1_btn")
let littleImg2 = document.querySelector(".image2_btn")
let littleImg3 = document.querySelector(".image3_btn")
let littleImg4 = document.querySelector(".image4_btn")
let bigImg1 = document.querySelector(".big_image1")
let bigImg2 = document.querySelector(".big_image2")
let bigImg3 = document.querySelector(".big_image3")
let bigImg4 = document.querySelector(".big_image4")

let color1 = document.querySelector(".color1");
let color2 = document.querySelector(".color2");
let color3 = document.querySelector(".color3");
let color4 = document.querySelector(".color4");

littleImg1.addEventListener("click", littleImgChanger1)
littleImg2.addEventListener("click", littleImgChanger2);
littleImg3.addEventListener("click", littleImgChanger3);
littleImg4.addEventListener("click", littleImgChanger4);
function littleImgChanger1() {
    bigImg1.classList.remove("d-none")
    imgNone2()
    imgNone3()
    imgNone4()
}
function littleImgChanger2() {
    bigImg2.classList.remove("d-none")
    imgNone1()
    imgNone3()
    imgNone4()
}
function littleImgChanger3() {
    bigImg3.classList.remove("d-none")
    imgNone2()
    imgNone1()
    imgNone4()
}
function littleImgChanger4() {
    bigImg4.classList.remove("d-none")
    imgNone2()
    imgNone1()
    imgNone3()
}
function imgNone1() {
    bigImg1.classList.add("d-none");

}
function imgNone2() {
    bigImg2.classList.add("d-none");
}

function imgNone3() {
    bigImg3.classList.add("d-none");
}
function imgNone4() {
    bigImg4.classList.add("d-none");
}


color1.addEventListener("click", littleImgChanger1);

color2.addEventListener("click", littleImgChanger2);
color3.addEventListener("click", littleImgChanger3)
color4.addEventListener("click", littleImgChanger4)



let seeLess = document.querySelector(".see_less");
let seeMore = document.querySelector(".see_more_button");
let seeMoreItem = document.querySelector(".see_more_item");
seeMore.addEventListener("click", Changermore);
seeLess.addEventListener("click", ChangerLess)


function Changermore() {
    seeMoreItem.classList.remove("see_more_none")
    seeLess.classList.remove("less_none")
}
function ChangerLess() {
    seeMoreItem.classList.add("see_more_none")
    seeLess.classList.add("less_none")
}


let plusBtn = document.querySelector(".plus")
let minusBtn = document.querySelector(".minus");
let number = document.querySelector(".num");

let static = 1;

plusBtn.addEventListener("click", () => {
    static++;
    number.innerText = static
})

minusBtn.addEventListener("click", () => {
    if (static > 1) {
        static--;
        number.innerText = static
    }

})


let table = document.querySelector(".table");
let additionalBtn = document.querySelector(".additional_btn");
let descriptionBtn = document.querySelector(".description_btn");
let reviewBtn = document.querySelector(".reviews_btn");
let description = document.querySelector(".detail_catagory_description");
let review = document.querySelector(".reviews")

additionalBtn.addEventListener("click", tableShow);
reviewBtn.addEventListener("click", reviewShow)
descriptionBtn.addEventListener("click", descriptionShow)

function tableShow() {
    table.classList.remove("d-none")
    descriptionRemove()
    reviewRemove()
}
function descriptionShow() {
    description.classList.remove("d-none")
    tableRemove()
    reviewRemove()
}
function reviewShow() {
    review.classList.remove("d-none")
    tableRemove()
    descriptionRemove()
}


function tableRemove() {
    table.classList.add("d-none");
}
function descriptionRemove() {
    description.classList.add("d-none");
}
function reviewRemove() {
    review.classList.add("d-none");
}
