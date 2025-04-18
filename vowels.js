let words = ["hello", "java", "script", "world"];
let vowels = ['a', 'e', 'i', 'o', 'u'];

words.forEach(word => {
    let foundVowels = [];
    for (let char of word.toLowerCase()) {
        if (vowels.includes(char) && !foundVowels.includes(char)) {
            foundVowels.push(char);
        }
    }
    console.log(`Vowels in "${word}" ${foundVowels.join(', ')}`);
});