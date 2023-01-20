import axios from "axios";
import { GET_WEATHER } from "./Costants";
import { BASE_URL } from "../components/ApiCostants";

export const GetWeatherDetails =
  (location = "turin") =>
  async (dispatch) => {
    dispatch({ type: GET_WEATHER.PENDING });
    axios
      .get(BASE_URL, {
        params: {
          q: location,
          units: "Metric",
          lang: "en",
        },
      })
      .then((response) =>
        dispatch({ type: GET_WEATHER.SUCCESS, payload: response.data })
      )
      .catch((err) => {
        console.log(err.response, err);
        dispatch({ type: GET_WEATHER.REJECTED, payload: err.response });
      });
  };
