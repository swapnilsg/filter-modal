import React from "react";
import "./App.css";

const Modal = props => {
  function createElements() {
    return props.elements.map((element, index) => {
      switch (element.type) {
        case "input":
          return (
            <div key={index} className="element-item">
              <div className="item">
                <label>{element.label}</label>
              </div>
              <div>
                <input
                  type="text"
                  value={element.value}
                  placeholder={element.placeholder ? element.placeholder : ""}
                  onChange={e => props.handler(e, index)}
                />
              </div>
            </div>
          );
        case "textArea":
          return (
            <div key={index} className="element-item">
              <div className="item">
                <label>{element.label}</label>
              </div>
              <div>
                <textarea
                  onChange={e => props.handler(e, index)}
                  value={element.value}
                  placeholder={element.placeholder ? element.placeholder : ""}
                ></textarea>
              </div>
            </div>
          );
        case "select":
          return (
            <div key={index} className="group-elements">
              <div className="item">
                <label>{element.label}</label>
              </div>
              <div>
                <select
                  onChange={e => props.handler(e, index)}
                  defaultValue={element.value}
                >
                  {element.options.map(item => {
                    return <option>{item}</option>;
                  })}
                </select>
              </div>
            </div>
          );
        case "checkboxGroup":
          return (
            <div key={index} className="group-elements">
              <div className="item">{element.name}</div>
              <div>
                {element.elements.map((item, i) => {
                  return (
                    <div key={i} className="element-item">
                      <input
                        type="checkbox"
                        onClick={e => props.handler(e, index, i)}
                        value={item.value}
                        checked={item.checked}
                      />{" "}
                      <label>{item.name}</label>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        case "radioGroup":
          return (
            <div key={index} className="group-elements" onClick={e => props.handler(e, index)}>
              <div className="item">{element.name}</div>
              <div>
              {element.elements.map(item => {
                return (
                  <div className="element-item">
                    <input
                      type="radio"
                      value={item.value}
                      name={element.name}
                      checked={element.value === item.value}
                    />
                    <label>{item.name}</label>
                  </div>
                );
              })}
              </div>
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
          <button className="buttons" onClick={e => props.toggle(false)}>
            Apply Filters
          </button>
          <button className="buttons" onClick={() => props.reset()}>
            Clear All
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
