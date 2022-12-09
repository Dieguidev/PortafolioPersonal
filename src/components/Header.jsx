import React from 'react';
import style from './header.css';
import headerLogo from '../assets/logo-header.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
        <img src={headerLogo} alt="" />
        <div className='header--title-container'>
          <h1>Diego Armando Garay Cullas</h1>
          <p>Fronted Developer</p>
      <Link to={'/projects'}>
          <a href="#projects" className='header--button'>Conoce mis proyectos <span></span></a>
      </Link>
        </div>
    </header>
  );
};

export default Header;