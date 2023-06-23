import Card from "../components/Card/Card";
import Footer from '../components/Footer/Footer';
import '../styles/Home.scss';
import Gallery from "../components/Gallery/Gallery";
import { useEffect, useState } from "react";
import Header from '../components/Header/Header';
import Nav from "../components/Nav/Nav";
import Ressources from "../components/Ressources/Ressources";
import Bio from "../components/Bio/Bio";

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
                <div className="profil__perso">
                  <Card />
                  <Bio />
                </div>
                <Ressources className="profil__pro"  />
            </article>
            <aside className="asideGallery">
              <h2 className="asideGallery__title">Mes projets réalisés</h2>
              <p className="asideGallery__text">Cliquez sur un projet pour consulter le code</p>
              { haveData ? <Gallery data={data}/> : null }
            </aside>
        </main>
    
        {/* <Footer /> */}
        </>
    )
}

export default Home