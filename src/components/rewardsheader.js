import { render } from "@testing-library/react";
import React from "react";
import logo from "../images/logo.svg";

import { NavLink } from "react-router-dom";

export default class RewardsHeader extends React.Component {
  render() {
    return (
      <header className="header">
        <div className="logo">
          <img src={logo}></img>
        </div>

        <div className="mainmenu">
          <ul className="list-unstyled">
          <li>
              <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active" : ""
                }
              >
                HOME
              </NavLink>
            </li>

        
          </ul>
        </div>
      </header>
    );
  }
}
