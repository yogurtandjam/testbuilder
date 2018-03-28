// Given a credit card number, this function should return a string with the
// name of a network, like 'MasterCard' or 'American Express'
// Example: detectNetwork('343456789012345') should return 'American Express'

// How can you tell one card network from another? Easy!
// There are two indicators:
//   1. The first few numbers (called the prefix)
//   2. The number of digits in the number (called the length)

var detectNetwork = function(cardNumber) {
  // Note: `cardNumber` will always be a string
  // The Diner's Club network always starts with a 38 or 39 and is 14 digits long
  // The American Express network always starts with a 34 or 37 and is 15 digits long
  // for (var prefix = 644; prefix <= 649; prefix++) {
  //   (function(prefix) {
  //     it('has a prefix of ' + prefix + ' and a length of 16');
  //     it('has a prefix of ' + prefix + ' and a length of 19');
  //   })(prefix)
  // }
  if(cardNumber.length === 14){
    if(cardNumber[0] == 3 && (cardNumber[1] == 8 || cardNumber[1] == 9)){
      return 'Diner\'s Club';
    }
  } else if (cardNumber.length === 15){
    if(cardNumber[0] == 3 && (cardNumber[1] == 4 || cardNumber[1] == 7)){
      return 'American Express';
    }
  } else if (cardNumber.length === 13 || cardNumber.length === 16 || cardNumber.length === 19){
    if(cardNumber[0] == 4 && cardNumber[1] != 9){
      return 'Visa';
    } else if (cardNumber[0] == 5 && cardNumber[1] <= 5 && cardNumber[1] >= 1){
      return 'MasterCard'
    } else if (cardNumber.substring(0,4) == '6011' || (Number(cardNumber.substring(0,3)) >= 644 && Number(cardNumber.substring(0,3)) <= 649) || cardNumber.substring(0,2) == '65'){
      return 'Discover';
    }
  }
  if (cardNumber.length >= 12 && cardNumber.length <= 19 && (cardNumber.substring(0,4) == '5018' || cardNumber.substring(0,4) == '5020' || cardNumber.substring(0,4) == '5038' || cardNumber.substring(0,4) == '6304')){
    return 'Maestro'
  }
  if (cardNumber.length >= 16 && cardNumber.length <=19){
    if((Number(cardNumber.substring(0,6)) >= 622126 && Number(cardNumber.substring(0,6)) <= 622925) || (Number(cardNumber.substring(0,3)) >= 624 && Number(cardNumber.substring(0,3)) <= 626) ||
    (Number(cardNumber.substring(0,4)) >= 6282 && Number(cardNumber.substring(0,4)) <= 6288)) {
      return 'China UnionPay'
    }
  }
  return 'Switch';
  // Once you've read this, go ahead and try to implement this function, then return to the console.
};
