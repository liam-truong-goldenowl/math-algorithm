function rob(houseMoneyNumbers) {
  if (houseMoneyNumbers.length === 0) return 0;
  if (houseMoneyNumbers.length === 1) return houseMoneyNumbers[0];

  let maxRobbedPrevHouse = 0; // Max money robbed up to the previous house
  let maxRobbedBeforePrev = 0; // Max money robbed up to the house before the previous one

  for (let currentHouseMoney of houseMoneyNumbers) {
    const temp = maxRobbedPrevHouse;
    maxRobbedPrevHouse = Math.max(
      maxRobbedPrevHouse,
      maxRobbedBeforePrev + currentHouseMoney
    ); // Choose between robbing this house or not
    maxRobbedBeforePrev = temp;
  }

  return maxRobbedPrevHouse;
}
