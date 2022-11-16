import React from "react";
import styled from "styled-components";
// import confirmation from "../svg/confirmation.svg";
// import location from "../svg/location.svg";
// import Customercare from "../svg/Customercare.svg";
import Data from "./data";

const service = () => {
  return (
    <Section>
      <div className="mainContainer Container">
        <div className="serviceTitle">
          <h3>How it works</h3>
          <span>
            Find a perfect apartment and compare price from different side.
          </span>
        </div>
        <div className="mainContent">
          {Data.map((value) => {
            return (
              <div key={value.id} className="serviceContent">
                <img src={value.img} alt="location" />
                <div className="serviceItem">
                  <h4>{value.title}</h4>
                  <p>{value.para}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: max-content;
  padding: 4rem 0;
  background-color: #d9e7e7;
  overflow: hidden;

  .mainContainer {
    display: flex;
    justify-content: center;
    flex-flow: column;
    width: 90%;
    margin: 0 auto;
  }

  .serviceTitle {
    margin-bottom: 3rem;
    text-align: left;
  }

  .serviceTitle h3 {
    margin-bottom: 0.3rem;
    font-size: 2rem;
    font-family: "Montserrat";
    text-transform: capitalize;
    font-weight: 900;
    color: #25185c;
    @media screen and (max-width: 768px) {
      font-size: 1.3rem;
    }
  }

  .serviceTitle span {
    font-size: 1.1rem;
    color: #375555;
  }

  .mainContent {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    width: 100%;
    justify-content: space-evenly;
    margin: 0 auto;
    gap: 2rem;
  }

  .serviceContent {
    display: flex;
    flex: 1 1 1;
    flex-direction: column;
    background-color: #e1f9f9;
    border-radius: 20px;
    padding: 2rem;
    transition: 0.3s;
    z-index: 10;
  }

  .serviceContent:hover {
    box-shadow: 0 4px 20px 0 rgba(34, 68, 123, 0.2);
  }

  .serviceContent img {
    object-fit: cover;
    max-width: 200px;
    height: auto;
    align-self: center;
  }

  .serviceItem {
    display: flex;
    justify-content: center;
    align-self: normal;
    flex-flow: column;
    flex-wrap: nowrap;
    margin: auto;
  }

  .serviceItem h4 {
    font-weight: bold;
    font-size: 1.2rem;
    text-align: center;
    text-transform: capitalize;
    margin: 1.7rem 0 0.6rem 0;
    color: #25185c;
  }

  .serviceItem p {
    text-align: center;
    font-size: 0.9rem;
    line-height: 1.4em;
    color: #375555;
  }
`;

export default service;
