import fs from 'fs';

const input = fs.readFileSync('./input/day1.txt', 'utf8');

const part1 = (input) => {
  return input
    .split('\n')
    .filter(line => line!=='' )
    .map(line => line
      .split('')
      .filter( c => !isNaN(parseInt(c)) )
    )
    .map(line => parseInt(`${line[0]}${line[line.length - 1]}`))
    .reduce((acc, cur) => acc+cur, 0)
}

const part2 = (input) => {
  return input
    .split('\n')
    .filter(line => line!=='' )
    .map(line => line
      .replaceAll('one', 'one1one')
      .replaceAll('two', 'two2two')
      .replaceAll('three', 'three3three')
      .replaceAll('four', 'four4four')
      .replaceAll('five', 'five5five')
      .replaceAll('six', 'six6six')
      .replaceAll('seven', 'seven7seven')
      .replaceAll('eight', 'eight8eight')
      .replaceAll('nine', 'nine9nine')
      .split('')
      .filter( c => !isNaN(parseInt(c)) )
    )
    .map(line => parseInt(`${line[0]}${line[line.length - 1]}`))
    .reduce((acc, cur) => acc+cur, 0)
}

console.log('part 1', part1(input));
console.log('part 2', part2(input));