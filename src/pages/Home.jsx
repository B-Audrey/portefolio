import Card from "../components/Card/Card";
import '../styles/Home.scss';
import Gallery from "../components/Gallery/Gallery";
import Header from '../components/Header/Header';
import Ressources from "../components/Ressources/Ressources";
import Bio from "../components/Bio/Bio";
import ImageBloc from "../components/ImageBloc/ImageBloc";
import baloonAstronaute from "../assets/baloonAstronaute.png";
import fuseeAstronaute from '../assets/fuseeAustronaute.png';
import computerAstronaute from '../assets/astronaute.png';
import Button from "../components/Button/Button";
import Autotext from "../components/Autotext/Autotext";
import data from "../data.json";
import { Link } from "react-router-dom";


const Home = () => {
    console.log(data)
    return (
        <>
        <header id='home'>
            <Header />
            <Autotext className="header__text" />
            <div className="homeButtons">
              <Button text="Atterrir sur mon profil" hashLink="profil"/>
              <Button text="Jouer avec un ami" link="/portefolio/tictactoe"/>
              <Button text="Consulter mes réalisations" hashLink="projets"/>
            </div>
        </header>
        <main className="mainContent" id="profil">
            <article className="profil" >
                <div className="profil__perso">
                  <Card />
                  <div className="profil__perso--text" >
                    <h3>Profil</h3>
                    <Bio />
                  </div>
                </div>
                <div className="profil__pro" >
                  <div className="profil__pro--background" id="competences" >
                    <div className="profil__pro--text" >
                      <h3>Compétences</h3>
                      <Ressources />
                    </div>
                  </div>
                  <ImageBloc img={baloonAstronaute}/>
                </div>
            </article>
            <article className="galleryBloc" id="projets">
              <ImageBloc img={computerAstronaute}/>
              <div className="galleryBloc__content">
                <h3>Projets</h3>
                { data ? <Gallery data={data}/> : null } 
              </div>
            </article>
            <aside className="contact" id="contact">
              <h3>Contact</h3>
              <p className="contact__text">Vous pouvez me contacter par email à l'adresse : <a href="mailto:bonis.audreyy@gmail.com"><strong>bonis.audreyy@gmail.com</strong></a> ou via la messagerie <Link to="https://www.linkedin.com/in/audrey-bonis/" target="_blank"><strong>LinkedIn</strong>,</Link> je vous répondrais au plus vite.</p>
            </aside>        
            <div className='footerImg'>
              <ImageBloc img={fuseeAstronaute} />
            </div>
        </main>
        </>
    )
}

export default Home