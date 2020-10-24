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
  let i = 0;
  let finalStr = [];
  let morseKeys = Object.getOwnPropertyNames(MORSE_TABLE);
  let newMorseTable = {};
  morseKeys.forEach((item) => {
    let i = 0;
    let tempStr = [];
    
    for(i = 0; i < item.length; i++){
      tempStr.push(item[i] === '.' ? '10' : '11');
    }

    for(i = 5 - i; i > 0; i--){
      tempStr.unshift('00');
    }

    newMorseTable[tempStr.join('')] = MORSE_TABLE[item];
  });

  newMorseTable['**********'] = ' ';

  for(i = 0; i < expr.length; i += 10){
    finalStr.push(newMorseTable[expr.slice(i, i + 10)]);    
  }
  return finalStr.join('');
}

module.exports = {
    decode
}