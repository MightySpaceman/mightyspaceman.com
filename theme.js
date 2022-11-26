function getCookie(cookieName) {
  let cookie = {};
  document.cookie.split(';').forEach(function(el) {
    let [key,value] = el.split('=');
    cookie[key.trim()] = value;
  })
  
  return cookie[cookieName];
};

const theme = document.getElementsByTagName('link')[0];
const checkbox = document.getElementById('theme');

if (document.cookie.indexOf('theme') == -1) {
    document.getElementById("theme").checked = true;
    alert("This website uses cookies to allow you to save your theme.");
    document.cookie = "theme=dark;";
    theme.setAttribute('href', 'dark.css');

} else if (getCookie('theme') == 'light') {
    theme.setAttribute('href', 'light.css');

} else {
    theme.setAttribute('href', 'dark.css');
}

checkbox.addEventListener('change', (event) => {
  if (event.currentTarget.checked) {

    theme.setAttribute('href', 'dark.css');
    document.cookie = "theme=dark;";

  } else {

    theme.setAttribute('href', 'light.css');
    document.cookie = "theme=light;";

  }
});