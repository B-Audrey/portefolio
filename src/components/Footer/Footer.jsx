import { NavLink } from "react-router-dom";

const Footer = () => {
    return (
        <div className='webLink'>
            <NavLink to="#informations" className="page__link">
                <i className="fa-solid fa-meteor"></i>
                &nbsp; Atterrir sur mon profil
            </NavLink>
            <NavLink to="/tictactoe" className="page__link">
                <i className="fa-solid fa-table-cells-large"></i>
                &nbsp; Jouer au morpion avec un collegue
            </NavLink>
            <NavLink to="#contact" className="page__link">
                <i className="fa-solid fa-satellite-dish"></i>
                &nbsp; Entrer en contact
            </NavLink>
        </div>
    )
}

export default Footer