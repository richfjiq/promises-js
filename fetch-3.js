// POST request
// 'https://reqres.in/api/users'

let user = {
  name: 'Ricardo',
  age: 37,
};

fetch('https://reqres.in/api', {
  method: 'POST',
  body: JSON.stringify(user), // data
  headers: {
    'Content-Type': 'application/json',
  },
})
  .then((resp) => resp.json())
  .then(console.log)
  .catch((error) => {
    console.log('Request Error.');
    console.log(error);
  });
