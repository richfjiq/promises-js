fetch('not-found.html')
  .then((resp) => resp.text())
  .then((html) => {
    let body = document.querySelec('body');
    body.innerHTML = html;
  })
  .catch((error) => {
    console.log('Request error.');
    console.log(error);
  });
