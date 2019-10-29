function scramble(str1, str2) {
  let arr1 = str1.split("").sort();
  let arr2 = str2.split("").sort();
  let matches = 0
  let minLength = Math.min(arr1.length, arr2.length)
  let length = Math.max(arr1.length, arr2.length)
  for (i = 0; i < length; i++) {
    if (arr1[i] === arr2[matches]) {
      matches++;
    }
  }
  console.log(arr1, arr2, length)
  return matches === minLength ? true : false 
  
}

scramble('cedewaraaossoqqyt', 'codewars')