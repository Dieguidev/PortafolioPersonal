import React from 'react';
import Header from '../components/Header'
import ExchangeSection from '../components/ExchangeSection'
import MainProjectsDetail from '../components/MainProjectsDetail'
import ImageDecoration from '../components/ImageDecoration'
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Home = () => {
  return (
    <div>
      <Navbar />
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