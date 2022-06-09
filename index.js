// Code your solution here
//1. findMatching
//=====================

// function findMatching(array, string) {
//   const newList = array.filter(
//     (driver) => driver.toLowerCase() === string.toLowerCase()
//   );
//   return newList;
// }

const findMatching = (array, string) => {
  const newList = array.filter(
    (element) => element.toLowerCase() === string.toLowerCase()
  );
  return newList;
};

//2. fuzzyMatch
//==================
function fuzzyMatch(array, string) {
  const fuzzyList = array.filter(
    (item) => item.toLowerCase().slice(0, 2) === string.toLowerCase()
  );
  //   const fuzzyList = array.filter(
  //     (item) => item.toLowerCase().indexOf(string.toLowerCase(), 0) === 0
  //   );
  return fuzzyList;
}

//3. matchName
//==============
function matchName(array, string) {
  const result = array.filter((element) => element.name === string);
  return result;
}
