// PascaCasing for function components
function Message() {
  // JSX: JavaScript
  const name = "Mosh";
  //   const name = ""; // name is false
  if (name) return <h1>Hello {name}</h1>;
  return <h1>Hello World</h1>;
}

export default Message;
