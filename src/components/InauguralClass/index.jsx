import React from 'react';

import './styles.css';

const InauguralClass = (props) => {
  return (
    <>
      <section className="timesheet text-center">
        <div className="card" style={{ width: '100%' }}>
          <div className="hours">
            <div className="card-header" style={{ backgroundColor: props.background_color }}>
              {props.subject} <br />
              {props.day}
            </div>
            <h5 className="card-title">{props.firstClass} <br /> {props.nameFirstClass}</h5>
            <hr />
            <h5 className="card-title">{props.secondClass} <br /> {props.nameSecondClass}</h5>
            <hr />
            <h5 className="card-title">{props.thirdClass} <br /> {props.nameThirdClass}</h5>
            <hr />
            <h6 className="card-subtitle mb-2 text-muted">{props.interval} - INTERVALO</h6>
            <hr />
            <h5 className="card-title">{props.fourClass} <br /> {props.nameFourClass}</h5>
            <hr />
            <h5 className="card-title">{props.fiftyClass} <br /> {props.nameFiftyClass}</h5>
          </div>
        </div>
      </section>
    </>
  );
};

export default InauguralClass;
