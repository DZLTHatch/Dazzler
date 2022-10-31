const screenW = window.innerWidth;
const oc_header = document.getElementById('oc-header');
const hidden_sidebar = document.getElementById('hidden-sidebar');
const background_filter = document.createElement('div');

// Define styles

background_filter.style = 'background-color: rgba(0,0,0,0.7); position: fixed; top: 0; left: 0; right: 0; bottom: 0; z-index: 10000';

background_filter.setAttribute('id', 'oc-background-filter');

background_filter.onclick = removeBg

let onOffHamBtn = 0;
let pfpVal = 0;

function widthExpand() {
    if (screenW <= 1314) {
        if (onOffHamBtn === 0) {
            oc_header.style = "animation: slideinHeader 0.3s forwards"
            hidden_sidebar.style = 'animation: slideinHeader 0.3s forwards';
            onOffHamBtn = 1;
            document.body.append(background_filter);
            disableScrolling();


        } else if (onOffHamBtn === 1) {
            hidden_sidebar.style = 'animation: slideout 0.3s forwards';
            oc_header.style = 'animation: slideout 0.3s forwards';
            onOffHamBtn = 0;
            document.getElementById('oc-background-filter').remove();
            enableScrolling();
        }
    } else if (screenW >= 1315) {
        return
    }
}

function disableScrolling(){
    var x=window.scrollX;
    var y=window.scrollY;
    window.onscroll=function(){window.scrollTo(x, y);};
}

function enableScrolling(){
    window.onscroll=function(){};
}

function removeBg() {
    document.getElementById('oc-background-filter').remove();
    enableScrolling();
    hidden_sidebar.style = 'animation: slideout 0.3s forwards';
    oc_header.style = 'animation: slideout 0.3s forwards';
    onOffHamBtn = 0;

}

function showPFP() {
    const mainPfp = document.getElementById('oc-pfp');

    if (pfpVal === 0) {
        mainPfp.style = 'display: initial;';
        disableScrolling();
        pfpVal = 1;
    } 

    else {
        mainPfp.style = 'display: none;';
        pfpVal = 0;
        enableScrolling();
    }
}