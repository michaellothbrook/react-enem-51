import React from 'react';
import { Carousel, Col, Container, Row } from 'react-bootstrap';

import enem51 from '../../assets/images/enem51.png';
import Teacher from '../Teacher';

import './styles.css';

const Enem = () => {

  const modules = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];


  return (
    <>
      <section className="enem">
        <Container>
          <Row className="enem_header">
            <Col xs={12}>
              <div className="img">
                <img src={enem51} alt="Enem 51" />
              </div>
            </Col>
            <Col xs={12}>
              <div className="description">
                <p>O curso Enem 51 é estruturado em 15 módulos com um total de 30 horas, nas quais serão analisadas as habilidades mais recorrentes na prova do Enem. Cada módulo é formulado e trabalhado por um professor, com transmissão ao vivo.</p>
                <p>As habilidades são construídas com base em cinco eixos cognitivos, que serão estudados pelos alunos na Aula Inaugural.</p>
              </div>
            </Col>
          </Row>
          <Row className="enem_teachers">
            <Carousel className="teachers_slide">
              {modules.map(module => {
                return (
                  <Carousel.Item key={module}>
                    <Teacher course="ENEM" subject={`modulo${module}`} background_color={'#DEE9F2'} />
                  </Carousel.Item>
                )
              })}
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Enem;
