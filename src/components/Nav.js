import { Breadcrumb } from 'react-bootstrap';
import '../App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link }from 'react-router-dom'


function Nav() {
  const navStyle={
    color: 'white'
  }
  return (
    <nav>
        <h4>
            Navigation
        </h4>
        <ul className="nav-links"/>
       

        <Link style ={navStyle} to='/Home'>
            <li> Home </li>
        </Link>
        <Link style ={navStyle} to='UserSignUp'>
            <li> UserSignUp </li>
        </Link>
        <Link style ={navStyle} to='LoggedIn'>
            <li> LoggedIn </li>
        </Link>
        <Link style ={navStyle} to='About'>
            <li> About </li>
        </Link>
        
    </nav>
  );
}

export default Nav;
