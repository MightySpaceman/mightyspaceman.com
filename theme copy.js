function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  
  return cookie[cookieName];
};

const theme = document.getElementById('sheet');

function dark_theme() {
    body.style.backgroundColor = '#333';
    body.style.color = 'white';
    list.style.color = 'black';

    for (let i = 0; i < standard.length; i++) {
      standard[i].style.borderColor = 'white';
    }
};

function light_theme() {
    body.style.backgroundColor = 'white';
    body.style.color = 'black';
    list.style.color = 'white';

    for (let i = 0; i < standard.length; i++) {
      standard[i].style.borderColor = 'black';
    }
};

if (document.cookie.indexOf('theme') == -1) {
    document.getElementById("theme").checked = true;
    alert("This website uses cookies to allow you to save your theme.");
    document.cookie = "theme=dark;";
    dark_theme();

} else if (getCookie('theme') == 'light') {
    theme.setAttribute('href', 'light.css');

} else {
    theme.setAttribute('href', 'light.css');
}

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {

    dark_theme();
    document.cookie = "theme=dark;";

  } else {

    light_theme();
    document.cookie = "theme=light;";

  }
});