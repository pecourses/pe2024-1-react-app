import { useEffect, useState } from "react";
import { FaRegSun } from "react-icons/fa";
import { MdOutlineWaterDrop } from "react-icons/md";

const WEATHER_API =
  "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&daily=temperature_2m_max,temperature_2m_min,precipitation_sum";

function Weather() {
  const [weather, setWeather] = useState(null);
  const [forecastDaysCount, setForecastDaysCount] = useState("3");

  useEffect(() => {
    fetch(
      `${WEATHER_API}${forecastDaysCount === "3" ? "&forecast_days=3" : ""}`
    )
      .then(response => response.json())
      .then(data => setWeather(data))
      .catch(e => console.log("e :>> ", e));
  }, [forecastDaysCount]);

  const mapTimes = t => <th key={t}>{t}</th>;
  const mapMaxTemps = (tempmax, index) => <td key={index}>{tempmax}</td>;
  const mapMinTemps = (tempmin, index) => <td key={index}>{tempmin}</td>;
  const mapPrecipitations = (p, index) => <td key={index}>{p}</td>;
  const mapPrecipitationsToIcons = (p, index) => (
    <td key={index}>{p > 0 ? <MdOutlineWaterDrop /> : <FaRegSun />}</td>
  );

  // Якщо weather?.daily undefined, то це буде {},
  // а оскільки в ньому нема властивостей,
  // то за синтаксисом дефолтних значень це буде []
  const {
    time = [],
    temperature_2m_max = [],
    temperature_2m_min = [],
    precipitation_sum = [],
  } = weather?.daily ?? {};

  // розмітка мінімалістична, сприймається в цілому
  return (
    <>
      <button onClick={() => setForecastDaysCount("3")}>3</button>
      <button onClick={() => setForecastDaysCount("7")}>7</button>
      <table>
        <caption> Прогноз погоди на {forecastDaysCount} днів</caption>
        <thead>
          <tr>{time.map(mapTimes)}</tr>
        </thead>
        <tbody>
          <tr>{temperature_2m_max.map(mapMaxTemps)}</tr>
          <tr>{temperature_2m_min.map(mapMinTemps)}</tr>
          <tr>{precipitation_sum.map(mapPrecipitations)}</tr>
          <tr>{precipitation_sum.map(mapPrecipitationsToIcons)}</tr>
        </tbody>
      </table>
    </>
  );
}

export default Weather;
