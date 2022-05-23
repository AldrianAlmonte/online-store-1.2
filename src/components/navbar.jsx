import "./navbar.css"
// import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
// import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';

function Navbar() { // custom components will start with a capital letter and returm something
    return( 
        //in JSX you will use className for CSS 
    <div className="navbar"> 
        <a href="">Home</a>
        <a href="">New Arrivals</a>
        <a href="">Clothing</a>
        <a href="">Collectibles</a>
        <a href="">Accesories</a>

        <input type="text" placeholder="search" />

    </div>
);
}

export default Navbar; // need to export a component so it can be imported into another JS fileimport Navbar from './navbar';

