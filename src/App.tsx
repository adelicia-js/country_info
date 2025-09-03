import { useEffect, useState } from "react";
import countryServices from "./services/countries";
import { CountryData } from "./types";
import { filteredCountries } from "./utils";
import Search from "./components/Search";
import Country from "./components/Country";
import CountryList from "./components/CountryList";
import Loading from "./components/Loading";
import Footer from "./components/Footer";
import {
  GlobalStyle,
  Container,
  SubContainer,
  Header,
  Title,
  ResultsContainer,
  MessageContainer,
} from "./components/styled/Core";

function App() {
  const [countries, setCountries] = useState<CountryData[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countryServices.getAllCountryData().then((data) => setCountries(data));
  }, []);

  const handleSearchInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);

    if (countries.length === 1) {
      countryServices.getAllCountryData().then((data) => setCountries(data));
    }
  };

  const handleSpecificCountry = (countryName: string) => {
    countryServices.getSpecificCountryData(countryName).then((data) => {
      setCountries([data]);
    });
  };

  const render = () => {
    const filteredCountriesResult = filteredCountries(countries, search);

    if (search.length > 0) {
      if (filteredCountriesResult.length > 3) {
        return (
          <MessageContainer>
            Too many matches, specify another filter.
          </MessageContainer>
        );
      } else if (
        filteredCountriesResult.length > 1 &&
        filteredCountriesResult.length <= 3
      ) {
        return (
          <ResultsContainer>
            {filteredCountriesResult.map((country) => {
              return (
                <CountryList
                  {...country}
                  key={country.name.common}
                  handleClick={() => handleSpecificCountry(country.name.common)}
                />
              );
            })}
          </ResultsContainer>
        );
      } else if (filteredCountriesResult.length === 1) {
        return <Country {...filteredCountriesResult[0]} />;
      }
    }
  };

  return (
    <>
      <GlobalStyle />
      <Container>
        <SubContainer>
          <Header>
            <Title>
              <span role="img" aria-label="emoji">
                🌍
              </span>
              Country Explorer
              <span role="img" aria-label="emoji">
                🗺️
              </span>
            </Title>
          </Header>
          <Search searchQuery={search} handleSearchInput={handleSearchInput} />
          {countries ? render() : <Loading />}
        </SubContainer>
        <Footer />
      </Container>
    </>
  );
}

export default App;
