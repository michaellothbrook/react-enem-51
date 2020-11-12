import React from 'react';
import { Button, Carousel, Col, Container, Row } from 'react-bootstrap';
import TableValue from '../TableValue';

import coursesMoreEnem from '../../assets/images/cursos_de_curta_duracao_enem_51.png';
import BuyThreeMakeFour from '../../assets/images/compre_3_faca_4.png';
import discountPackageOneStudent from '../../assets/images/de_280_por_200.png';
import discountPackageOneNotStudent from '../../assets/images/de_460_por_350.png';
import discountPackageTwoStudent from '../../assets/images/de_160_por_120.png';
import discountPackageTwoNotStudent from '../../assets/images/de_280_por_210.png';

import './styles.css';

const Value = () => {
  return (
    <>
      <section className="value">
        <Container>
          <Row className="investment">
            <h1>INVESTIMENTO</h1>
          </Row>
          <Row>
            <Carousel indicators={false} fade={true} className="value_slide">
              <Carousel.Item>
                <TableValue
                  subject="REDAÇÃO NOTA 1000"
                  student="40,00"
                  noStudent="70,00"
                  background_color={'#4A5C65'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <TableValue
                  subject="BIOQUÍMICA E FÍSICA"
                  student="40,00"
                  noStudent="70,00"
                  background_color={'#02BDC7'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <TableValue
                  subject="ATUALIDADES"
                  student="40,00"
                  noStudent="70,00"
                  background_color={'#FFB600'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <TableValue
                  subject="MATEMÁTICA MIL"
                  student="40,00"
                  noStudent="70,00"
                  background_color={'#FC4067'}
                />
              </Carousel.Item>
              <Carousel.Item>
                <TableValue
                  subject="ENEM 51"
                  student="120,00"
                  noStudent="180,00"
                  background_color={'#180449'}
                />
              </Carousel.Item>
            </Carousel>
          </Row>
          <Row className="promotional">
            <h1>PACOTES PROMOCIONAIS</h1>
          </Row>
          <Row className="packages text-center justify-content-center">
            <Col xs={12}>
              <article className="package_1">
                <Button size="lg" href="https://www.chromos.com.br/landing-page/cursos-de-curta-duracao/">PACOTE 1</Button>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img src={coursesMoreEnem} alt="Cursos de curta duração + Enem 51" />
                  </Col>
                  <Col md={6}>
                    <img src={discountPackageOneStudent} alt="De R$280,00 por R$200,00" />
                    <img src={discountPackageOneNotStudent} alt="De R$280,00 por R$200,00" />
                  </Col>
                </Row>
              </article>
            </Col>
            <Col xs={12}>
              <article className="package_2">
                <Button size="lg" href="https://www.chromos.com.br/landing-page/cursos-de-curta-duracao/">PACOTE 2</Button>
                <Row className="align-items-center">
                  <Col md={6}>
                    <img src={BuyThreeMakeFour} alt="Compre 3 faça 4." />
                  </Col>
                  <Col md={6}>
                    <img src={discountPackageTwoStudent} alt="De R$160,00 por R$120,00." />
                    <img src={discountPackageTwoNotStudent} alt="De R$280,00 por R$210,00." />
                  </Col>
                </Row>
              </article>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Value;
