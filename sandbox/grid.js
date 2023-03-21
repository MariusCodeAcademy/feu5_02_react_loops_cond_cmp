/**
 * turi grazinti klase kuria panaudosim su div
 * props.cols === 2 ? 'cols2 myGrid'
 * props.cols === 1 ? 'cols1 myGrid'
 * kitais atvejais  myGrid
 */

const props = {
  cols: 7,
};

function calculateClass() {
  let finalValue = 'myGrid';
  finalValue += ` cols${props.cols}`;
  // if (props.cols === 2) {
  //   finalValue += ' cols2';
  // } else if (props.cols === 1) {
  //   finalValue += ' cols1';
  // }
  return finalValue;
}
const rez = calculateClass();
console.log('rez ===', rez);
