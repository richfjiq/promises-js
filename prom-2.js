function sumOne(num) {
  var promise = new Promise(function (resolve, reject) {
    console.log(num);
    if (num >= 7) {
      reject('Number is too high.');
    }
    setTimeout(() => {
      resolve(num + 1);
    }, 800);
  });

  return promise;
}

sumOne(5)
  .then(sumOne)
  .then(sumOne)
  .then(sumOne)
  .then(sumOne)
  .then(sumOne)
  .then((newNumber) => {
    console.log(newNumber);
  })
  .catch((error) => {
    console.log('PROMISE ERROR');
    console.log(error);
  });
// .then((newValue) => {
//   console.log(newValue);
// })
