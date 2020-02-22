module.exports = function getSeason(date) {
  
  if(date === undefined) {
    return 'Unable to determine the time of year!';
  }

  try {
    date.toUTCString();
  } catch (e) {
    throw new Error();
  }
  const winter = "winter";
  const spring = "spring";
  const summer  = "summer";
  const fall = "fall";

  const seasons = {
    1: winter,
    2: winter,
    3: spring,
    4: spring,
    5: spring,
    6: summer,
    7: summer,
    8: summer,
    9: fall,
    10: fall,
    11: fall,
    12: winter
  }

  // const monthNames = ["January", "February", "March", "April", "May", "June",
    // "July", "August", "September", "October", "November", "December"
  // ];
  return seasons[date.getMonth()+1];
};
