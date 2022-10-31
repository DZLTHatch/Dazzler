// Model

const website_lg = document.querySelector('.website-logo');
const dazzlerCP = document.getElementById('cp');
const dazzlerDZL = document.getElementById('dzl');
const body = document.querySelector('body');
const curLogo = document.querySelector('.dzl-logo')

const dazzlerBlue = document.querySelector('.blue');
const dazzlerGreen = document.querySelector('.green');
const dazzlerBlack = document.querySelector('.black');
const dazzlerShop = document.querySelector('.shop');
const dazzlerCU = document.querySelector('.contact-us');
const dazzlerFAQ = document.querySelector('.faq');
const headerBtn = document.querySelectorAll('.header-btn');
const btns = document.querySelectorAll('button')

let curColor;
let curRGBColor;
let curText;
let curEl;
let curLogoLink;

function changeStyle(text, color, rgbColor) {
    cp.innerText = text;
    cp.style = `color: ${color};`;
    dazzlerDZL.style = `text-shadow: 4px 2px 2px rgba(${rgbColor}, 0.7);`
    body.style = `background: linear-gradient(to bottom right, ${color}, white); background-attachment: fixed`;
    headerBtn.forEach(function (btn) {
        btn.style = `background-color: ${color}; color: white;`
    });
};

function changeColorTo(element, dec, text, color, rgbColor, logoColor) {
    element.addEventListener(dec, function handleMouseOver() {
        changeStyle(text, color, rgbColor);
        curLogo.src = '../images/dzl' + logoColor + '.png';
    });

    
};

function changeColorBack(element, dec, text, color, rgbColor) {
    element.addEventListener(dec, function handleMouseOut() {
        if (curText != null) {
            changeStyle(curText, curColor, curRGBColor);
            curLogo.src = '../images/dzl' + curLogoLink + '.png';

        } else {
            changeStyle(text, color, rgbColor);
            curLogo.src = '../images/dzl' + 'cp' + '.png';

        }
    });
};

function addEventListenerFunc(color, rgbColor) {
    // changes color of span dzl and cp to [color] and [rgbColor] on hover or mouse out
    website_lg.addEventListener('mouseover', function handleMouseOver () {
            cp.style = `color: white; text-shadow: 4px 2px 2px rgba(${rgbColor}, 0.7)!important`
            dzl.style = `color: ${color}; text-shadow: 4px 2px 2px rgba(255,255,255,0.7)`
        })
    website_lg.addEventListener('mouseout', function handleMouseOut () {
            cp.style = `color: ${color}; text-shadow: 4px 2px 2px rgba(255,255,255, 0.7)`
            dzl.style = `color: white; text-shadow: 4px 2px 2px rgba(${rgbColor}, 0.7)`
        })
};

function varDefault(color, rgbColor, text, element, curLogo) {
    curColor = color;
    curRGBColor = rgbColor;
    curText = text;
    curEl = element;
    curLogoLink = curLogo
}

// When button clicked, changes color to (element, dec, ...);
/*
when (y) button mouseout, colors and texts stay the same;
stores colors and texts in vars to retrieve later;
when (x) another button mouseover, colors, ... change to [blank] 
when (x) mouseout, changes back to colors and texts (y)
*/

// function onHoverColor(element, color, rgbColor) {
//     // When the setDefault() is called;
//     // changes querySelector('#dzl').style onhover to those colors;
// }


// Controller

// function setDefaultController(text, color, rgbColor) {
//     changeStyle(text, color, rgbColor);
// };


function setDefault(element, dec, text, color, rgbColor, logoColor) {
    // changes color to button clicked;
    changeStyle(text, color, rgbColor);
    // stores data;
    varDefault(color, rgbColor, text, element, logoColor);
    // deactivate mouseout, changes settings to default;
    changeColorBack(element, dec, text, color, rgbColor);
    addEventListenerFunc(color, rgbColor);
    curLogo.src = '../images/dzl' + logoColor + '.png';
};

function changeSrc(curLogo, color, rgbColor, text, logoColor) {
    // define the current logo

    // define the current logo id;

    changeColorTo(curLogo, 'click', text, color, rgbColor, logoColor);
    varDefault(color, rgbColor, text, curLogo, logoColor);
    addEventListenerFunc(color, rgbColor);
}


// View

changeColorTo(dazzlerBlue, 'mouseover', 'Blue', 'rgb(18,97,230)', '18, 97, 230', 'blue');
changeColorBack(dazzlerBlue, 'mouseout', 'Corporation', 'rgb(36, 37, 77)',' 36, 37, 77');

changeColorTo(dazzlerGreen, 'mouseover', 'Green', 'rgb(81, 172, 8)', '81, 172, 8', 'green');
changeColorBack(dazzlerGreen, 'mouseout', 'Corporation', 'rgb(36, 37, 77)',' 36, 37, 77');

changeColorTo(dazzlerBlack, 'mouseover', 'Black', 'rgb(0, 0, 0)', '0, 0, 0', 'black');
changeColorBack(dazzlerBlack, 'mouseout', 'Corporation', 'rgb(36, 37, 77)',' 36, 37, 77');

changeColorTo(dazzlerShop, 'mouseover', 'Shop', 'rgb(36, 37, 77)',' 36, 37, 77', 'cp');
changeColorBack(dazzlerShop, 'mouseout', 'Corporation', 'rgb(36, 37, 77)',' 36, 37, 77');


changeColorTo(dazzlerCU, 'mouseover', 'Contact', 'rgb(36, 37, 77)',' 36, 37, 77', 'cp');
changeColorBack(dazzlerCU, 'mouseout', 'Corporation', 'rgb(36, 37, 77)',' 36, 37, 77');

changeColorTo(dazzlerFAQ, 'mouseover', 'FAQ', 'rgb(36, 37, 77)',' 36, 37, 77', 'cp');
changeColorBack(dazzlerFAQ, 'mouseout', 'Corporation', 'rgb(36, 37, 77)',' 36, 37, 77');



// dazzlerGreen.addEventListener('mouseout', function handleMouseOut() {
//     cp.innerText = 'Corporation';
//     cp.style = 'black;'
//     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.7)';
//     body.style = 'background: linear-gradient(to bottom right, black, white); background-attachment: fixed'
//     headerBtn.forEach(function (btn) {
//         btn.style = 'background-color: black; color: white;'
//     })
// })
// // dazzlerBlack.addEventListener('mouseover', function handleMouseOver() {
// //     cp.innerText = 'Blue';
// //     cp.style = "color: #044AC0;";
// //     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(18,97,230, 0.7);'
// //     body.style = 'background: linear-gradient(to bottom right, #044AC0, white); background-attachment: fixed';
// //     headerBtn.forEach(function (btn) {
// //         btn.style = 'background-color: #044AC0; color: white;'
// //     })
// // })

// // dazzlerBlack.addEventListener('mouseout', function handleMouseOut() {
// //     cp.innerText = 'Corporation';
// //     cp.style = 'black;'
// //     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.7)';
// //     body.style = 'background: linear-gradient(to bottom right, black, white); background-attachment: fixed'
// //     headerBtn.forEach(function (btn) {
// //         btn.style = 'background-color: black; color: white;'
// //     })
// // })
// dazzlerShop.addEventListener('mouseover', function handleMouseOver() {
//     cp.innerText = 'Blue';
//     cp.style = "color: #044AC0;";
//     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(18,97,230, 0.7);'
//     body.style = 'background: linear-gradient(to bottom right, #044AC0, white); background-attachment: fixed';
//     headerBtn.forEach(function (btn) {
//         btn.style = 'background-color: #044AC0; color: white;'
//     })
// })

// dazzlerShop.addEventListener('mouseout', function handleMouseOut() {
//     cp.innerText = 'Corporation';
//     cp.style = 'black;'
//     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.7)';
//     body.style = 'background: linear-gradient(to bottom right, black, white); background-attachment: fixed'
//     headerBtn.forEach(function (btn) {
//         btn.style = 'background-color: black; color: white;'
//     })
// })
// dazzlerCU.addEventListener('mouseover', function handleMouseOver() {
//     cp.innerText = 'Blue';
//     cp.style = "color: #044AC0;";
//     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(18,97,230, 0.7);'
//     body.style = 'background: linear-gradient(to bottom right, #044AC0, white); background-attachment: fixed';
//     headerBtn.forEach(function (btn) {
//         btn.style = 'background-color: #044AC0; color: white;'
//     })
// })

// dazzlerCU.addEventListener('mouseout', function handleMouseOut() {
//     cp.innerText = 'Corporation';
//     cp.style = 'black;'
//     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.7)';
//     body.style = 'background: linear-gradient(to bottom right, black, white); background-attachment: fixed'
//     headerBtn.forEach(function (btn) {
//         btn.style = 'background-color: black; color: white;'
//     })
// })
// dazzlerFAQ.addEventListener('mouseover', function handleMouseOver() {
//     cp.innerText = 'Blue';
//     cp.style = "color: #044AC0;";
//     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(18,97,230, 0.7);'
//     body.style = 'background: linear-gradient(to bottom right, #044AC0, white); background-attachment: fixed';
//     headerBtn.forEach(function (btn) {
//         btn.style = 'background-color: #044AC0; color: white;'
//     })
// })

// dazzlerFAQ.addEventListener('mouseout', function handleMouseOut() {
//     cp.innerText = 'Corporation';
//     cp.style = 'black;'
//     dazzlerDZL.style = 'text-shadow: 4px 2px 2px rgba(0, 0, 0, 0.7)';
//     body.style = 'background: linear-gradient(to bottom right, black, white); background-attachment: fixed'
//     headerBtn.forEach(function (btn) {
//         btn.style = 'background-color: black; color: white;'
//     })
// })