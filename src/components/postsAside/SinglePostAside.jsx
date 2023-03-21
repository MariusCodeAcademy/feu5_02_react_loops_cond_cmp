function SinglePostAside(props) {
  return (
    <div className='paGrid'>
      <img src={props.img} alt={props.title} />
      <h4>{props.title}</h4>
      <p>Lorem, ipsum dolor.</p>
    </div>
  );
}
export default SinglePostAside;
