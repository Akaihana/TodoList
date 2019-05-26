import React from "react";
import ReactDOM from "react-dom";
import db from "./firebase";

import "./styles.css";

console.log(db);

function App() {
  let [todos, setTodos] = React.useState([]);
  let [txt, setTxt] = React.useState("");

  async function loadTodos() {
    let snapshot = await db
      .collection("todos")
      .orderBy("created_at", "asc")
      .get();
    console.log(snapshot.docs);
    snapshot.docs.forEach(v => console.log(v.data()));

    setTodos(snapshot.docs);
  }

  async function onSubmit() {
    let newObj = { txt, created_at: new Date().getTime() };

    await db.collection("todos").add(newObj);

    loadTodos();
    setTxt("");
  }

  async function deleteTodo(id) {
    await db
      .collection("todos")
      .doc(id)
      .delete();
    loadTodos();
  }

  React.useEffect(() => {
    loadTodos();
  }, []);

  return (
    <div>
      <div>
        {todos.map(v => (
          <div key={v.id}>
            {v.data().txt}
            <button onClick={() => deleteTodo(v.id)}>del</button>
          </div>
        ))}
      </div>
      <hr />
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
          <button>ADD</button>
        </form>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
