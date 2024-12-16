export const getRemainder = (a, b) => a % b;

console.log(getRemainder(13, 2));

export const getLongestString = (a, b) => {
    if (a.length === b.length) {
        return a;
    }
    else if (a.length > b.length) {
        return a;
    }
    else {
        return b;
    }
};

console.log(getLongestString('uhduehdhdkj', 'fhdfgg'));

export const concatStrings = (a, b, i) => {
    if (i < 0 || i > a.length) {
        return a + b;
    }


    return a.slice(0, i) + b + a.slice(i);
};

export const normalizeVowels = (text) => {
    const vowels = 'aeiouAEIOU';
    let normalizedText = '';

    for (let char of text) {
        if (vowels.includes(char)) {
            normalizedText += char.toLowerCase();
        } else {
            normalizedText += char;
        }
    }

    return normalizedText;
};
