import Countdown from "react-countdown";
import "./Timer.css";

const CountDownTimer = () => {
  const Completionist = () => {
    return <h4 style={{ color: "red" }}>Event is LIVE !!</h4>;
  };

  const renderer = ({ days, hours, minutes, seconds, completed }) => {
    if (completed) {
      // Render a complete state
      return <Completionist />;
    } else {
      return (
        <div className="date-container">
          <div className="date-part">
            <h5>{days}</h5>
            <span>Days</span>
          </div>
          <div className="date-part">
            <h5>{hours}</h5>
            <span>Hours</span>
          </div>
          <div className="date-part">
            <h5>{minutes}</h5>
            <span>Minutes</span>
          </div>
          <div className="date-part">
            <h5>{seconds}</h5>
            <span>Seconds</span>
          </div>
        </div>
      );
    }
  };

  const ed = new Date(2022, 0, 31, 21, 9, 0);
  var eventDate = ed.toISOString();

  return (
    <div>
      <Countdown date={eventDate} renderer={renderer} />
    </div>
  );
};

export default CountDownTimer;
