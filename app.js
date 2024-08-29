function Button() {
  return <button>Click</button>;
}

function Greetings() {
  return (
    <div>
      <h1>Hello World with React</h1>
      <div>Hello</div>
    </div>
  );
}

ReactDOM.render(<Greetings />, document.getElementById("root"));
