const btn = document.getElementById('go_cal');
const loh = document.getElementById('low_height');
const uph = document.getElementById('up_height');
const low = document.getElementById('low_weight');
const upw = document.getElementById('up_weight');
const reset = document.getElementById('reset');
const lage = document.getElementById('low_age');
const uage = document.getElementById('up_age');
const f = document.getElementsByName('radio');
console.log(f)

btn.addEventListener('click', go_cal);
lage.addEventListener('click', low_age);
uage.addEventListener('click', up_age);
loh.addEventListener('click', low_height);
uph.addEventListener('click', up_height);
low.addEventListener('click', low_weight);
upw.addEventListener('click', up_weight);
reset.addEventListener('click', go_reset);
function go_reset(){
    document.querySelector('.comment').innerHTML="CLICK ME";
    document.querySelector('#result').innerHTML = "00.00";
    document.querySelector('#result_text').innerHTML=`BMI RESULT`
}
function fit() {
    var iframes = document.querySelectorAll("iframe.gh-fit")

    for(var id = 0; id < iframes.length; id++) {
        var win = iframes[id].contentWindow
        var doc = win.document
        var html = doc.documentElement
        var body = doc.body
        var ifrm = iframes[id] // or win.frameElement

        if(body) {
            body.style.overflowX = "scroll" // scrollbar-jitter fix
            body.style.overflowY = "hidden"
        }
        if(html) {
            html.style.overflowX = "scroll" // scrollbar-jitter fix
            html.style.overflowY = "hidden"
            var style = win.getComputedStyle(html)
            ifrm.width = parseInt(style.getPropertyValue("width")) // round value
            ifrm.height = parseInt(style.getPropertyValue("height"))
        }
    }

    requestAnimationFrame(fit)
}

addEventListener("load", requestAnimationFrame.bind(this, fit))

function low_age(){
    let loh = document.getElementById('body_age').value;
    loh = parseInt(loh)-1;
    document.getElementById("body_age").value = loh;
    go_cal();
}
function up_age(){
    let loh = document.getElementById('body_age').value;
    loh = parseInt(loh)+1;
    document.getElementById("body_age").value = loh;
    go_cal();
}

function low_height(){
    let loh = document.getElementById('body_height').value;
    loh = parseInt(loh)-1;
    document.getElementById("body_height").value = loh;
    go_cal();
}
function up_height(){
    let uph = document.getElementById('body_height').value;
    console.log(uph)
    uph = parseInt(uph)+1;
    console.log(uph)
    document.getElementById("body_height").value = uph;
    go_cal();
}
function low_weight(){
    let low = document.getElementById('body_weight').value;
    low = parseInt(low)-1
    document.getElementById("body_weight").value = low;
    go_cal();
}
function up_weight(){
    let upw = document.getElementById('body_weight').value;
    upw = parseInt(upw)+1
    document.getElementById("body_weight").value = upw;
    go_cal();
}
function go_cal(){
    let height = document.querySelector('#body_height').value;
    let weight = document.querySelector('#body_weight').value;

    if(height==""||weight==""){
        alert('Please fill out the input fields!');
        return;
    }

    //BMI = weight in KG / (height in m * height in m)

    height = height/100
    let BMI = (weight/(height*height));
    BMI = BMI.toFixed(2);
    document.querySelector('#result').innerHTML = BMI;
    console.log(BMI);
    let status = '';
    if(BMI<18.5){
        status = "Underweight";
        document.querySelector('#result_text').innerHTML=`You are <span id="Overweight">${status}</span>`;
    }
    if(BMI>=18.5&&BMI<25){
        status = "Healthy";
        document.querySelector('#result_text').innerHTML=`You are <span id="Healthy">${status}</span>`;
    }
    if(BMI>=25&&BMI<30){
        status = "Overweight";
        document.querySelector('#result_text').innerHTML=`You are <span id="Overweight">${status}</span>`;
    }
    if(BMI>=30){
        status = "Obese";
        document.querySelector('#result_text').innerHTML=`You are <span id="Overweight">${status}</span>`;
    }
}