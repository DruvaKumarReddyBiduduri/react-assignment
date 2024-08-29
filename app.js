function Button() {
  return <button>Click</button>;
}

function Greetings() {
  return (
    <div>
      <h1>Hello World with React</h1>
      <Button/>
    </div>
  );
}

ReactDOM.render(<Greetings />, document.getElementById("root"));
