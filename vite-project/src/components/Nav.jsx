import '../assets/styles/Nav.css';
import { Link, useLocation } from "react-router-dom";

//for creating a hide button for the nav bar
//may mess with more later
//import IoReorderTwo from "react-icons/io5";

export default function Nav() {

  return (

    <div className="navbar">
      <ul className='Links'>
        <Link to="/"> Home </Link>
        {/* <Link to="/Contact"> Contact </Link>
        <Link to="/Portfolio"> Portfolio </Link>
        <Link to="/Resume"> Resume </Link> */}
      </ul>
    </div>
  );
}