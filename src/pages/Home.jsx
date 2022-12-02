import React from 'react';
import Header from '../components/Header'
import ExchangeSection from '../components/ExchangeSection'
import MainProjectsDetail from '../components/MainProjectsDetail'
import ImageDecoration from '../components/ImageDecoration'
import Footer from '../components/Footer';

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <ExchangeSection />
        <MainProjectsDetail />
        <ImageDecoration />
      </main>
      <Footer />
    </div>
  );
};

export default Home;