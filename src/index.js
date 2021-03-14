module.exports = function toReadable (number) {
  let result = number.toString();
  let string = '';
  function one(n) {
    switch(n) {
      case '0': return '';
      case '1': return ' one';
      case '2': return ' two';
      case '3': return ' three';
      case '4': return ' four';
      case '5': return ' five';
      case '6': return ' six';
      case '7': return ' seven';
      case '8': return ' eight';
      case '9': return ' nine';
    }
  }
  function ten(n) {
    switch(n) {
      case '0': return ' ten';
      case '1': return ' eleven';
      case '2': return ' twelve';
      case '3': return ' thirteen';
      case '4': return ' fourteen';
      case '5': return ' fifteen';
      case '6': return ' sixteen';
      case '7': return ' seventeen';
      case '8': return ' eighteen';
      case '9': return ' nineteen';
    }
  }
  function twenty(n) {
    switch(n) {
      case '0': return '';
      case '2': return ' twenty';
      case '3': return ' thirty';
      case '4': return ' forty';
      case '5': return ' fifty';
      case '6': return ' sixty';
      case '7': return ' seventy';
      case '8': return ' eighty';
      case '9': return ' ninety';
    }
  }
  if (number == 0) return 'zero';
  if (number < 10) string += one(result[0]);
  if (number >= 10 && number < 20) string += ten(result[1]);
  if (number >= 20 && number < 100 ) string += twenty(result[0]) + one(result[1]);
  if (number >= 100 && number <= 1000) {
    if (result[1] == 1) string += one(result[0]) + ' hundred' + ten(result[2]);
    else string += one(result[0]) + ' hundred' + twenty(result[1]) + one(result[2]);
  }
  result = '';
  for (let i = 1; i < string.length; i++) result += string[i];
  return result;
}
