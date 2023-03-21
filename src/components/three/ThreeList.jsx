import Grid from '../ui/grid/Grid';
import SinglePart from './SinglePart';

function ThreeList(props) {
  return (
    <Grid cols={3}>
      <SinglePart title={props.list[0]} count={5} />
      <SinglePart title={props.list[1]} isAdmin={true} />
      <SinglePart title={props.list[2]} />
    </Grid>
  );
}

export default ThreeList;
