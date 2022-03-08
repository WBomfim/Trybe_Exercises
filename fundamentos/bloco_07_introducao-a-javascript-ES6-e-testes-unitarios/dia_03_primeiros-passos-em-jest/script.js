const sum = (a, b) => {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

function myRemove(arr, item) {
  let newArr = [];
  for (let index = 0; index < arr.length; index += 1) {
    if (item !== arr[index]) {
      newArr.push(arr[index]);
    }
  }
  return newArr;
}

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

function latterConvert(character) {
  let keys = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  for (let key in keys) {
    if (character === key) {
      return keys[key];
    }
  }
}

function numberConvert(character) {
  let keys = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  for (let key in keys) {
    if (character === key) {
      return keys[key];
    }
  }
}

function encode(string) {
  let encodeString = '';
  for (let index of string) {
    if (latterConvert(index) !== undefined) {
      encodeString += latterConvert(index);
    } else {
      encodeString += index;
    }
  }
  return encodeString;
}

function decode(string) {
  let decodeString = '';
  for (let index of string) {
    if (numberConvert(index) !== undefined) {
      decodeString += numberConvert(index);
    } else {
      decodeString += index;
    }
  }
  return decodeString;
}

function techList(technology, people) {
  let objects = [];
  if (technology.length === 0) {
    return 'Vazio!';
  }
  for (let index of technology.sort()) {
    objects.push({ tech: index, name: people });
  }
  return objects;
}

const hydrate = (phrase) => {
  const extractsNumbers = phrase.replace(/\D/g, '');
  let glassesWater = 0;
  for (let index = 0; index < extractsNumbers.length; index += 1) {
    glassesWater += Number(extractsNumbers[index]);
  }

  let message = ''
  if (glassesWater === 1) {
    message = '1 copo de água';
  } else if (glassesWater > 1) {
    message = `${glassesWater} copos de água`;
  } else {
    message = 'Você ainda não bebeu';
  }
  return message
}

module.exports = {
  sum, 
  myRemove, 
  myFizzBuzz,
  encode,
  decode,
  techList,
  hydrate
};
