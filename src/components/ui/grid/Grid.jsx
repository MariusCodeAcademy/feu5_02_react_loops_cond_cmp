import './grid.css';
// apjuosiantis elementas suteikiantis papildomu stiliaus ar funkciju dalyku
function Grid(props) {
  let finalClass = props.cols === 2 ? 'cols2 myGrid' : 'myGrid';
  finalClass += props.cols === 1 ? 'cols1' : '';

  console.log('finalClass ===', finalClass);
  return <div className={finalClass}>{props.children}</div>;
}
export default Grid;
