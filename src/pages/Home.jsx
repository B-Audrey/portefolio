import Card from "../components/Card/Card";
import '../styles/Home.scss';
import Gallery from "../components/Gallery/Gallery";
import Header from '../components/Header/Header';
import Ressources from "../components/Ressources/Ressources";
import Bio from "../components/Bio/Bio";
import ImageBloc from "../components/ImageBloc/ImageBloc";
import Button from "../components/Button/Button";
import Autotext from "../components/Autotext/Autotext";
import data from "../data.json";
import { Link } from "react-router-dom";

const Home = () => {
    return (
        <>
        <header id='home'>
            <Header />
            <Autotext className="header__text" />
            <div className="homeButtons">
              <Button text="Atterrir sur mon profil" hashLink="profil"/>
              <Button text="Jouer avec un(e) ami(e)" link="/portefolio/tictactoe"/>
              <Button text="Consulter mes réalisations" hashLink="projets"/>
            </div>
        </header>
        <main className="mainContent" id="profil">
          <div className="parallax">
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
                  <ImageBloc />
                </div>
            </article>
            <article className="galleryBloc" id="projets">
              <ImageBloc/>
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
              <ImageBloc />
            </div>
        </div>
        </main>
        </>
    )
}

export default Home