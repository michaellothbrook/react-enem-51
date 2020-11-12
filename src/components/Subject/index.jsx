import React from 'react';

import './styles.css';

const Subject = (props) => {
  return (
    <>
      <div className="subject">
        <div className="subject_card">
          <p style={{color: props.color}}>CURSO DE CURTA DURAÇÃO</p>
          <h2 style={{color: props.color}}>{props.title}</h2>
          <p>{props.info}</p>
        </div>
        {props.children}
      </div>
    </>
  );
};

export default Subject;
