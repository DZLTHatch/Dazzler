const tablinks = document.getElementsByClassName('tab-links');
const tabcontents = document.getElementsByClassName('tab-contents');

function opentab(tabName) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link")
    };
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab")
    };
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabName).classList.add("active-tab");
}

const sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = '0';
}

function closemenu() {
    sidemenu.style.right = '-200px';
}

const scriptURL = 'https://script.google.com/macros/s/AKfycbyCUAEfkV749mjv627MsGpB_EwR7F2uOMOZdYFiTm3X41UXX-uqjeDVCd93XdGirxqu/exec';
  const form = document.forms['submit-to-google-sheet'];
  const msg = document.getElementById('msg');

  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {msg.innerHTML = 'Message sent successfully!';
      setTimeout(() => {msg.innerHTML = ''}, 5000);
      form.reset();
      })
      .catch(error => console.error('Error!', error.message))
  })
