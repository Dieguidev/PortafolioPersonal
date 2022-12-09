import React from 'react';
import Logo from '../assets/logo-header.svg'
import styles from './footer.css'

const Footer = () => {
  return (
    <footer>
      <section className='left'>
        <ul>
          <li><a href="https://linkedin.com/in/dieguidev" target='_blank'>Linkedin</a></li>
          <li><a  href="https://docs.google.com/document/d/156eXeIpKt_2AKKVaUDHzmEFRC3LcVnlq/edit" target='_blank'>Curriculum Vitae</a></li>
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