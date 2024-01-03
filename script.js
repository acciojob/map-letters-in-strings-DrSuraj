//your JS code here. If required.
function mapLetters(word) {
  // Create an object to store the indexes of each letter
  const letterMap = {};

  // Iterate through each character in the word
  for (let i = 0; i < word.length; i++) {
    const letter = word[i];

    // Check if the letter is already in the letterMap
    if (letterMap.hasOwnProperty(letter)) {
      // If it exists, push the current index to the existing array
      letterMap[letter].push(i);
    } else {
      // If it doesn't exist, create a new array with the current index
      letterMap[letter] = [i];
    }
  }

  return letterMap;
}

// Examples
console.log(mapLetters("dodo"));    // { d: [0, 2], o: [1, 3] }
console.log(mapLetters("froggy"));  // { f: [0], r: [1], o: [2], g: [3, 4], y: [5] }
console.log(mapLetters("grapes"));  // { g: [0], r: [1], a: [2], p: [3], e: [4], s: [5] }
