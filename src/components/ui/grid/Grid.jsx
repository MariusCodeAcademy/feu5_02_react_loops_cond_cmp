import './grid.css';
// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid(props) {
  let finalClass = props.cols === 2 ? 'cols2 myGrid' : 'myGrid';
  finalClass += props.cols === 1 ? 'cols1' : '';

  /**
   * turi grazinti klase kuria panaudosim su div
   * props.cols === 2 ? 'cols2 myGrid'
   * props.cols === 1 ? 'cols1 myGrid'
   * kitais atvejais  myGrid
   */
  function calculateClass() {}

  console.log('finalClass ===', finalClass);
  return <div className={finalClass}>{props.children}</div>;
}
export default Grid;
