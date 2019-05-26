import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

function App() {
  let [txt, setTxt] = React.useState("");
  let [num, setNum] = React.useState(0);
  let [buttons, setButtons] = React.useState([]);

  let onSubmit = () => {
    let clone = buttons;
    for (let i = 0; i < num; i++) {
      clone.push(txt);
    }
    setButtons(clone);
    setTxt("");
    setNum(0);
  };

  return (
    <div>
      <div>
        <form
          onSubmit={event => {
            event.preventDefault();
            onSubmit();
          }}
        >
          <input
            type="text"
            value={txt}
            onChange={event => setTxt(event.target.value)}
          />
          <br />
          <input
            type="number"
            value={num}
            onChange={event => setNum(event.target.value)}
          />
          <br />
          <button>ADD</button>
        </form>
      </div>
      <hr />
      <div>
        {buttons.map(v => (
          <button>{v}</button>
        ))}
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
