import React, { useState } from "react";
import "./App.css";
import Filter from "./Filter";
import Modal from "./Modal";
const initialElements = [
  {
    type: "input",
    placeholder: "enter your name",
    value: "",
    label: "name"
  },
  {
    type: "textArea",
    placeholder: "add description",
    label: "about you"
  },
  {
    type: "checkboxGroup",
    elements: [
      { name: "first", value: "first" },
      { name: "second", value: "second" }
    ]
  },
  {
    type: "radioGroup",
    name: "gender",
    elements: [
      { name: "first", value: "first" },
      { name: "second", value: "second" }
    ]
  },
  {
    type: "select",
    options: ["INDIA", "USA", "UAE", "UK"],
    label: "country"
  }
];

function App() {
  const [showModal, toggleModal] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const [elements, setElements] = useState(initialElements);

  function resetElements() {
    setElements(initialElements);
  }

  function handler(event, index) {
    console.log("elenemt clicked", event.target.value, "index", index);
  }

  return (
    <div className="App">
      <header className="App-header">
        <Filter toggle={toggleModal} filterCount={filterCount} />
        <Modal
          handler={handler}
          reset={resetElements}
          elements={elements}
          toggle={toggleModal}
          show={showModal}
        />
      </header>
    </div>
  );
}

export default App;
