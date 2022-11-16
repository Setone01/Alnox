import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import styled from "styled-components";
import { FaTimes, FaBars } from "react-icons/fa";
// import Button from "../button/Button";

const Nav = () => {
  const [isMobile, setIsMobile] = useState(false);
  const data = [
    {
      names: "Home",
      path: "/",
    },
    {
      names: "Booking",
      path: "/booking",
    },
    {
      names: "Facility",
      path: "/facility",
    },
    {
      names: "Room",
      path: "/rooms",
    },
    {
      names: "Blog",
      path: "/blog",
    },
  ];

  return (
    <Navbar>
      <div className="NavContainer">
        <Link to="/" className="Logo">
          <h4>Alnox</h4>
        </Link>
        <ul className={`Nav_link ${isMobile ? "show_nav" : "hide_nav"}`}>
          {data.map(({ names, path }, index) => {
            return (
              <li key={index}>
                <NavLink to={path}>{names}</NavLink>
              </li>
            );
          })}
          <button className="NavButton">Sign In</button>
        </ul>
        <button className="MobileToggle" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </Navbar>
  );
};

const Navbar = styled.nav`
  width: 100%;
  height: 4.5rem;
  top: 0;
  left: 0;
  display: grid;
  place-items: center;
  background-color: #f6f8f9;
  position: fixed;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 7px 0px;
  z-index: 999;

  .NavContainer {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    margin: 0 auto;
    position: relative;
  }
  .Logo {
    text-decoration: none;
  }
  h4 {
    font-size: 1.8rem;
    color: #6e6ec1;
  }
  .Nav_link {
    display: flex;
    align-items: center;
    gap: 3rem;
  }

  .Nav_link a {
    text-decoration: none;
    color: #16104b;
    font-size: 1rem;
    /* font-weight: 500; */
    transition: all 0.3s ease-in-out;
  }

  .Nav_link a:hover {
    color: #6e6ec1;
  }

  .Nav_link li {
    list-style-type: none;
  }

  .NavButton {
    padding: 0.6rem 1.5rem;
    font-size: 1rem;
    border-radius: 5px;
    border: 1.2px solid #6e6ec1;
    background: #6e6ec1;
    color: #f6f8f9;
    transition: 0.3s ease-in-out;
    outline: none;
  }

  .NavButton:hover {
    background: transparent;
    color: var(--outline);
  }

  .MobileToggle {
    display: none;
  }

  @media screen and (max-width: 800px) {
    .NavContainer {
      width: 100%;
    }

    .Logo {
      margin-left: 1rem;
    }
    h4 {
      font-size: 1.4rem;
    }
    .MobileToggle {
      display: inline-block;
      background-color: #f6f8f9;
      font-size: 1.5rem;
      margin-right: 1rem;
      border: none;
      cursor: pointer;
    }
    .MobileToggle svg {
      color: var(--default--color);
    }
    .Nav_link {
      position: absolute;
      background-color: #f6f8f9;
      padding-bottom: 2rem;
      height: 70vh;
      top: 100%;
      right: 0;
      flex-flow: column;
      gap: 0;
    }

    .Nav_link li {
      height: 3rem;
      width: 100%;
      text-align: end;
    }
    .Nav_link li a {
      height: 100%;
      width: 100%;
      display: flex;
      align-items: center;
      padding: 0 3rem;
    }
    .show_nav {
      display: flex;
    }
    .hide_nav {
      display: none;
    }

    .NavButton {
      margin-top: 0.6rem;
    }
  }
`;

export default Nav;
