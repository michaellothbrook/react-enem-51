import React from 'react';

import './styles.css';
import moreIcon from '../../assets/images/more-icon.png';
import coursesTitle from '../../assets/images/cursos_de_curta_duracao.png';
import enem51 from '../../assets/images/enem51.png';

import { Col, Container, Row } from 'react-bootstrap';

const Presentation = (props) => {
  return (
    <>
      <section className="presentation">
        <Container className="">
          <Row className="title align-items-center">
            <div>
              <img src={coursesTitle} alt="Cursos de curta duração" />
            </div>
            <div>
              <img src={moreIcon} alt="Mais Enem 51" />
            </div>
            <div>
              <img src={enem51} alt="Enem 51" />
            </div>
          </Row>
          <Row className="paragraph">
            <Col xs={12}>
              <h1>APRESENTAÇÃO DOS CURSOS</h1>
              <p>Os Cursos de Curta Duração têm o propósito de trabalhar a interdisciplinaridade, uma vez que a prova do ENEM exige do candidato a resolução de questões associadas a mais de uma disciplina dentro da mesma área de conhecimento. Esses cursos são formulados e trabalhados por dois professores simultaneamente, de forma interativa.</p>
            </Col>
          </Row>
          {props.children}
        </Container>
      </section>
    </>
  );
};

export default Presentation;
