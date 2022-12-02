import React from 'react';
import style from './header.css'
import headerLogo from '../assets/logo-header.svg'

const Header = () => {
  return (
    <header>
      <img src={headerLogo} alt="" />
      <div className='header--title-container'>
        <h1>Frontend Developer</h1>
        <p>Fronted Developer</p>
        <a href="" className='header--button'>Conoce mis proyectos <span></span></a>
      </div>
    </header>
  );
};

export default Header;