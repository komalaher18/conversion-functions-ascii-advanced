/*
Implement these functions to convert values into the appropriate number base.
Consult documentation on how to utilize the following methods:
  parseInt()
  toString()
  String.fromCharCode()
  charCodeAt()
*/

/* Base 2 to base 16 */
function binaryToHexadecimal(blob) {
  const num1 = parseInt(blob.slice(2), 2);
  const num2 = num1.toString(16);
  return `0x${num2}`;
}

/* Base 16 to base 2 */
function hexadecimalToBinary(blob) {
  const num1 = parseInt(blob.slice(2), 16);
  const num2 = num1.toString(2);
  return `0b${num2}`
}

/* Base 10 to ASCII */
function decimalToAscii(blob) {
  return (String.fromCharCode(blob));
}

/* Base 2 to ASCII */
function binaryToAscii(blob) {
  const num1 = parseInt(blob.slice(2), 2);
  return (String.fromCharCode(num1))
}

/* Base 16 to ASCII */
function hexadecimalToAscii(blob) {
  const num1 = parseInt(blob.slice(2), 16);
  return(String.fromCharCode(num1));
}

/* ASCII to base 10 */
function asciiToDecimal(blob) {
  const arr = []

  for (let i =0; i < blob.length; i++){
    const el = blob[i]

    arr.push(el.CharCodeAt(0))

  }

  return arr
}

// console.log('Binary to hexadecimal:')
// console.log(binaryToHexadecimal('0b1010')) // '0xa'
// console.log(binaryToHexadecimal('0b0011')) // '0x3'
// console.log('')

// console.log('Hexadecimal to binary:')
// console.log(hexadecimalToBinary('0xa1'))  // '0b10100001'
// console.log(hexadecimalToBinary('0xff'))  // '0b11111111'
// console.log('')

// console.log('Decimal to ASCII:')
// console.log(decimalToAscii(65))  // 'A'
// console.log(decimalToAscii(97))  // 'a'
// console.log('')

// console.log('Binary to ASCII:')
// console.log(binaryToAscii('0b01000010'))  // 'B'
// console.log(binaryToAscii('0b01100010'))  // 'b'
// console.log('')

// console.log('Hexadecimal to ASCII:')
// console.log(hexadecimalToAscii('0x43'))  // 'C'
// console.log(hexadecimalToAscii('0x63'))  // 'c'
// console.log('')

// console.log('ASCII to decimal:')
// console.log(asciiToDecimal('HELLO'))   // [ 72, 69, 76, 76, 79 ]
// console.log(asciiToDecimal('world!'))  // [ 119, 111, 114, 108, 100, 33 ]

module.exports = {
  binaryToHexadecimal,
  hexadecimalToBinary,
  decimalToAscii,
  binaryToAscii,
  hexadecimalToAscii,
  asciiToDecimal
}
