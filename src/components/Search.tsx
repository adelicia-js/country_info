import { SearchItem } from "../types";
import { SearchContainer, SearchInput, SearchButton } from "./styled/Search";

export default function Search(props: SearchItem) {
  return (
    <SearchContainer>
      <SearchInput
        placeholder="Discover any country..."
        value={props.searchQuery}
        onChange={props.handleSearchInput}
      />
      <SearchButton>🔍</SearchButton>
    </SearchContainer>
  );
}
