function SinglePart(props) {
  console.log('props ===', props);
  // const title = 'about';
  return (
    <article className='sectionPart'>
      <h3>
        {props.title} {props.count}
      </h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos doloremqem magni, culpa
        eveniet unde animi saepe id aliquid voluptatibus minima dolores! Ab molestiae velit deleniti
      </p>
    </article>
  );
}
export default SinglePart;
