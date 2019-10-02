const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arrLetters = [];
    for (let i = 0; i < expr.length / 10; i++) {
        arrLetters[i] = expr.slice(i * 10, (i + 1) * 10);
    }

    return arrLetters.map(elem => {
        elem = elem.replace(/^0+/, '');
        let arrSym = [];
        for (let i = 0; i < elem.length / 2; i++) {
            if (elem.slice(i * 2, (i + 1) * 2) == '10') {
                arrSym[i] = '.';
            } else if (elem.slice(i * 2, (i + 1) * 2) == '11') {
                arrSym[i] = '-';
            } else if (elem.slice(i * 2, (i + 1) * 2) == '**') {
                arrSym[i] = ' ';
                break;
            }
        }
        arrSym = arrSym.join('');
        if (arrSym == ' ') {
            return elem = ' ';
        } else {
            for (const key in MORSE_TABLE) {
                if (key == arrSym) {
                    return elem = MORSE_TABLE[key];
                }
            }
        }
    }).join('');
}

module.exports = {
    decode
}