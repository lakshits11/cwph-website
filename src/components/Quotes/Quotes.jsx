/* eslint-disable react/jsx-key */
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import "./Quotes.css";
import QuotesData from "./quotesData.js";

const Quotes = () => {
  const random = () => {
    var x = Math.floor(Math.random() * QuotesData.length);
    const arr = [QuotesData[x].quoteText, QuotesData[x].quoteAuthor];

    function name(name){
      console.log(name.length)
      if(name.length === 0){
        return "Anonymous";
      }
      else{
        return name
      }
    }
    return (
      <>
        <h3>{arr[0]}</h3>
        <p>{name(arr[1])}</p>
      </>
    );
  };

  return (
    <Carousel
      showArrows={false}
      infiniteLoop={true}
      showThumbs={false}
      showStatus={false}
      autoPlay={true}
      interval={3500}
    >
      <div>
        <div className="myCarousel">{random()}</div>
      </div>
      <div>
        <div className="myCarousel">{random()}</div>
      </div>
      <div>
        <div className="myCarousel">{random()}</div>
      </div>
      <div>
        <div className="myCarousel">{random()}</div>
      </div>
      <div>
        <div className="myCarousel">{random()}</div>
      </div>
    </Carousel>
  );
};

export default Quotes;
