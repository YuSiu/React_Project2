import { NavLink } from 'react-router-dom';

export default function NavBar() {
    return (
        <div className="nav-bar">
            <NavLink to="/category/Coronavirus"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Coronavirus
            </NavLink>
            <NavLink to="/category/Climate"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Climate
            </NavLink>
            <NavLink to="/category/World"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                World
            </NavLink>
            <NavLink to="/category/Asia"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Asia
            </NavLink>
            <NavLink to="/category/UK"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                UK
            </NavLink>
            <NavLink to="/category/Tech"
                className={(navData) => (navData.isActive ? 'nav-item nav-item--active' : 'nav-item')}>
                Tech
            </NavLink>
        </div>
    );
}