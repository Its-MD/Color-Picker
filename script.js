const red = document.querySelector(".red");
const green = document.querySelector(".green");
const blue = document.querySelector(".blue");
const inputs = document.querySelectorAll(".Range");
const prev = document.querySelector(".colorPrev");
const hexTxt = document.querySelector(".hexTxt");
hexTxt.style.color = "#fff";

//detecting input change and placing the value in rgb background color + adding hex text
inputs.forEach(function(element){
    element.addEventListener("input", function(event){
        let rv = red.value;
        let gv = green.value;
        let bv = blue.value;
        let color = `rgb(${rv}, ${gv}, ${bv})`;
        prev.style.background = color;

        hexTxt.innerHTML = convertRGB(rv,gv,bv);
        let yiq = ((rv*299)+(gv*587)+(bv*114))/1000;
	    let contrast = (yiq >= 128) ? 'black' : 'white';
        hexTxt.style.color = contrast;
    })
})

//converting rgb values to hex
function convertRGB(r,g,b){
    r = parseInt(r).toString(16);
    g = parseInt(g).toString(16);
    b = parseInt(b).toString(16);

    if (r.length == 1)
        r = "0" + r;
    if (g.length == 1)
        g = "0" + g;
    if (b.length == 1)
        b = "0" + b;

    return "#" + r + g + b;
}
//function to copying to clipboard by clicking on background + alert
prev.addEventListener("click", async function(){
    await navigator.clipboard.writeText(hexTxt.innerHTML);
    alert("HEX copied to clipboard");
})


// const myPromise = new Promise(function(resolve){
//     setTimeout(() => {
//       resolve(4);
//     }, 300);
//   });
// myPromise.then(function(response){
//     console.log(response+4);
// })