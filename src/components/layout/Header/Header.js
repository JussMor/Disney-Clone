/* eslint-disable jsx-a11y/anchor-is-valid */
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useEffect, useCallback } from "react";
import {
  Nav,
  Logo,
  NavMenu,
  Login,
  UserImg,
  DropDown,
  SignOut,
} from "./HeaderStyle";
import { signInWithPopup, onAuthStateChanged, signOut } from "firebase/auth";
import { auth, provider } from "../../../services/firebase/firebase";
import {
  setUserLoginDetails,
  setSignOutState,
  selectUserName,
  selectUserPhoto,
} from "../../../stateManage/redux/feature/user/userSlice";

const Header = (props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);

  
  const handleAuth = () => {
    if(!userName){ 
      signInWithPopup(auth, provider)
      .then((result) => {
        setUser(result.user);
        
      })
      .catch((error) => {
        alert(error.message);
      });

    } else if (userName) {
      signOut(auth).then(() => {
        dispatch(setSignOutState());
        navigate("/");
      }).catch((error) => {
        alert(error.message);
      });

    }

  };

  const setUser = useCallback((user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  } , [dispatch]);

  useEffect(() => {
    onAuthStateChanged(auth,async user =>{
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
}, [userName,setUser,navigate]);

  return (
    <Nav>
      <Logo>
        <img src="/assets/images/logo.svg" alt="Disney+" />
      </Logo>

      {!userName ? (
        <Login onClick={handleAuth}>Login</Login>
      ) : (
        <>
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
            <UserImg src={userPhoto} alt={userName} />
            <DropDown>
              <span onClick={handleAuth}>Sign out</span>
            </DropDown>
          </SignOut>
        </>
      )}
    </Nav>
  );
};

export default Header;
