import React from 'react'
import Header from '../../components/header/Header';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../components/featured/Featured';
import PropertyList from '../../components/propertyList/PropertyList';
import FeaturedProperty from '../../components/featuredProperty/FeaturedProperty';
import MailList from '../../components/mailList/MailList';
import Footer from '../../components/footer/Footer';
import "./home.scss";

function Home() {
  return (
    <div>
      <Navbar/>
      <Header />
      <div className="homeContainer">
        <Featured />
        <h1 className="homeTitle"> browse by property type</h1>
        <PropertyList />
        <h1 className="homeTitle"> Homes guest love</h1>
        <FeaturedProperty />
        <MailList />
        <Footer />
      </div>
    </div>
  )
}

export default Home 