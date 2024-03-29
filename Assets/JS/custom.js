/*jshint esnext: true */

let mainPagination = document.querySelector("#mainPagination")
let navigationButtonsContainer = document.querySelector("#navigationButtons")
let itemsForPage = 4
let elementsArray = Array.from(document.querySelectorAll(".paginationEl"))
let countPages = Math.ceil(elementsArray.length/itemsForPage)

for (let i = 1; i < countPages+1; i++) {
    let button = document.createElement("button")
    button.style.padding = "16px"
    button.style.borderRadius = "12px"
    button.style.borderWidth = "1px"
    button.style.borderColor = "white"
    button.style.color = "white"
    button.classList.add("paginationButton")
    button.innerHTML = `${i}` 
    navigationButtonsContainer.appendChild(button)    
}

let navigationButtons = Array.from(document.querySelectorAll(".paginationButton"))
navigationButtons.forEach(el => {
    el.onclick = () => {
        let filterArray = elementsArray.slice((Number(el.innerHTML)-1)*itemsForPage, Number(el.innerHTML)*itemsForPage)
        mainPagination.innerHTML = ""
        filterArray.forEach(el => {    
            mainPagination.appendChild(el)
        })
    }
})

window.onload = () => {
    let filterArray = elementsArray.slice(0, itemsForPage)
    mainPagination.innerHTML = ""
    filterArray.forEach(el => {    
        mainPagination.appendChild(el)
    })
}


