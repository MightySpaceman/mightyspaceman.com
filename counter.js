fetch('https://example.com/api/data')
  .then(response => response.text())
  .then(data => {
    const element = document.getElementById('counterfrm');
    element.innerHTML = data;
  })
  .catch(error => console.error(error));