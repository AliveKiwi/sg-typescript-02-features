// 2) When we declare a variable on one line and initialize it in another line

let words = ['red', 'green', 'blue'];
// let foundWord: boolean = false;
// let foundWord = false; // Using TypeScript's type inference
let foundWord;
// !! Hover cursor over foundWord to see the inferred type
// !! TypeScript infers the type as 'any' because foundWord is not initialized
// !! We need to use an annotation to specify the expected type
// !! In this case, we can use 'boolean' as the expected type
for (let i = 0; i < words.length; i++) {
  if (words[i] === 'green') {
    foundWord = true;
  }
}
