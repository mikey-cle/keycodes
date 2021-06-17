const body = document.getElementsByTagName("body");
let outPut = document.getElementById("textHere");
let div = document.getElementsByTagName('div');
const p = document.getElementsByClassName('p');
let keyOut = document.addEventListener("keydown", (x) =>{
let newD = document.createElement('div');
document.querySelector('div').innerHTML = `<P> You pressed "${x.key}" which has the keycode "${x.keyCode}"`;

})