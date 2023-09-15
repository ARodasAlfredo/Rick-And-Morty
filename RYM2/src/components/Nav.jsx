import SearchBar from "./SearchBar";
import {NavLink} from 'react-router-dom';

const Nav = ({onSearch}) => {
    return (
        <nav>
            <SearchBar onSearch={onSearch} />
            <button>
                <NavLink to='/about'>ABOUT</NavLink>
            </button>
            <button>
                <NavLink to='/home'>HOME</NavLink>
            </button>
            <button>
                <NavLink to='/favorites'>FAVORITES</NavLink>
            </button>
        </nav>
    )
}

export default Nav;