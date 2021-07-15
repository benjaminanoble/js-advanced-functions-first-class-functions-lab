const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];

const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
  };

const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2, 4);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

const createFareMultiplier = function(fareMultiplier) {
    return function (value) {
        return fareMultiplier * value;
    };
};

const fareDoubler = createFareMultiplier (2) 

const fareTripler = createFareMultiplier (3) 

// const selectdifferentDrivers = function (drivers, returnFirstTwoDrivers) {
//     return returnFirstTwoDrivers(drivers);
// }

const selectDifferentDrivers = function (drivers, driversToReturn) {
    return driversToReturn(drivers);
  };