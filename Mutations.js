// Return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.
function mutation(arr) {
  //turn arr to lower-case
  for (var i = 0; i < arr.length; i++) {
    arr[i] = arr[i].toLowerCase();
  }
  //iterate through each character in the 2nd element of the array and check if it's in the 1st element as well.
  for (var j = 0; j < arr[1].length; j++) {
    if (arr[0].indexOf(arr[1][j]) === -1) {
      return false;
    }
  }
  return true;
}
//examples
mutation(["hello", "hey"]); //returns false
mutation(["Chad", "Had"]); //returns true
mutation(["DAD", "MAD"]); //returns false