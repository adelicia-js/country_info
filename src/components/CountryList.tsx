import { CountryListItem } from "../types";
import {
  CountryListContainer,
  CountryName,
  ShowButton,
} from "./styled/Country";

export default function CountryList(props: CountryListItem) {
  return (
    <CountryListContainer>
      <CountryName>{props.name.common}</CountryName>
      <ShowButton onClick={props.handleClick}>Show</ShowButton>
    </CountryListContainer>
  );
}
