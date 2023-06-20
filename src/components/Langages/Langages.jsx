import './Langages.scss'

const Langages = () => {
    return (
        <div className='langages'>
            <div className='langages__bloc'>
                <h2 className='langages__title'>Langages Frontend</h2>
                <ul className='langages__list'>
                    <li><i className="fa-brands fa-html5"> HTML</i></li>
                    <li><i className="fa-brands fa-css3-alt"> CSS</i></li>
                    <li><i className="fa-brands fa-js"> JAVA SCIPT</i></li>
                    <li><i className="fa-brands fa-react"> REACT</i></li>
                </ul>
            </div>
            <div className='langages__bloc'>
                <h2 className='langages__title'>Langages Backend</h2>
                <ul className='langages__list'>
                    <li><i className="fa-brands fa-node"> NODE JS</i></li>
                    <li><i className="fa-sharp fa-solid fa-feather-pointed"> MONGO DB</i></li>
                    <li><i className="fa-sharp fa-regular fa-dolphin"> MySQL</i></li>
                </ul>
            </div>
        </div>
    )
}

export default Langages