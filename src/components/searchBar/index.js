import React from "react"
import PropTypes from 'prop-types'

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

SearchBar.propTypes = {
	handleSubmit: PropTypes.func,
}