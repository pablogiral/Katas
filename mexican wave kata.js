function wave(word) {
  let array = [];

  for (let i = 0; i < word.length; i++) {
    let letters = word.split("")
    if (letters[i] === " "){
      continue
    }
    letters[i] = letters[i].toUpperCase();
    array.push(letters.join().replace(/,/g,""))
    }
  
  return array
}

wave("word")