import Card from "../components/Card/Card";
import Langages from "../components/Langages/Langages";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import '../styles/Informations.scss';
import Title from '../components/Title/Title';
import Gallery from "../components/Gallery/Gallery";
import { useEffect, useState } from "react";

const Informations = () => {
    let [data, setData] = useState({});
    let [haveData, setHaveData] = useState(false);
  
    useEffect(()=>{
      const fetchData = async () => {
        try{
          let response = await fetch('./data.json');
          let dataToDisplay = await response.json();
          setData(dataToDisplay);
          setHaveData(data=true)
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
        <header className="header">
            <Title />
            <Nav />
        </header>
        <main className="mainContent">
            <article className="presentation">
                <Card />
                <Langages />
            </article>
            <aside className="asideGallery">
              <h2 className="asideGallery__title">Mes projets réalisés</h2>
              <p className="asideGallery__text">Cliquez sur un projet pour consulter le code</p>
            { haveData ? <Gallery data={data}/> : null }
            </aside>
        </main>
    
        <Footer />
        </>
    )
}

export default Informations