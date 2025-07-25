let mainImage = document.querySelector(".main-image")
let dotsContainer = document.querySelector(".dots")
let imageArr = ["image1.png", "image2.jpg", "image3.jpg"]
let dots = document.getElementsByClassName("dot")
let rightArrow = document.querySelector(".right-arrow")
let leftArrow = document.querySelector(".left-arrow")

for (let ind = 0; ind < imageArr.length; ind++) {

    let elem = document.createElement("div")
    elem.classList.add("dot")

    dotsContainer.appendChild(elem)
}



let arrDots = Array.from(dots)



let i = 0;
arrDots[i].classList.add("selected")

function intervalFun(not = false) {

    if (not == false) {

        if (i < imageArr.length - 1) {
            i += 1

        } else {
            i = 0;
        }
    }

    arrDots.map((e, ind) => {
        if (e.classList[1] == "selected") {
            e.classList.remove("selected")
        }
    })

    arrDots[i].classList.add("selected")
    mainImage.src = `assets/${imageArr[i]}`
}

let workInterval = setInterval(intervalFun, 3000)


rightArrow.addEventListener("click", () => {

    if (i < imageArr.length - 1) {
        i += 1

    } else {
        i = 0;
    }
    arrDots.map((e, ind) => {
        if (e.classList[1] == "selected") {
            e.classList.remove("selected")
        }
    })

    arrDots[i].classList.add("selected")
    mainImage.src = `assets/${imageArr[i]}`



})

leftArrow.addEventListener("click", () => {
    if (i > 0) {
        i -= 1
    } else {
        i = 2
    }
    arrDots.map((e, ind) => {
        if (e.classList[1] == "selected") {
            e.classList.remove("selected")
        }
    })

    arrDots[i].classList.add("selected")
    mainImage.src = `assets/${imageArr[i]}`

})

