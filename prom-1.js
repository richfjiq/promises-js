function sumOne(num, callback) {
  if (num >= 7) {
    callback('Number too high.');
    return;
  }
  setTimeout(() => {
    callback(null, num + 1);
  }, 800);
}

sumOne(5, function (error, newValue) {
  if (error) {
    console.log(error);
    return;
  }
  sumOne(newValue, function (error, newValue2) {
    if (error) {
      console.log(error);
      return;
    }
    sumOne(newValue2, function (error, newValue3) {
      if (error) {
        console.log(error);
        return;
      }
      console.log(newValue3);
    });
  });
});
