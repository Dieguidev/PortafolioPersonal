import React from 'react';
import style from './mainProjectsDetail.css'
import imagePokedex from '../assets/pokedexImage.jpg'
import imagEcommerce from '../assets/imgEcommerce.png'
import imgFindYourGithub from '../assets/imgFindYourGITHUB.png'
import imgRickAndMorty from '../assets/imgRickAndMorty.png'
import imgWeatherApp from '../assets/imgWeatherApp.png'

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
          <a href="https://primerecommercee.netlify.app/" target='_blank'>
            <img className='projectimg' src={imagEcommerce} alt="" />
            <p className='project-card-title'>Ecommerce</p>
            <p className='project--card-body'>La API toma información detallada de los pokemons </p>
          </a>
        </article>

        <article className='project-detail-card'>
          <a href="https://pokedexpokemontrainer.netlify.app/" target='_blank'>
            <img className='projectimg' src={imagePokedex} alt="" />
            <p className='project-card-title'>Pokedex</p>
            <p className='project--card-body'>La API toma información detallada de los pokemons </p>
          </a>
        </article>

        <article className='project-detail-card'>
          <a href="https://findyourgithubs.netlify.app/" target='_blank'>
            <img className='projectimg' src={imgFindYourGithub} alt="" />
            <p className='project-card-title'>Find Your GITHUB</p>
            <p className='project--card-body'>La API toma información detallada de los pokemons </p>
          </a>
        </article>

        <article className='project-detail-card'>
          <a href="https://app.netlify.com/sites/wikyrickandmorty/overview" target='_blank'>
            <img className='projectimg' src={imgRickAndMorty} alt="" />
            <p className='project-card-title'>Wiky Rick and Morty</p>
            <p className='project--card-body'>La API toma información detallada de los pokemons </p>
          </a>
        </article>

        <article className='project-detail-card'>
          <a href="https://weatherconditions.netlify.app/" target='_blank'>
            <img className='projectimg' src={imgWeatherApp} alt="" />
            <p className='project-card-title'>Weather App</p>
            <p className='project--card-body'>La API toma información detallada de los pokemons </p>
          </a>
        </article>

      </section>
    </section>
  );
};

export default MainProjectsDetail;