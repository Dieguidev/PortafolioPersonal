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
                <td className='table__top-left'>Btcoin</td>
                <td className='table__top-right table__right'>$1.96 <span className='down'></span></td>
              </tr>
              <tr>
                <td>Ethereum</td>
                <td className='table__right'>$0.07</td>
              </tr>
              <tr>
                <td>Ripple</td>
                <td className='table__right'>$2.17</td>
              </tr>
              <tr>
                <td className='table__bottom-left'>Stellar</td>
                <td className='table__bottom-right table__right'>$4.96</td>
              </tr>
            </table>
          </div>
          <div className='currency-table-date'>
            <p><b>Actualizado:</b> 21 Noviembre 2022 </p>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ExchangeSection;