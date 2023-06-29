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


const Home = () => {
    console.log(data)
    return (
        <>
        <header id='home'>
            <Header />
            <Autotext className="header__text" />
            <div className="homeButtons">
              <Button text="Atterrir sur mon profil" hashLink="#profil"/>
              <Button text="Jouer au morpion" link="/portefolio/tictactoe"/>
              <Button text="Consulter mes projets" hashLink="#projet"/>
            </div>
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
              { data ? <Gallery data={data}/> : null } 
              </div>
            </article>
            <aside id="contact">
              <h3>Contact</h3>
              <div className="contact" >
                <p className="contact__text">Vous pouvez me contacter par email à l'adresse : <a href="mailto:bonis.audreyy@gmail.com"><strong>bonis.audreyy@gmail.com</strong></a> ou via le</p>
                <Button text='Formulaire de contact' link="/portefolio/contact"/>
              </div>
              
            </aside>        
            <div className='footerImg'>
              <ImageBloc img={fuseeAstronaute} />
            </div>
            <div className="navigation">
              <h3>Naviguer</h3>
              <div className="end__buttons">
                <Button text="Remonter le temps" hashLink="/#home"/>
                <Button text="Atterrir sur mon profil" hashLink="#profil"/>
                <Button text="Jouer au morpion" link="/tictactoe"/>
              </div>
            </div>
        </main>
        </>
    )
}

export default Home