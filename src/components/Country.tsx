import { useState, useEffect } from "react";
import { CountryData, WeatherData } from "../types";
import countryServices from "../services/countries";
import { celsiusTemp } from "../utils";
import Loading from "./Loading";
import {
  FlagContainer,
  Flag,
  InfoCards,
  InfoCard,
  CardTitle,
  CardContent,
  StatItem,
  StatLabel,
  StatValue,
} from "./styled/Country";

export default function Country(props: CountryData) {
  const [weatherData, setWeatherData] = useState<WeatherData>();

  useEffect(() => {
    countryServices
      .getCountryWeather(props.latlng[0], props.latlng[1])
      .then((data) => {
        setWeatherData(data);
      });
  }, [props.latlng]);

  const mapLanguages = () => {
    const langObject = props.languages;
    const langValues = Object.values(langObject);
    return langValues.map((language) => <li key={language}>{language}</li>);
  };

  return (
    <InfoCards>
      <InfoCard>
        <CardTitle>🌍 {props.name.common}</CardTitle>
        <CardContent style={{ textAlign: "center" }}>
          <FlagContainer>
            <Flag src={props.flags.png} alt="country flag" />
          </FlagContainer>
        </CardContent>
      </InfoCard>
      
      <InfoCard>
        <CardTitle>🏛️ Basic Information</CardTitle>
        <CardContent>
          <StatItem>
            <StatLabel>Capital</StatLabel>
            <StatValue>{props.capital}</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Area</StatLabel>
            <StatValue>{props.area} km²</StatValue>
          </StatItem>
          <StatItem>
            <StatLabel>Languages</StatLabel>
            <StatValue>
              <ul>{mapLanguages()}</ul>
            </StatValue>
          </StatItem>
        </CardContent>
      </InfoCard>
      
      {weatherData ? (
        <InfoCard>
          <CardTitle>🌤️ Weather in {props.capital}</CardTitle>
          <CardContent style={{ textAlign: "center", alignItems: "center" }}>
            <img
              src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
              alt="weather icon"
              style={{ width: "100px", height: "100px" }}
            />
            <div style={{ fontSize: "2rem", color: "#ff6b6b", fontWeight: "600" }}>
              {celsiusTemp(weatherData.main.temp)}°C
            </div>
            <div style={{ marginTop: "10px", color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
              {weatherData.weather[0].description} • Wind: {weatherData.wind.speed} km/h
            </div>
          </CardContent>
        </InfoCard>
      ) : (
        <InfoCard>
          <CardTitle>🌤️ Weather in {props.capital}</CardTitle>
          <CardContent style={{ textAlign: "center" }}>
            <Loading />
          </CardContent>
        </InfoCard>
      )}
    </InfoCards>
  );
}
