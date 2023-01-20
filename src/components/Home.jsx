import { Container, Row } from "react-bootstrap";
import Jumbotron from "./Jumbotron/jumbotron";
import SelectedCities from "./Cities/Cities";
import DisplayDay from "./Today/Today";
import MonthlyData from "./WeekMonth/WeekMonth";
import SearchBar from "./Searchbar/SearchBar";
import "./Home.css";

const Home = () => {
  return (
    <>
      <Container fluid>
        <Row className="justify-content-xl-center">
          {/* Display of the current city and date */}
          <Jumbotron />

          {/* Cities list */}
          <SelectedCities />
        </Row>
        <Row className="justify-content-xl-center">
          {/* Current display of temperature during the day */}
          <DisplayDay />

          {/* Weekly and montly traker */}
          <MonthlyData />

          {/* Searchbar and Localization function */}
          <SearchBar />
        </Row>
      </Container>
    </>
  );
};

export default Home;
