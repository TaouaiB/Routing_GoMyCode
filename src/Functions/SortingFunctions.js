import React, { useState } from "react";
import Dropdown from "react-bootstrap/Dropdown";

function SortingFunctions({ newMovieData, setNewMovieData }) {
    
  const [ratingSortOrder, setRatingSortOrder] = useState(null);
  const [nameSortOrder, setNameSortOrder] = useState(null);
  const [dateSortOrder, setDateSortOrder] = useState(null);
  const [currentSortType, setCurrentSortType] = useState("Rating");

  const sortByRateHtoL = () => {
    const sortedMovieByRate = [...newMovieData].sort((a, b) => b.rating - a.rating);
    setNewMovieData(sortedMovieByRate);
    setRatingSortOrder("desc");
    setNameSortOrder(null);
    setDateSortOrder(null);
    setCurrentSortType("Rating - High to Low");
  };

  const sortByRateLtoH = () => {
    const sortedMovieByRate = [...newMovieData].sort((a, b) => a.rating - b.rating);
    setNewMovieData(sortedMovieByRate);
    setRatingSortOrder("asc");
    setNameSortOrder(null);
    setDateSortOrder(null);
    setCurrentSortType("Rating - Low to High");
  };

  const sortByNameAtoZ = () => {
    const sortedMovieByName = [...newMovieData].sort((a, b) => a.title.localeCompare(b.title));
    setNewMovieData(sortedMovieByName);
    setNameSortOrder("asc");
    setRatingSortOrder(null);
    setDateSortOrder(null);
    setCurrentSortType("Name - A to Z");
  };

  const sortByNameZtoA = () => {
    const sortedMovieByName = [...newMovieData].sort((a, b) => b.title.localeCompare(a.title));
    setNewMovieData(sortedMovieByName);
    setNameSortOrder("desc");
    setRatingSortOrder(null);
    setDateSortOrder(null);
    setCurrentSortType("Name - Z to A")
  };

  const sortByNewest = () => {
    const sortByNew = [...newMovieData].sort((a, b) => a.id - b.id);
    setNewMovieData(sortByNew);
    setDateSortOrder("desc");
    setNameSortOrder(null);
    setRatingSortOrder(null);
    setCurrentSortType("Adding Date - Newest")
  };

  const sortByOldest = () => {
    const sortByOld = [...newMovieData].sort((a, b) => b.id - a.id);
    setNewMovieData(sortByOld);
    setDateSortOrder("asc");
    setNameSortOrder(null);
    setRatingSortOrder(null);
    setCurrentSortType("Adding Date - Oldest");
  };

  return (
    <div className="Sorting">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic">
           {currentSortType}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item
            onClick={() => {
              ratingSortOrder === "desc" ? sortByRateLtoH() : sortByRateHtoL();
            }}
          >
            Sort By Rating
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              nameSortOrder === "asc" ? sortByNameZtoA() : sortByNameAtoZ();
            }}
          >
            Sort By Name
          </Dropdown.Item>

          <Dropdown.Item
            onClick={() => {
              dateSortOrder === "desc" ? sortByOldest() : sortByNewest();
            }}
          >
            Sort By Adding Date
          </Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default SortingFunctions;
