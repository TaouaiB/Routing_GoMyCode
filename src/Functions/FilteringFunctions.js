import React, { useState } from "react";
import { Rating } from "react-simple-star-rating";

function FilteringFunctions({ onFilter, onClear }) {
  const [KeyWord, setKeyWord] = useState("");
  const [rating, setRating] = useState(0); // Initialize rating as 0

  const filterText = (text) => {
    setKeyWord(text);
    onFilter({ KeyWord: text, rating });
  };

  const handleRating = (rate) => {
    setRating(rate);
    onFilter({ KeyWord, rating: rate });
  };

  const handleClear = () => {
    setKeyWord(""); // Reset the input field
    setRating(0);  // Reset the star rating to 0 to clear the stars
    onClear();
  };

  return (
    <div className="FilteringF">
      <input
        onChange={(e) => filterText(e.target.value)}
        type="text"
        placeholder="Search.."
        className="ser"
        value={KeyWord} // Bind the input value to KeyWord state
      />
      <Rating onClick={handleRating} initialValue={rating} />
      <button onClick={handleClear}>Clear</button>
    </div>
  );
}

export default FilteringFunctions;
