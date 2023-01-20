import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import Plus from "../../Assets/Plus.png";
import axios from "axios";
import "./Cities.css";

const SelectedCities = () => {
  const [city1, setCity1] = useState([]);
  const [city2, setCity2] = useState([]);
  const [city1Icon, setCity1Icon] = useState([]);
  const [city2Icon, setCity2Icon] = useState([]);

  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  useEffect(() => {
    getCity1(52.37, 4.89);
    getCity2(37.07, 15.28);
    // eslint-disable-next-line
  }, []);

  const current = new Date();
  const date = `${current.toLocaleDateString("en-US", {
    weekday: "long",
  })} ${current.getDate()}, ${current.toLocaleDateString("en-US", {
    month: "long",
  })}`;

  const getCity1 = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      .then((res) => res.data)
      .then((data) => {
        setCity1(data);
        setCity1Icon(data.weather[0].icon);
      });
  };

  const getCity2 = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      .then((res) => res.data)
      .then((data) => {
        setCity2(data);
        setCity2Icon(data.weather[0].icon);
      });
  };

  return (
    <Col xl={3} md={4}>
      <div className="add-city-container">
        <img src={Plus} alt="plus-icon" className="plus-icon" />
        <div>Add city</div>
      </div>
      <div className="city-selected-active">
        <div>
          <h4>{city1.name}</h4>
          {date}
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${city1Icon}@2x.png`}
          alt="sunny-rain-icon"
          className="weather-icon-sunny-rain"
        />
        <h1 className="degree">18°</h1>
      </div>
      <div className="city-selected">
        <div>
          <h4>{city2.name}</h4>
          {date}
        </div>
        <img
          src={`http://openweathermap.org/img/wn/${city2Icon}@2x.png`}
          alt="cloud-icon"
          className="weather-icon-cloud"
        />
        <h1 className="degree">18°</h1>
      </div>
    </Col>
  );
};

export default SelectedCities;
