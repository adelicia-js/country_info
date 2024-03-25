import { SearchItem } from "../types";

export default function Search(props: SearchItem) {
  return (
    <div className="searchBar">
      <p className="filterBar">
        Find countries:{" "}
        <input
          className="searchInput"
          value={props.searchQuery}
          onChange={props.handleSearchInput}
        />
      </p>
    </div>
  );
}
