//Code your solution here

const driverList = [];
function returnFirstTwoDrivers(names){
  for (let i = 0; i < names.length; i++){
    driverList.push(`${names[i]}`);
  }
  return driverList.slice(0,2);
}

function returnLastTwoDrivers(names){
    for (let i = 0; i < names.length; i++){
        driverList.push(`${names[i]}`);
      }
    return driverList.slice(-2);
}

function selectDifferentDrivers(names,returnLastTwoDrivers){
    return returnLastTwoDrivers();
}


function selectingDrivers(returnFirstTwoDrivers){
    return returnFirstTwoDrivers();

}

function fareDoubler(fare){
    return fare * 2;
}


function fareTripler(fare){
    return fare * 3;
}

function createFareMultiplier(value){
    return function(){return value * value};
}
