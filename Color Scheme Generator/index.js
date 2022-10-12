const colorDisplay = document.getElementById("colorDisplay")
const getColorBtn = document.getElementById('getColor')
let colorVal = document.getElementById("colorVal")
let colorMode = document.getElementById("mode")


let html = ''
getColorBtn.addEventListener("click", getColor)

//uses fetch to get data depending on value of input and select value
function getColor(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${(colorVal.value).slice(1)}&mode=${colorMode.value}`)
        .then(res => res.json())
        .then(data => {
            setColorImg(data)
        })
}

//loops through each data object and renders to screen
function setColorImg (colorData) {
    let html = ""
    for (let image of colorData.colors){
       html += 
        `
        <div id="display">
        <img src="${image.image.bare}">
        <p class="hex-val">${image.hex.value}</p>
        </div>
    
        `
        console.log(image.image.bare)
    }
   document.getElementById("colorDisplay").innerHTML = html
}

