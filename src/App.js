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
    label: "Name"
  },
  {
    type: "textArea",
    placeholder: "add description",
    label: "About you",
    value: ""
  },
  {
    type: "checkboxGroup",
    name: 'Interested',
    elements: [
      { name: "Front-end", value: "forntEnd", checked: false },
      { name: "Backend", value: "backend", checked: false },
      {name: "Full-stack", value: "fullStack", checked:false} 
    ]
  },
  {
    type: "radioGroup",
    name: "Looking for",
    value: "",
    elements: [
      { name: "part-time", value: "partTime" },
      { name: "Full-time", value: "fullTime" }
    ]
  },
  {
    type: "select",
    options: ["INDIA", "USA", "UAE", "UK"],
    label: "Country",
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
