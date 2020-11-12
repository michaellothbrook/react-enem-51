import React from 'react';
import { Fade } from 'react-bootstrap';

import './styles.css';

const TimeSheet = (props) => {
  return (
    <>
      <Fade appear={true} in={true} timeout={600}>
        <section className="timesheet text-center">
          {/* <h1>{props.title}</h1> */}
          <div className="card" style={{ width: '100%' }}>
            <div className="hours">
              <div className="card-header" style={{ backgroundColor: props.background_color }}>
                {props.day} <br />
                {props.subject}
              </div>
              <h5 className="card-title">{props.firstClass} <br /> {props.teacherFirstClass}</h5>
              <hr />
              <h6 className="card-subtitle mb-2 text-muted">{props.firstInterval} - INTERVALO</h6>
              <hr />
              <h5 className="card-title">{props.secondClass} <br /> {props.teacherSecondClass}</h5>
              <hr />
              <h6 className="card-subtitle mb-2 text-muted">{props.secondInterval} - INTERVALO</h6>
              <hr />
              <h5 className="card-title">{props.thirdClass} <br /> {props.teacherThirdClass}</h5>
            </div>
          </div>
        </section>
      </Fade>
    </>
  );
};

export default TimeSheet;
