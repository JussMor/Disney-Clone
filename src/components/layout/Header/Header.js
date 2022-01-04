/* eslint-disable jsx-a11y/anchor-is-valid */
import {
  Nav,
  Logo,
  NavMenu,
  Login,
  UserImg,
  DropDown,
  SignOut,
} from "./HeaderStyle";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/assets/images/logo.svg" alt="Disney+" />
      </Logo>

      {/* <Login>Login</Login> */}

      <NavMenu>
        <a href="/home">
          <img src="/assets/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a>
          <img src="/assets/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a>
          <img src="/assets/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a>
          <img src="/assets/images/original-icon.svg" alt="ORIGINALS" />
          <span>ORIGINALS</span>
        </a>
        <a>
          <img src="/assets/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a>
          <img src="/assets/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <SignOut>
        <UserImg alt="p"/>
        <DropDown>
          <span>Sign out</span>
        </DropDown>
      </SignOut>
    </Nav>
  );
};

export default Header;
