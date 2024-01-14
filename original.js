// Task 1
fetch('https://swapi.dev/api/people/1/')
  .then((resp) => resp.json())
  .then((data) => {
    console.log('----- Task 1: GET request to swapi API. -----');
    console.log(`Name: ${data.name}`);
    console.log(`Name: ${data.gender}`);
  });

// Task 2
fetch('https://swapi.dev/api/people/1/')
  .then((resp) => resp.json())
  .then((data) => {
    const user = {
      name: data.name,
      age: data.age,
    };
    fetch('https://reqres.in/api/users', {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log('----- Task 2: POST request to reqres API. -----');
        console.log(data);
      })
      .catch(console.log);
  })
  .catch(console.log);
