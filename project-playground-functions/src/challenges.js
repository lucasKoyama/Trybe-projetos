// Desafio 1 - Crie a função compareTrue
function compareTrue(boolean1, boolean2) {
  return boolean1 && boolean2;
}

// Desafio 2 - Crie a função splitSentence
function splitSentence(string) {
  return string.split(' ');
}

// Desafio 3 - Crie a função concatName
function concatName(array) {
  return `${array[array.length - 1]}, ${array[0]}`;
}

// Desafio 4 - Crie a função footballPoints
function footballPoints(wins, ties) {
  return (wins * 3) + (ties * 1);
}

// Desafio 5 - Crie a função highestCount
function highestCount(array) {
  const numSort = array.slice().sort();
  let biggestNum = 0;
  if (numSort[0] < 0) {
    [biggestNum] = [numSort[0]];
  } else {
    biggestNum = numSort[numSort.length - 1];
  }
  let countHighest = 0;
  for (let num of array) {
    if (num === biggestNum) {
      countHighest += 1;
    }
  }
  return countHighest;
}

// Desafio 6 - Crie as funções calcTriangleArea, calcRectangleArea e calcAllAreas
function calcTriangleArea(base, height) {
  return (base * height) / 2;
}

function calcRectangleArea(base, height) {
  return base * height;
}

function calcAllAreas(base, height, form) {
  let area = '';
  if (form === 'triângulo') {
    area = `O valor da área do triângulo é de: ${calcTriangleArea(base, height)}`;
  } else if (form === 'retângulo') {
    area = `O valor da área do retângulo é de: ${calcRectangleArea(base, height)}`;
  } else {
    area = 'Não foi possível fazer o cálculo, insira uma forma geométrica válida';
  }
  return area;
}

// Desafio 7 - Crie a função catAndMouse
function catAndMouse(mouse, cat1, cat2) {
  const deltaCat1 = mouse - cat1;
  const deltaCat2 = mouse - cat2;
  let nearest = '';
  if (deltaCat1 === deltaCat2 || cat1 === 0) {
    nearest = 'os gatos trombam e o rato foge';
  } else if (deltaCat1 > deltaCat2) {
    nearest = 'cat1';
  } else if (deltaCat1 < deltaCat2) {
    nearest = 'cat2';
  }
  return nearest;
}

// Desafio 8 - Crie a função fizzBuzz
function returnFizzBuzz(num) {
  if (num % 3 === 0 && num % 5 === 0) {
    word = 'fizzBuzz';
  } else if (num % 5 === 0) {
    word = 'buzz';
  } else if (num % 3 === 0) {
    word = 'fizz';
  }
  return word;
}

function fizzBuzz(array) {
  const fizzBuzzArr = [];
  for (let num of array) {
    if (num % 3 === 0 || num % 5 === 0) {
      fizzBuzzArr.push(returnFizzBuzz(num));
    } else {
      fizzBuzzArr.push('bug!');
    }
  }
  return fizzBuzzArr;
}

// Desafio 9 - Crie a função encode e a função decode

function encode(string) {
  const cripto = {
    a: '1',
    e: '2',
    i: '3',
    o: '4',
    u: '5',
  };
  let codedWord = '';
  for (let char of string) {
    if (cripto[char] >= 1) {
      codedWord += cripto[char];
    } else {
      codedWord += char;
    }
  }
  return codedWord;
}

function decode(string) {
  const cripto = {
    1: 'a',
    2: 'e',
    3: 'i',
    4: 'o',
    5: 'u',
  };
  let codedWord = '';
  for (let char of string) {
    if (Number(char) >= 1) {
      codedWord += cripto[char];
    } else {
      codedWord += char;
    }
  }
  return codedWord;
}

// Desafio 10 - Crie a função techList
function techList(array, string) {
  array.sort();
  let techArr = [];
  for (let tec of array) {
    const obj = {
      name: string,
      tech: tec,
    };
    techArr.push(obj);
  }
  return techArr;
}

// Não modifique essas linhas
module.exports = {
  calcTriangleArea: typeof calcTriangleArea === 'function' ? calcTriangleArea : (() => {}),
  calcRectangleArea: typeof calcRectangleArea === 'function' ? calcRectangleArea : (() => {}),
  calcAllAreas: typeof calcAllAreas === 'function' ? calcAllAreas : (() => {}),
  catAndMouse: typeof catAndMouse === 'function' ? catAndMouse : (() => {}),
  compareTrue: typeof compareTrue === 'function' ? compareTrue : (() => {}),
  concatName: typeof concatName === 'function' ? concatName : (() => {}),
  decode: typeof decode === 'function' ? decode : (() => {}),
  encode: typeof encode === 'function' ? encode : (() => {}),
  fizzBuzz: typeof fizzBuzz === 'function' ? fizzBuzz : (() => {}),
  footballPoints: typeof footballPoints === 'function' ? footballPoints : (() => {}),
  highestCount: typeof highestCount === 'function' ? highestCount : (() => {}),
  splitSentence: typeof splitSentence === 'function' ? splitSentence : (() => {}),
  techList: typeof techList === 'function' ? techList : (() => {}),
};
