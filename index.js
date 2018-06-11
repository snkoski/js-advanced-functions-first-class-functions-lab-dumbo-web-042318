const returnFirstTwoDrivers = function (drivers) {
  return  drivers.slice(0,2);
};

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2);
};

selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function (rate) {
  return function (distance) {
    return rate * distance;
  };
} ;

const fareDoubler = createFareMultiplier(2);

const fareTripler = createFareMultiplier(3);

function selectDifferentDrivers(drivers, twoFunc) {
  return twoFunc(drivers);
};
