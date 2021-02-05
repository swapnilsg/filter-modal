import React from "react";

const Filter = props => {
  return (
    <div>
      <button onClick={e => props.toggle(true)}>
        {props.filterCount === 0
          ? "Apply filters"
          : `Filters (${props.filterCount})`}
      </button>
    </div>
  );
};

export default Filter;
