import './Ressources.scss'

const Ressources = () => {
    return (
        <div id="competences" className='ressources'>
            <div className='ressources__bloc'>
                <h4 className='ressources__title'>Frontend</h4>
                <ul className='ressources__list'>
                    <li><i className="fa-brands fa-html5"></i>&nbsp; HTML</li>
                    <li><i className="fa-brands fa-css3-alt"></i>&nbsp; CSS</li>
                    <li><i className="fa-brands fa-js"></i>&nbsp; Javascript</li>
                    <li><i className="fa-brands fa-react"></i>&nbsp; React</li>
                </ul>
            </div>
            <div className='ressources__bloc'>
                <h4 className='ressources__title'>Backend</h4>
                <ul className='ressources__list'>
                    <li><i className="fa-brands fa-node"></i>&nbsp; Node JS</li>
                    <li><i className="fa-solid fa-database"></i>&nbsp; SQL</li>
                    <li><i className="fa-solid fa-database"></i>&nbsp; Mongo DB</li>
                </ul>
            </div>
            <div className='ressources__bloc'>
                <h4 className='ressources__title'>Outils</h4>
                <ul className='ressources__list'>
                    <li><i className="fa-solid fa-code"></i>&nbsp; VSCode</li>
                    <li><i className="fa-brands fa-github"></i>&nbsp; Git</li>
                    <li><i className="fa-brands fa-docker"></i>&nbsp;  Docker</li>
                    <li><i className="fa-brands fa-trello"></i>&nbsp; Trello</li>
                    <li><i className="fa-brands fa-jira"></i>&nbsp; Jira</li>
                    <li><i className="fa-brands fa-figma"></i>&nbsp; Figma</li>
                    <li><i className="fa-solid fa-table-columns"></i>&nbsp; Notion</li>
                </ul>
            </div>
        </div>
    )
}

export default Ressources