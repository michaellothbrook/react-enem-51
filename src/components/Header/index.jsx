import React from 'react';
import { Fade, NavLink } from 'react-bootstrap';

import './styles.css';
import logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light justify-content-center">
        <Fade appear={true} in={true} timeout={600}>
          <NavLink className="navbar-brand" href="/landing-page/cursos-de-curta-duracao/">
            <img src={logo} alt="Logo Chromos" />
          </NavLink>
        </Fade>
      </nav>

    </>
  );
};

export default Header;
