import React from "react";
import FilteringFunctions from "../Functions/FilteringFunctions";

function FilteringB({ onFilter, onClear }) {
  return (
    <FilteringFunctions onFilter={onFilter} onClear={onClear} />
  );
}

export default FilteringB;
