const calNight = (checkIn, checkOut) => {
  // milli 1000 = 1s => 1m => 1h => d
  const milliDay = checkOut.getTime() - checkIn.getTime();
  const diffDay = milliDay / (1000 * 60 * 60 * 24);
  return diffDay;
};

const calTotal = (checkIn, checkOut, price) => {
  // code body
  if (!checkIn || !checkOut) return;
  
  const checkInDate = new Date(checkIn);
  const checkOutDate = new Date(checkOut);

  const totalNights = calNight(checkInDate, checkOutDate);
  const total = totalNights * price;
  return {
    totalNights,
    total,
  };
};

export { calTotal };
