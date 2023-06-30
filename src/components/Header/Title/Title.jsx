import './Title.scss';
import { Link } from "react-scroll";


const Title = ({text}) => {
    return(
        <Link to='home' smooth={true} duration={1000} className='title' id='header'>
            <h1>{text}</h1>
        </Link>    
    )
}

export default Title