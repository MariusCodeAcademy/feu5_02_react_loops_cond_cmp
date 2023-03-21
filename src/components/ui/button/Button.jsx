function Button(props) {
  const btnText = props.text || '<<please enter btn text>>';

  return <button>{props.children}</button>;
}
export default Button;
