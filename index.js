import { ProfanityEngine } from '@coffeeandfun/google-profanity-words';

// Pass the 'language' parameter to specify the language (optional).
// Defaults to 'en' if no valid language code is provided.
const profanity = new ProfanityEngine({ language: 'en' });

const allWords = await profanity.all();

// console.log(allWords);


const sentence = 'Hey';
const hasCurseWords = await profanity.hasCurseWords(sentence);
// Returns true if the sentence contains profanity words, otherwise false.


console.log(hasCurseWords);