import './Gallery.scss';
import { Link } from 'react-router-dom';

const Gallery = ({data}) => {
    return (
        <>
        <div className='gallery'>
            {data.map((current, index) => 
                <div key={`${index}-${current.id}`} className='gallery__item'>
                    <div className="flipCard gallery__card">
                        <div className="flipCard__rotation">
                            <div className="flipCard__front gallery__front">
                                <img src={current.cover} alt="cover" className="flipCard__picture gallery__img"></img>
                                <span className="flip_more_infos shadow-text">{current.title}</span>
                            </div>
                            <div className="flipCard__back gallery__back">
                                <div className="flipCard__back--text">
                                    <h4 className='backTitle'>{current.title}</h4>
                                    <p className='backSubText'>{current.linkText}</p>
                                    <p className='backDescription'>{current.description}</p>
                                    <ul className="backTags">
                                        {current.elements.map((tag, index) => 
                                        <li key={`${tag}-${index}`}>{tag}</li>)}
                                    </ul>
                                </div>
                                <Link to={current.link} className='Gallery__link shadow-text' target='_blank'>Consulter le code</Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
        </>
    )
}

export default Gallery;