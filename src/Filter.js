import React from "react";
import "./App.css";

const Filter = props => {
  return (
    <div>
      <div style={{marginBottom: '100px'}}>Click on the button below to start applying filters</div>
      <button className="filter-button" onClick={e => props.toggle(true)}>
        {props.filterCount === 0 ? "Filters" : `Filters (${props.filterCount})`}
      </button>
    </div>
  );
};

export default Filter;
