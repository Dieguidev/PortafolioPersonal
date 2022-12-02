import React from 'react';
import Logo from '../assets/logo-header.svg'
import styles from './footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='left'>
        <ul>
          <li><a href="#">Linkedin</a></li>
          <li><a href="#">Instagram</a></li>
          <li><a href="#">Facebook</a></li>
        </ul>
      </section>
      <section className='rigth'>
        <img src={Logo} alt="Logo de footer" />
      </section>
    </footer>
  );
};

export default Footer;