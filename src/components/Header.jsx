import React from 'react';
import style from './header.css';
import headerLogo from '../assets/logo-header.svg';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';

const Header = () => {




  return (
    <header>
        <img src={headerLogo} alt="" />
        <div className='header--title-container'>
          <h1>Diego Armando Garay Cullas</h1>
          <p>Fronted Developer</p>
     
          <HashLink
          to="#projects" /*Busca Id pero en cualquier componente*/
          scroll={(el) => el.scrollIntoView({behavior:"smooth", block: "center"})}
          >
          <a href="" className='header--button' >
          Conoce mis proyectos 
          <span></span></a>
          </HashLink>
    
        </div>
    </header>
  );
};

export default Header;