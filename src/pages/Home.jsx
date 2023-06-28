import Card from "../components/Card/Card";
import Footer from '../components/Footer/Footer';
import '../styles/Home.scss';
import Gallery from "../components/Gallery/Gallery";
import { useEffect, useState } from "react";
import Header from '../components/Header/Header';
import Nav from "../components/Nav/Nav";
import Ressources from "../components/Ressources/Ressources";
import Bio from "../components/Bio/Bio";
import ImageBloc from "../components/ImageBloc/ImageBloc";
import baloonAstronaute from "../assets/baloonAstronaute.png";
import fuseeAstronaute from '../assets/fuseeAustronaute.png';
import computerAstronaute from '../assets/astronaute.png';
import Button from "../components/Button/Button";
import data from "../data.json";


const Home = () => {
    // let [data, setData] = useState({});
    let [haveData, setHaveData] = useState(true);
  
    // useEffect(()=>{
    //   const fetchData = async () => {
    //     try{
    //       let response = await fetch('./portefolio/data.json');
    //       let dataToDisplay = await response.json();
    //       setData(dataToDisplay);
    //       setHaveData(true)
    //     }
    //     catch(error){
    //       console.error(error)
    //     }
    //   }
    // fetchData()
    // }, [])
  
    console.log(data)
    return (
        <>
        <header id='home'>
            <Header />
            <div className="homeButtons">
              <Button text="Atterrir sur mon profil" hashLink="#profil"/>
              <Button text="Jouer au morpion" link="/tictactoe"/>
              <Button text="Consulter mes projets" hashLink="#projet"/>
            </div>
            <Nav />
        </header>
        <main className="mainContent">
            <article className="profil" id="profil">
                <h3>Profil</h3>
                <div className="profil__perso">
                  <Card />
                  <Bio />
                </div>
                <h3>Compétences</h3>
                <div className="profil__pro">
                  <Ressources />
                  <ImageBloc img={baloonAstronaute}/>
                </div>
            </article>
            <article className="asideGallery" id="projet">
              <h3>Projets</h3>
              <div className="galleryContent">
              <ImageBloc img={computerAstronaute}/>
              { haveData ? <Gallery data={data}/> : null } 
              </div>
            </article>
            <aside>
              <h3>Contact</h3>
              <div className="contact">
                <p>Vous pouvez me contacter par email à l'adresse : <strong>bonis.audreyy@gmail.com</strong> ou via le</p>
                <Button text='Formulaire de contact' link="/contact"/>
              </div>
              
            </aside>
            <div className="navigation">
              <h3>Naviguer</h3>
              <div className="end__buttons">
                <Button text="Remonter le temps" hashLink="/#home"/>
                <Button text="Atterrir sur mon profil" hashLink="#profil"/>
                <Button text="Jouer au morpion" link="/tictactoe"/>
              </div>
            </div>
        </main>
        <div className='footerImg'>
          <ImageBloc img={fuseeAstronaute} />
        </div>
        <Footer />
        </>
    )
}

export default Home