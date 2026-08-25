const calNight = (checkIn, checkOut) => {
  // milli 1000 = 1s => 1m => 1h => d
  const milliDay = checkOut.getTime() - checkIn.getTime();
  const diffDay = milliDay / (1000 * 60 * 60 * 24);
  return diffDay;
};

const calTotal = (checkIn, checkOut, price) => {
  // code body
  if (!checkIn || !checkOut) return;
  const totalNight = calNight(checkIn, checkOut);
  const total = totalNight * price;
  return {
    totalNight,
    total,
  };
};

export { calTotal }