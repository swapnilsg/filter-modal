import React, { useState, useEffect } from "react";
import "./App.css";
import Filter from "./Filter";
import Modal from "./Modal";
import cloneDeep from "lodash.clonedeep";
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
    label: "about you",
    value: ""
  },
  {
    type: "checkboxGroup",
    name: 'select',
    elements: [
      { name: "first", value: "first", checked: false },
      { name: "second", value: "second", checked: false }
    ]
  },
  {
    type: "radioGroup",
    name: "gender",
    value: "",
    elements: [
      { name: "first", value: "first" },
      { name: "second", value: "second" }
    ]
  },
  {
    type: "select",
    options: ["INDIA", "USA", "UAE", "UK"],
    label: "country",
    value: ""
  }
];

function App() {
  const [showModal, toggleModal] = useState(false);
  const [filterCount, setFilterCount] = useState(0);
  const [elements, setElements] = useState(() => cloneDeep(initialElements));

  function resetElements() {
    setElements(cloneDeep(initialElements));
    setFilterCount(0);
  }

  function handler(event, index, nestedIndex) {
    console.log("intial data", initialElements);
    const preset = cloneDeep(elements);
    // to update the filter count only once for each element selescted
    if (preset[index].value === "") setFilterCount(filterCount + 1);
    if (event.target.type === "checkbox") {
      // checkbox group doesnt have value on element we handle count here ..
      if (preset[index].elements[nestedIndex].checked) {
        setFilterCount(filterCount === 0 ? 0 : filterCount - 1);
      } else {
        setFilterCount(filterCount + 1);
      }
      preset[index].elements[nestedIndex].checked = !preset[index].elements[
        nestedIndex
      ].checked;
    } else {
      preset[index].value = event.target.value;
    }
    setElements(preset);
    // console.log("elenemt clicked", event.target.tnameype, "index", index);
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
