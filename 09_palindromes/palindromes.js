const palindromes = function (string) {
 
    const alphanumerical = 'abcdefghijklmnopqrstuvwxyz0123456789';

    const filteredString = string
        .toLowerCase()
        .split('')
        .filter(char => alphanumerical.includes(char))
        .join('')
    
    const reversedString = filteredString.split('').reverse().join('')

    return filteredString === reversedString
};



// Do not edit below this line
module.exports = palindromes;
