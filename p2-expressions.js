/*
    CIT 281 Project 2
    Name: Alex Hart
*/

// Returns a random number between min (inclusive) and max (inclusive)
const getRandomInteger = function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const alphabet = "abcdefghijklmnopqrstuvwxyz".split("");

let result = "";

// function that will return a single, random, lowercase letter
const getRandomLetter = function() {
    return alphabet[getRandomInteger(0,alphabet.length)]
}

// function that returns a random length string with an inclusive max
const getRandomString = function(minLength, maxLength) {
    strLength = getRandomInteger(minLength, maxLength);
    for (let i = 0; i < strLength; i++) {
        result += getRandomLetter();
    }
    return result
}

// function that takes an input of a string and returns a new string in ascending order
const getSortedString = function(string) {
    return string.split('').sort().join('');
}

console.log(getSortedString(getRandomString(10,20)));