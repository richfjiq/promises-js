const request = new XMLHttpRequest();

request.open('GET', 'https://reqres.in/api/users', true);
request.send(null);

request.onreadystatechange = function (state) {
  if (request.readyState === 4) {
    const resp = request.response;
    const respObj = JSON.parse(resp);
    console.log(respObj.page);
  }
};
