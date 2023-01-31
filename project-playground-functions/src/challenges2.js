// Desafio 11 - Crie a função generatePhoneNumber
function validator(numb) {
  let impossible = false;
  const setNumbers = new Set(numb);
  const arrSetNumbers = Array.from(setNumbers);
  const repeatedNums = new Array(arrSetNumbers.length).fill(0);
  for (let number of numb) {
    repeatedNums[arrSetNumbers.indexOf(number)] += 1;
    if (number < 0 || number > 9) {
      impossible = true;
    }
  }
  return impossible || repeatedNums.includes(3);
}

function generatePhoneNumber(n) {
  const cut = (str, i1, i2) => n.slice(i1, i2).join('');
  let phoneNumber = '';
  if (n.length !== 11) {
    phoneNumber = 'Array com tamanho incorreto.';
  } else if (validator(n)) {
    phoneNumber = 'não é possível gerar um número de telefone com esses valores';
  } else {
    phoneNumber = `(${cut(n, 0, 2)}) ${cut(n, 2, 7)}-${cut(n, 7, undefined)}`;
  }
  return phoneNumber;
}

// Desafio 12 -  Crie a função triangleCheck
const linA = (lnA, lnB, lnC) => lnA < lnB + lnC && lnA > Math.abs(lnA - lnB);
const linB = (lnA, lnB, lnC) => lnB < lnA + lnC && lnB > Math.abs(lnA - lnC);
const linC = (lnA, lnB, lnC) => lnC < lnA + lnB && lnC > Math.abs(lnA - lnB);

function triangleCheck(lineA, lineB, lineC) {
  let isTriangle = false;
  if (linA(lineA, lineB, lineC) && linB(lineA, lineB, lineC) && linC(lineA, lineB, lineC)) {
    isTriangle = true;
  } else {
    isTriangle = false;
  }
  return isTriangle;
}

// Desafio 13 - Crie a função hydrate
function hydrate(string) {
  const regexForNums = /\d+/g;
  const numbers = string.match(regexForNums).map(Number);
  let copos = 0;
  let sugestion = '';
  for (let number of numbers) {
    copos += number;
  }
  if (copos === 1) {
    sugestion = '1 copo de água';
  } else {
    sugestion = `${copos} copos de água`;
  }
  return sugestion;
}

/* eslint no-undef: 0 */

// Não modifique essas linhas
module.exports = {
  generatePhoneNumber: typeof generatePhoneNumber === 'function' ? generatePhoneNumber : (() => {}),
  triangleCheck: typeof triangleCheck === 'function' ? triangleCheck : (() => {}),
  hydrate: typeof hydrate === 'function' ? hydrate : (() => {}),
};
