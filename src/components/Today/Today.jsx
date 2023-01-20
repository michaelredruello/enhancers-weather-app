import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import "./Today.css";

const DisplayDay = () => {
  const [weather, setWeather] = useState([]);
  const [icon, setIcon] = useState([]);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    getCity(45.07, 7.68);
    // eslint-disable-next-line
  }, []);

  const current = new Date();
  const date = `${current.getHours()}:${current.getMinutes()}`;

  const getCity = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      .then((res) => res.data)
      .then((data) => {
        setWeather(data.weather[0].main);
        setIcon(data.weather[0].icon);
      });
  };

  return (
    <Col xl={2} xs={3}>
      <div>
        <h1 className="today-title">Today</h1>
        <div className="day-temperature">
          <strong>Now</strong>
          <div>
            <img
              src={`http://openweathermap.org/img/wn/${icon}@2x.png`}
              alt="current-weather-icon"
            />
          </div>
          <div>
            <div>
              {weather}, {date}
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default DisplayDay;
