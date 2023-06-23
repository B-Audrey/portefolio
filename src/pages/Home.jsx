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
import baloonAstronaute from "../assets/baloonAstronaute.png"
import fuseeAstronaute from '../assets/fuseeAustronaute.png'
import computerAstronaute from '../assets/astronaute.png'


const Home = () => {
    let [data, setData] = useState({});
    let [haveData, setHaveData] = useState(false);
  
    useEffect(()=>{
      const fetchData = async () => {
        try{
          let response = await fetch('./data.json');
          let dataToDisplay = await response.json();
          setData(dataToDisplay);
          setHaveData(true)
        }
        catch(error){
          console.error(error)
        }
      }
    fetchData()
    }, [])
  
    console.log(data)
    return (
        <>
        <header>
            <Header />
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
            <aside className="asideGallery">
              <h3>Projets</h3>
              <div className="galleryContent">
              <ImageBloc img={computerAstronaute}/>
              { haveData ? <Gallery data={data}/> : null } 
              </div>
            </aside>
        </main>
    
        {/* <Footer /> */}
        </>
    )
}

export default Home