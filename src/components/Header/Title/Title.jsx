import './Title.scss';
import { Link } from 'react-router-dom';

const Title = ({text}) => {
    return(
        <div className='title'>
            <h1 className='title__work'>{text}</h1>
            <div className='title__links'>
                <p>Audrey</p>
                <a href="../doc/CV_BONIS_Audrey.pdf" download>
                    <i className="fa-solid fa-file-arrow-down"></i>
                </a>
                <Link to="https://github.com/B-Audrey">
                    <i className="fa-brands fa-github"></i>
                </Link>
                <Link to="https://www.linkedin.com/in/audrey-bonis/" >
                    <i className="fa-brands fa-linkedin"></i>
                    
                </Link>
                
            </div>
            
            
        </div>        
    )
}

export default Title