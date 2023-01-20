import { useState, useEffect } from "react";
import { Col } from "react-bootstrap";
import axios from "axios";
import "./jumbotron.css";

const Jumbotron = () => {
  const [city, setCity] = useState([]);
  const [weather, setWeather] = useState([]);

  //env stored api key
  const apiKey = process.env.REACT_APP_WEATHER_API_KEY;

  const current = new Date();
  const date = `${current.toLocaleDateString("en-US", {
    weekday: "long",
  })} ${current.getDate()}, ${current.toLocaleDateString("en-US", {
    month: "long",
  })}`;

  useEffect(() => {
    getCity(45.07, 7.68);
    // eslint-disable-next-line
  }, []);

  const getCity = (lat, lon) => {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`
      )
      .then((res) => res.data)
      .then((data) => {
        setCity(data);
        setWeather(data.weather[0].main);
        console.log(data);
      });
  };

  return (
    <Col xl={6} md={8}>
      <div className="jumbotron">
        <h1>{city.name}</h1>
        <h5>{date}</h5>
        <h6>{weather}</h6>
      </div>
    </Col>
  );
};

export default Jumbotron;
