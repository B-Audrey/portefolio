import Card from "../components/Card/Card";
import Langages from "../components/Langages/Langages";
import Nav from '../components/Nav/Nav';
import Footer from '../components/Footer/Footer';
import '../styles/Informations.scss';
import Title from '../components/Title/Title';

const Informations = () => {

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
            <aside>
                {/* Gallerie de mes projets */}
            </aside>
        </main>
    
        <Footer />
        </>
    )
}

export default Informations