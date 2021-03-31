import './Header.scss';

import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../firebase/firebase.utils';

const Header = ({ currentUser }) => (
  <div className="header container">
    <Link to="/">
      <Logo className="header__logo" />
    </Link>

    <nav className="nav">
      <Link className="nav__link" to="/">
        Home
      </Link>
      <Link className="nav__link" to="/shop">
        Shop
      </Link>
      <Link className="nav__link" to="/contact">
        Contact
      </Link>
      <Link onClick={handleSignOutClick} className="nav__link" to="/sign-in">
        {currentUser ? 'Sign out' : 'Sign In'}
      </Link>
    </nav>
  </div>
);

function handleSignOutClick() {
  auth.signOut();
}

export default Header;
