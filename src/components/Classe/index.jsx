import React from 'react';
import { Container, Row, Carousel } from 'react-bootstrap';
import InauguralClass from '../InauguralClass';
import TimeSheet from '../TimeSheet';

import './styles.css';

const Classe = () => {
  return (
    <>
      <section className="classe">
        <Container>
          <Row className="justify-content-center hour">
            <h1>HORÁRIO DAS AULAS</h1>
          </Row>
          <Row className="courses_timesheet justify-content-center">
            <Row className="justify-content-center">
              <h1>CURSOS DE CURTA DURAÇÃO</h1>
            </Row>
            <Carousel indicators={false} fade={true} className="timesheet_slide">
              <Carousel.Item>
                <TimeSheet
                  title="CURSOS DE CURTA DURAÇÃO"
                  background_color={'#FFB600'}
                  day="SÁBADO - 07/11"
                  subject="ATUALIDADES"
                  firstClass="13:30 - 14:50"
                  teacherFirstClass="RODRIGO MATERLLI E GUSTAVO RIBAS"
                  firstInterval="14:50 - 15:00"
                  secondClass="15:00 - 16:20"
                  teacherSecondClass="RODRIGO MATERLLI E GUSTAVO RIBAS"
                  secondInterval="16:20 - 16:40"
                  thirdClass="16:40 - 18:00"
                  teacherThirdClass="RODRIGO MATERLLI E GUSTAVO RIBAS"
                />
              </Carousel.Item>
              <Carousel.Item>
                <TimeSheet
                  title="CURSOS DE CURTA DURAÇÃO"
                  background_color={'#FC4067'}
                  day="SÁBADO - 14/11"
                  subject="MATEMÁTICA MIL"
                  firstClass="13:30 - 14:50"
                  teacherFirstClass="MARLON SILVA"
                  firstInterval="14:50 - 15:00"
                  secondClass="15:00 - 16:20"
                  teacherSecondClass="VITÓRIA WILLANI"
                  secondInterval="16:20 - 16:40"
                  thirdClass="16:40 - 18:00"
                  teacherThirdClass="MARLON SILVA E VITÓRIA WILLANI"
                />
              </Carousel.Item>
              <Carousel.Item>
                <TimeSheet
                  title="CURSOS DE CURTA DURAÇÃO"
                  background_color={'#02BDC7'}
                  day="SÁBADO - 21/11"
                  subject="BIOQUÍMICA E FÍSICA"
                  firstClass="13:30 - 14:50"
                  teacherFirstClass="DENISE ARÃO E RENATA DI BLÁSIO"
                  firstInterval="14:50 - 15:00"
                  secondClass="15:00 - 16:20"
                  teacherSecondClass="DENISE ARÃO E RENATA DI BLÁSIO"
                  secondInterval="16:20 - 16:40"
                  thirdClass="16:40 - 18:00"
                  teacherThirdClass="BRUNO PHILLIP"
                />
              </Carousel.Item>
              <Carousel.Item>
                <TimeSheet
                  title="CURSOS DE CURTA DURAÇÃO"
                  background_color={'#4A5C65'}
                  day="SÁBADO - 28/11"
                  subject="REDAÇÃO NOTA 1000"
                  firstClass="13:30 - 14:50"
                  teacherFirstClass="JANINY NOMINATO E BRUNO PETTERSEN"
                  firstInterval="14:50 - 15:00"
                  secondClass="15:00 - 16:20"
                  teacherSecondClass="JANINY NOMINATO E BRUNO PETTERSEN"
                  secondInterval="16:20 - 16:40"
                  thirdClass="16:40 - 18:00"
                  teacherThirdClass="JANINY NOMINATO E GUSTAVO FAGUNDES"
                />
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row className="enem_timesheet justify-content-center">
            <Row className="justify-content-center">
              <h1>ENEM 51</h1>
            </Row>
            <Carousel indicators={false} fade={true} className="timesheet_slide">
              <Carousel.Item>
                <InauguralClass
                  background_color={'#662D91'}
                  day="SÁBADO - 05/12"
                  subject="AULA INAUGURAL"
                  firstClass="13:30 - 14:20"
                  nameFirstClass="DOMINAR LINGUAGENS"
                  secondClass="14:20 - 15:10"
                  nameSecondClass="ENFRENTAR SITUAÇÕES PROBLEMA"
                  thirdClass="15:10 - 16:00"
                  nameThirdClass="COMPREENDER FENÔMENOS"
                  interval="16:00 - 16:20"
                  fourClass="16:20 - 17:10"
                  nameFourClass="ELABORAR PROPOSTAS"
                  fiftyClass="17:10 - 18:00"
                  nameFiftyClass="CONSTRUIR ARGUMENTAÇÃO"
                />
              </Carousel.Item>
              <Carousel.Item>
                <TimeSheet
                  title="ENEM 51"
                  background_color={'#180449'}
                  day="DOMINGO"
                  subject="06/12"
                  firstClass="08:00 - 09:20"
                  teacherFirstClass="MÓDULO 6"
                  firstInterval="09:20 - 09:30"
                  secondClass="09:30 - 10:50"
                  teacherSecondClass="MÓDULO 14"
                  secondInterval="10:50 - 11:10"
                  thirdClass="11:10 - 12:30"
                  teacherThirdClass="MÓDULO 12"
                />
              </Carousel.Item>
              <Carousel.Item>
                <TimeSheet
                  title="ENEM 51"
                  background_color={'#180449'}
                  day="SÁBADO"
                  subject="12/12"
                  firstClass="13:30 - 14:50"
                  teacherFirstClass="MÓDULO 4"
                  firstInterval="14:50 - 15:00"
                  secondClass="15:00 - 16:20"
                  teacherSecondClass="MÓDULO 9"
                  secondInterval="16:20 - 16:40"
                  thirdClass="16:40 - 18:00"
                  teacherThirdClass="MÓDULO 2"
                />
              </Carousel.Item>
              <Carousel.Item>
                <TimeSheet
                  title="ENEM 51"
                  background_color={'#180449'}
                  day="DOMINGO"
                  subject="13/12"
                  firstClass="08:00 - 09:20"
                  teacherFirstClass="MÓDULO 11"
                  firstInterval="09:20 - 09:30"
                  secondClass="09:30 - 10:50"
                  teacherSecondClass="MÓDULO 1"
                  secondInterval="10:50 - 11:10"
                  thirdClass="11:10 - 12:30"
                  teacherThirdClass="MÓDULO 5"
                />
              </Carousel.Item>
              <Carousel.Item>
                <TimeSheet
                  title="ENEM 51"
                  background_color={'#180449'}
                  day="SÁBADO"
                  subject="19/12"
                  firstClass="13:30 - 14:50"
                  teacherFirstClass="MÓDULO 13"
                  firstInterval="14:50 - 15:00"
                  secondClass="15:00 - 16:20"
                  teacherSecondClass="MÓDULO 8"
                  secondInterval="16:20 - 16:40"
                  thirdClass="16:40 - 18:00"
                  teacherThirdClass="MÓDULO 3"
                />
              </Carousel.Item>
              <Carousel.Item>
                <TimeSheet
                  title="ENEM 51"
                  background_color={'#180449'}
                  day="DOMINGO"
                  subject="20/12"
                  firstClass="08:00 - 09:20"
                  teacherFirstClass="MÓDULO 15"
                  firstInterval="09:20 - 09:30"
                  secondClass="09:30 - 10:50"
                  teacherSecondClass="MÓDULO 7"
                  secondInterval="10:50 - 11:10"
                  thirdClass="11:10 - 12:30"
                  teacherThirdClass="MÓDULO 10"
                />
              </Carousel.Item>
            </Carousel>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Classe;
