// reversing words;

function reverseWords(str) {
    // to split the words =[ 'i', 'am', 'a', 'good', 'boy' ]
    const words = str.split(" ");
    // ------------------------
    // tohold the reversed words in this array
    const result = [];
    for (let i = words.length - 1; i >= 0; i--) {
        const element = words[i];
        result.push(element);
        // to push the elements in result array(result=[])
    }
    const reversed = result.join(" ");
    // to join the words together(opposite of split)
    return reversed;
}
const string = "i am a good boy"
const reversedWords = reverseWords(string);
console.log(reversedWords);
// final result= boy good a am i