import "./WellnessCards.css";

const WellnessCards = () => {
  return (
    <div className="wellness-info-box wellness-info-box1 clearfix">
      {/* <p className="para">
        Preventive cost-effective healthcare services catering to all age groups,
        help identify and minimize risk factors in addition to early detection of
        illnesses.Our packages offer the fastest turnaround time for tests, along
        with prompt reporting and expert guidance. Food services are also provided
        for fasting patients.
      </p> */}
      <div className="row justify-content-center">
        <div className="col-md-3 col-sm-4 col-xs-6 padding-remove">
          <div className="bg1">
            <p>“Health is a state of body. Wellness is a state of being”</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 padding-remove">
          <div className="bg2">
            <p>
              “It’s not selfish to love yourself ! Take care of yourself and to make
              your happiness a priority”
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 padding-remove">
          <div className="bg3">
            <p>
              “You owe yourself the love that you so freely give to other people”
            </p>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 padding-remove">
          <div className="bg4">
            <p>“No beauty shines brighter than that of a good heart”</p>
          </div>
        </div>
        <div className="col-md-3 col-sm-4 col-xs-6 padding-remove">
          <div className="bg5">
            <p>
              “A healthy lifestyle not only changes your body, it changes your mind,
              your attitude and your mood”
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WellnessCards;
