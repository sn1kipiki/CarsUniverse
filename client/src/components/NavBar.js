import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { Context } from "..";
import {
  ADMIN_ROUTE,
  CATALOG_ROUTE,
  LOGIN_ROUTE,
  MAIN_ROUTE,
  CONTACTS_ROUTE,
} from "../utils/consts";
// import "../"
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { $authHost, $host } from "../http/index";
import jwt_decode from "jwt-decode";

const NavBar = observer(() => {
  const [burgerVisible, setBurgerVisible] = useState(false);
  const { user } = useContext(Context);
  const navigate = useNavigate();

  const logOut = () => {
    user.setUser({});
    user.setIsAuth(false);
    localStorage.setItem("token", " ");
    user.setRole("USER");
  };

  return (
    <div class="header">
      <div class="header__container container">
        <a class="logo" href="/main">
          Cars<span>Universe</span>
        </a>

        {burgerVisible ? (
          <div
            class="header-burger active"
            onClick={() => setBurgerVisible(!burgerVisible)}
          >
            <span></span>
          </div>
        ) : (
          <div
            class="header-burger"
            onClick={() => setBurgerVisible(!burgerVisible)}
          >
            <span></span>
          </div>
        )}

        {/* ------------------------------------------------- */}

        {burgerVisible ? (
          <ul class="nav active">
            <li class="item">
              <a class="item-a" href="/main">
                MainPage
              </a>
            </li>
            <li class="item">
              <a
                class="item-a"
                href="/catalog
              "
              >
                Catalog
              </a>
            </li>
            <li class="item">
              <a
                class="item-a"
                href="/contacts
              "
              >
                Contacts
              </a>
            </li>
          </ul>
        ) : (
          <ul class="nav">
            <li class="item">
              <a class="item-a" href="/main">
                MainPage
              </a>
            </li>
            <li class="item">
              <a class="item-a" href="/catalog">
                Catalog
              </a>
            </li>
            <li class="item">
              <a class="item-a" href="/contacts">
                Contacts
              </a>
              {/* href="/contacts" */}
            </li>
          </ul>
        )}

        {/* ----------------------------------------------------------------------- */}

        {/* ------------------------------------------------------------------------ */}

        {user.isAuth && user.role === "ADMIN" && (
          <div class="login_position">
            <button
              type="button"
              class="btn_admin"
              onClick={() => navigate(ADMIN_ROUTE)}
            >
              <p>Admin</p>
            </button>

            <button
              type="button"
              class="btn_logout"
              onClick={() => {
                logOut();
                navigate(MAIN_ROUTE);
              }}
            >
              <p>Log out</p>
            </button>
          </div>
        )}
        {user.isAuth && user.role === "USER" && (
          <div class="login_position">
            <button
              type="button"
              class="btn_logout"
              onClick={() => {
                logOut();
                navigate(MAIN_ROUTE);
              }}
            >
              <p>Log out</p>
            </button>
          </div>
        )}
        {user.isAuth == false && (
          <div class="login_position">
            <button
              type="button"
              class="btn_auth"
              onClick={() => navigate(LOGIN_ROUTE)}
            >
              Auth
            </button>
          </div>
        )}

        {/* ----------------------------------------------------------- */}
      </div>
    </div>
  );
});

export default NavBar;
