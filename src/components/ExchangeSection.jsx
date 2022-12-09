import React from 'react';
import style from './exchangeSection.css'

const ExchangeSection = () => {
  return (
    <section className='main-exchange-container'>
      <div className='backgroundImg'></div>
      <div className='main-exchange-container-title'>
        <h2>Visibilizamos todas las tecnologias utilizadas</h2>
        <p>Tecnologias utilizadas en en desarrollo de los proyectos realizados</p>
      </div>
      <section className='main-tables-container'>
        <div className='main-currency-table'>
          <p className='currency-table--title'>Tecnologias</p>
          <div className='currency-table--container'>
            <table>
              <tr>
                <td className='table__top-left'>JavaScript</td>
                <td className='table__top-right table__right'><span className='down'></span></td>
              </tr>
              <tr>
                <td>React</td>
                <td className='table__right'><span className='down'></span></td>
              </tr>
              <tr>
                <td>HTML</td>
                <td className='table__right'><span className='down'></span></td>
              </tr>
              <tr>
                <td>CSS</td>
                <td className='table__right'><span className='down'></span></td>
              </tr>
              <tr>
                <td>Bootstrap</td>
                <td className='table__right'><span className='down'></span></td>
              </tr>
              <tr>
                <td>Tailwind</td>
                <td className='table__right'><span className='down'></span></td>
              </tr>
              <tr>
                <td className='table__bottom-left'>Material UI</td>
                <td className='table__bottom-right table__right'><span className='down'></span></td>
              </tr>
            </table>
          </div>
          <div className='currency-table-date'>
            <p><b>Actualizado:</b> 09 Diciembre 2022 </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExchangeSection;