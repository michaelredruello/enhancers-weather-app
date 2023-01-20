import { Col } from "react-bootstrap";
import Location from "../../Assets/Location.png";
import Search from "../../Assets/Search-1.png";
import "./SearchBar.css";

const SearchBar = () => {
  return (
    <Col xl={3} xs={4}>
      <h1
        className="search-title"
        style={{ marginLeft: "28px", marginTop: "15px" }}
      >
        Search
      </h1>
      <form className="search-bar-container">
        <input className="search-bar" type="text" placeholder="ex: Amsterdam" />
        <button className="button-icon" type="submit">
          <img src={Search} alt="search-icon" className="bi-search" />
        </button>
      </form>
      <br />
      <h1 className="localization-title" style={{ marginLeft: "28px" }}>
        Localization
      </h1>
      <div className="localization-container">
        <div>
          <img src={Location} alt="location-icon" className="bi-geo-alt" />
        </div>
        <div>
          <div>Add localization</div>
        </div>
      </div>
    </Col>
  );
};

export default SearchBar;
