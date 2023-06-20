import { Link } from "react-router-dom"
import '../styles/Home.scss'
import Title from "../components/Title/Title"

const Home = () => {
    return(
        <div className="fullContent">
            <Title />
            <div className="textToRead">
                <p>Bonjour, je suis Audrey, développeuse Java Script. Bienvenue sur mon site</p>
            </div>
            <div className='webLink'>
                <Link to="/informations" id="page_link">
                    <i className="fa-solid fa-meteor"></i>
                    Atterrir sur mon profil
                </Link>
            </div>
        </div>
    )
}

export default Home