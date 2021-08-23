import React from 'react';
import { Link } from "react-router-dom";
import Logout from "./Logout";
import { useAuth } from '../hooks/useAuth';

export const NavBar = () => {
  const { isAuthenticated, currentUser } = useAuth();

  return (
    <div className="ui inverted menu">
      <Link to="/" className="item">Powrót do głownej strony</Link>
      {isAuthenticated && <Link to="/new-recipe" className="item">Wprowadź nowy przepis</Link>}
      <div className="right menu">
        {isAuthenticated
          ? (
            <>
              <span to="/dashboard" className="item">{currentUser && `Witaj: ${currentUser.email}`}</span>
              <Logout />
            </>
          )
          : (
            <>
              <Link to="/login" className="item">Logowanie</Link>
              <Link to="/register" className="item">Rejestracja</Link>
            </>
          )}
      </div>
    </div>
  )
}

export default NavBar;
