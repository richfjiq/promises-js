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
    setTimeout(() => {
      // resolve(num + 1);
      reject('sumFast error.');
    }, 300);
  });
};

// prints 11
Promise.race([sumSlow(5), sumFast(10)])
  .then((response) => console.log(response))
  .catch(console.log);
