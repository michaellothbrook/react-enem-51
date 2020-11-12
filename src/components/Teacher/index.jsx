import React from 'react';
import { Container, Fade } from 'react-bootstrap';
import Profile from '../Profile';

import { Teachers } from '../../contants/Teachers';

import './styles.css';

const Teacher = (props) => {

  const type = props.course;

  return (
    <>
      <Container className="teacher" style={{ backgroundColor: props.background_color }}>
        <h2>PROFESSORES</h2>
        {Teachers[type][props.subject].map(teacher => {
          return (
            <Fade key={teacher.profile} appear={true} in={true} timeout={1000}>
              <Profile profile={teacher.profile} name={teacher.name} />
            </Fade>
          )
        })}
      </Container>
    </>
  );
};

export default Teacher;
