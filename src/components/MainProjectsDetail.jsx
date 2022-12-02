import React from 'react';
import style from './mainProjectsDetail.css'
import imagePokedex from '../assets/pokedexImage.jpg'

const MainProjectsDetail = () => {
  return (
    <section className='main-projects-detail'>
      <span className='project-detail-logo'></span>
      <div className='projects-detail-title'>
        <h2>Creo paginas web para la mejor experiencia de usuario</h2>
        <p>Confiable y diseñado para el uso diario</p>
      </div>
      <section className='project-cards--container'>
        <article className='project-detail-card'>
          <img className='project1' src={imagePokedex} alt="" />
          <p className='project-card-title'>Pokedex</p>
          <p className='project--card-body'>La API toma información detallada de los pokemons </p>
        </article>
      </section>
    </section>
  );
};

export default MainProjectsDetail;