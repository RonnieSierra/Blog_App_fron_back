import { NavLink } from 'react-router-dom';

export default function Menu() {
    return (
        <ul className="nav nav-pills">

            <li className="nav-item">
                <NavLink className="nav-link" to="/" exact activeStyle={{ fontSize: '1.2em' }}>
                    Home
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink className="nav-link" to="/formulario" exact activeStyle={{ fontSize: '1.2em' }}>Formulario</NavLink>
            </li>
        </ul>
    );
}