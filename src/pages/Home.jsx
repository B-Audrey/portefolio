import { Link } from "react-router-dom"
import '../styles/Home.scss'
import Title from "../components/Title/Title"
import Autotext from "../components/Autotext/Autotext"

const Home = () => {
    return(
        <div className="fullContent">
            <Title />
            <div className="textToRead">
            <Autotext />
                <div className='webLink'>
                    <Link to="/informations" className="page__link">
                        <i className="fa-solid fa-meteor"></i>
                        &nbsp; Atterrir sur mon profil
                    </Link>
                    <Link to="/tictactoe" className="page__link">
                        <i className="fa-solid fa-table-cells-large"></i>
                        &nbsp; Jouer au morpion avec un collegue
                    </Link>
                    <Link to="/contact" className="page__link">
                        <i className="fa-solid fa-satellite-dish"></i>
                        &nbsp; Entrer en contact
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Home