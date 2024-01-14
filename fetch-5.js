fetch('https://reqres.in/api/users/1000')
  .then((resp) => {
    if (resp.ok) {
      return resp.json();
    } else {
      // console.log('User 1000 does not exist.');
      throw new Error('User 1000 does not exist.');
    }

    // resp
    //   .clone()
    //   .json()
    //   .then((user) => {
    //     console.log(user.data);
    //   });
  })
  .then(console.log)
  .catch((error) => {
    console.log('Request Error.');
    console.log(error);
  });
