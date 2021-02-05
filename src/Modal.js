import React from "react";
import "./App.css";

const Modal = props => {

  function createElements() {
    return props.elements.map((element, index) => {
      switch (element.type) {
        case "input":
          return (
            <div className="element-item">
              <label>{element.label}</label>
              <input
                type="text"
                placeholder={element.placeholder ? element.placeholder : ""}
                onChange={e => props.handler(e, index)}
              />
            </div>
          );
        case "textArea":
          return (
            <div className="element-item">
              <label>{element.label}</label>
              <textarea
                placeholder={element.placeholder ? element.placeholder : ""}
              ></textarea>
            </div>
          );
        case "select":
          return (
            <div className="element-item">
              <label>{element.label}</label>
              <select onChange={e => props.handler(e, index)}>
                {element.options.map(item => {
                  return <option>{item}</option>;
                })}
              </select>
            </div>
          );
        case "checkboxGroup":
          return (
            <div onClick={e => props.handler(e, index)}>
              {element.elements.map(item => {
                return (
                  <div className="element-item">
                    <input type="checkbox" value={item.value} />{" "}
                    <label>{item.name}</label>
                  </div>
                );
              })}
            </div>
          );
        case "radioGroup":
          return (
            <div onClick={e => props.handler(e, index)}>
              {element.elements.map(item => {
                return (
                  <div className="element-item">
                    <input type="radio" value={item.value}  name={element.name}/>
                    <label>{item.name}</label>
                  </div>
                );
              })}
            </div>
          );
      }
    });
  }

  return (
    <div
      className="modal-container"
      onClick={e => props.toggle(false)}
      style={{ display: props.show === false ? "none" : "flex" }}
    >
      <div onClick={e => e.stopPropagation()} className="modal-content">
        <div className="modal-body">{createElements()}</div>
        <div className="footer">
          <button>Apply Filters</button>
          <button onClick={e => props.reset()}>Clear All</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
