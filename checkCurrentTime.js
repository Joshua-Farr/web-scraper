const isItTimeYet = (number) => {
  var coeff = 1000 * 60 * 1;

  date = new Date();
  const currentTime = new Date(Math.round(date.getTime() / coeff) * coeff);

  if (currentTime === number) {
    return true;
  }
  return false;
};
