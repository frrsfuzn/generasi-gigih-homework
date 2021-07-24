import React from "react";

export default function SearchBar({ handleSubmit }) {
  return (
    <form onSubmit={handleSubmit}>
      <input id="searchBar" type="text" />
      <input
        className="elemenNeo btn"
        id="buttonSearch"
        type="submit"
        value="Search"
      />
    </form>
  );
}
