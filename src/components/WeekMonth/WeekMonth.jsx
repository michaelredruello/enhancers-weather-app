import { Col } from "react-bootstrap";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import "./WeekMonth.css";

const MonthlyData = () => {
  return (
    <Col xl={4} xs={5}>
      <Tabs defaultActiveKey="thisWeek" className="monthTabs">
        <Tab eventKey="thisWeek" title="This Week" className="monthTab">
          <div className="week-day1">Saturday</div>
          {/* <div className="week-day2">Sunday</div>
          <div className="week-day3">Monday</div> */}
        </Tab>
        <Tab eventKey="thisMonth" title="This Month" className="monthTab">
          <div className="month">Monhly data: N/A</div>
        </Tab>
      </Tabs>
    </Col>
  );
};

export default MonthlyData;
