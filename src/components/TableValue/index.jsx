import React from 'react';
import { Fade } from 'react-bootstrap';

import './styles.css';

const TableValue = (props) => {
  return (
    <>
      <Fade appear={true} in={true} timeout={600}>
        <div className="table_value">
          <div className="card">
            <div className="card-header" style={{ backgroundColor: props.background_color }}>
              <h6>{props.subject}</h6>
            </div>
            <div className="table_student">
              <div className="table_body" style={{ backgroundColor: props.background_color }}>
                <h6>ALUNO</h6>
                <span>
                  R$ <h3>{props.student}</h3>
                </span>
              </div>
              <footer className="card-footer">
                <h6>NÃO ALUNO</h6>
                <span>
                  R$ <h3>{props.noStudent}</h3>
                </span>
              </footer>
            </div>
          </div>
        </div>
      </Fade>
    </>
  );
};

export default TableValue;
