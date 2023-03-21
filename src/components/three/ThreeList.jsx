import SinglePart from './SinglePart';

function ThreeList(props) {
  return (
    <div className='gridThree'>
      <SinglePart title={props.list[0]} count={5} />
      <SinglePart title={props.list[1]} isAdmin={true} />
      <SinglePart title={props.list[2]} />
    </div>
  );
}

export default ThreeList;
