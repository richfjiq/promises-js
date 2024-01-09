function returnTrue() {
  return true;
}

function sumSlow(num) {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      resolve(num + 1);
      // reject('sumSlow failed');
    }, 800);
  });
}

let sumFast = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve(num + 1), 300);
  });
};

let things = [sumSlow(5), sumFast(10), true, 'Hello world.', returnTrue()];

Promise.all(things)
  .then((responses) => console.log(responses))
  .catch((error) => console.log(error));

// sumSlow(10).then(console.log);
// sumFast(5).then(console.log);
