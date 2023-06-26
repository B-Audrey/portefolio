import './Ressources.scss'

const Ressources = () => {
    return (
        <div id="competences" className='ressources'>
            <div className='ressources__bloc'>
                <h4 className='ressources__title'>Langages Frontend</h4>
                <ul className='ressources__list'>
                    <li><i className="fa-brands fa-html5"></i>&nbsp; HTML</li>
                    <li><i className="fa-brands fa-css3-alt"></i>&nbsp; CSS</li>
                    <li><i className="fa-brands fa-js"></i>&nbsp; JAVASCRIPT</li>
                    <li><i className="fa-brands fa-react"></i>&nbsp; REACT</li>
                </ul>
            </div>
            <div className='ressources__bloc'>
                <h4 className='ressources__title'>Langages Backend</h4>
                <ul className='ressources__list'>
                    <li><i className="fa-brands fa-node"></i>&nbsp; NODE JS</li>
                    <li><i class="fa-solid fa-database"></i>&nbsp; MONGO DB</li>
                    <li><i class="fa-solid fa-database"></i>&nbsp; MySQL</li>
                </ul>
            </div>
            <div className='ressources__bloc'>
                <h4 className='ressources__title'>Outils</h4>
                <ul className='ressources__list'>
                    <li><i class="fa-solid fa-code"></i>&nbsp; VSCode</li>
                    <li><i class="fa-brands fa-github"></i>&nbsp; Git</li>
                    <li><i class="fa-brands fa-docker"></i>&nbsp;  Docker</li>
                    <li><i class="fa-brands fa-trello"></i>&nbsp; Trello</li>
                    <li><i class="fa-brands fa-jira"></i>&nbsp; Jira</li>
                    <li><i class="fa-brands fa-figma"></i>&nbsp; Figma</li>
                    <li><i class="fa-solid fa-table-columns"></i>&nbsp; Notion</li>
                </ul>
            </div>
        </div>
    )
}

export default Ressources