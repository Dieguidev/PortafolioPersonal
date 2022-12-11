import React from 'react';
import Logo from '../assets/logo-header.svg'
import styles from './footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='left'>
        <ul>
          <li><a href="https://linkedin.com/in/dieguidev" target='_blank'>Linkedin</a></li>
          <li><a  href="https://drive.google.com/file/d/1ugJt-MnuLHBrYu4WBygFK7UJl-cFiuAl/view?usp=share_link" target='_blank'>Curriculum Vitae</a></li>
          <li><a href="https://github.com/dieguitooo12345" target='_blank'>GITHUB</a></li>
        </ul>
      </section>
      <section className='rigth'>
        <img src={Logo} alt="Logo de footer" />
      </section>
    </footer>
  );
};

export default Footer;