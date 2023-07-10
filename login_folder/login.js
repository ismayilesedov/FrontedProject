
let input = document.querySelector("#password");
let eyeBtn = document.querySelector(".eye_icon_btn")
let eyeBtnLine = document.querySelector(".eye_icon_line");

eyeBtn.addEventListener("click", e => {
    e.preventDefault()
    toggle();
})

let state = false;
function toggle() {
    if (state) {
        document.querySelector("#password").setAttribute("type", "password")
        state = false;
        document.querySelector(".eye_icon").style.color="black"
    }
    else {
        document.querySelector("#password").setAttribute("type", "text")
        state = true;
        document.querySelector(".eye_icon").style.color="#5887ef"

    }
}