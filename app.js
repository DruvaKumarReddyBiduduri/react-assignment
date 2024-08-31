import React from "react";
import { createRoot } from "react-dom/client";

function Greetings() {
  return (
    <div>
      <h1>Hello World with React</h1>
      <div>Hello</div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<Greetings />);
