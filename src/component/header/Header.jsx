import React from "react";
// import { FaLocationArrow, FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Gym from "../images/gym.jpg";

const Header = () => {
  return (
    <MainHeader>
      <div className="Container mainContainer">
        <div className="headerTop">
          <div className="MainHeader_left">
            <h4>#LifetimePropertyDeals</h4>
            <h1>Explore the best Apartment in your City</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
              animi officia cum illo reiciendis. Alias repudiandae eveniet
              necessitatibus similique temporibus?
            </p>
            <Link to="/" className="HeaderLink">
              Book Now
            </Link>
          </div>
          <div className="MainHeader_right">
            <div className="MainImg">
              <img src={Gym} alt="" />
            </div>
          </div>
        </div>
        {/* <div className="headerBottom">
          <form>
            <div className="SearchContainer">
              <div className="searchOne">
                <FaSearch />
                <input type="text" placeholder="Select Country" />
              </div>
              <div className="border"></div>
              <div className="searchOne">
                <FaLocationArrow />
                <input type="text" placeholder="State" />
              </div>
              <input type="Submit" />
            </div>
          </form>
        </div> */}
      </div>
    </MainHeader>
  );
};

const MainHeader = styled.header`
  width: 100%;
  height: 40rem;
  background: #e0ebed;
  /* margin-top: 4rem; */
  @media screen and (max-width: 800px) {
    width: 100%;
    height: 80vh;
  }

  @media screen and (max-width: 380px) {
    height: 90vh;
  }

  .mainContainer {
    display: flex;
    align-items: center;
    flex-flow: column;
    margin: 0 auto;
  }

  .headerTop {
    /* height: 25rem; */
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: space-between;
    gap: 5rem;
    z-index: 10;
    margin-top: 5rem;
    /* border: 1px solid black; */
    @media screen and (max-width: 768px) {
      display: flex;
      flex-direction: column;
      margin-top: 10rem;
    }
  }

  .HeaderLink {
    padding: 0.6rem 1.5rem;
    border-radius: 5px;
    border: 1.2px solid #6e6ec1;
    background: #6e6ec1;
    color: #f6f8f9;
    font-size: 1rem;
    transition: 0.3s ease-in-out;
    outline: none;
  }

  .HeaderLink:hover {
    background: transparent;
    color: var(--outline);
  }

  .MainHeader_left {
    margin-top: 0;
  }

  .MainHeader_left h4 {
    margin-bottom: 1rem;
    color: #eb3fac;
  }

  .MainHeader_left h1 {
    font-size: 2.8rem;
    color: #25185c;
    @media screen and (max-width: 768px) {
      font-size: 2.5rem;
    }
  }
  .MainHeader_left p {
    margin: 1rem 0 2rem;
    font-size: 1.1rem;
    line-height: 1.5em;
  }

  .MainHeader_right {
    margin: 0;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }
  .MainHeader_right img {
    border-radius: 0.8rem;
    height: 20rem;
    width: 30rem;
    margin-top: 5rem;
  }
  /* .headerBottom {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 15vh;
    background: #f6f8f9;
    border-radius: 10px;
    position: absolute;
    bottom: -180px;
    left: 50%;
    transform: translateX(-50%);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 29px 0px;
  }

  .SearchContainer {
    display: flex;
    align-items: center;
    justify-content: space-between;

  }

  svg {
    width: 16px;
    height: 16px;
    margin-right: 1rem;
    color: #16104b;
  }

  .searchOne {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-right: 2rem;
  }
  .searchOne input {
    padding: 5px 0;
    border-bottom: 1px solid #798f9a;
    outline: none;
    font-size: 15px;
    text-transform: capitalize;
    color: #798f9a;
    background-color: #f6f8f9;
  }

  input[type="Submit"] {
    border: none;
    padding: 14px 30px;
    color: #f6f8f9;
    background-color: #16104b;
    border: 1.2px solid #16104b;
    border-radius: 5px;
    font-size: 0.9rem;
    outline: none;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background: transparent;
      color: #16104b;
    }
  }

  .border {
    border-right: 1px solid #16104b;
    width: 10px;
    height: 25px;
    margin-right: 2rem;
  } */
`;

export default Header;
