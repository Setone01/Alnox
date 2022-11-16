import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import Button from "../button/Button";
// import Room1 from "../images/Room1.jpg";
// import Room2 from "../images/Room2.jpg";
// import Room3 from "../images/Room3.jpg";
// import { IoIosBed } from "react-icons/io";
import Data from "./data";
// import { BsArrowRight } from "react-icons/bs";
import Button from "../button/Button";

const Lodge = () => {
  return (
    <Section>
      <div className="headerContainer">
        <div className="flexTop">
          <div className="Title">
            <h3>
              Recommended <br />
              Rooms
            </h3>
          </div>
          <div className="button">
            <Button buttonStyle={"btn--outline--solid"}>More</Button>
          </div>
        </div>
        <div className="roomList">
          {Data.slice(0, 4).map((values) => {
            return (
              <div key={values.id} className="roomCard">
                <img className="cardImg" src={values.img} alt="rooms" />
                <div className="discount">{values.discount}</div>
                {/* <Button buttonStyle=".btn--outline--small">{<BsArrowRight />}</Button> */}

                <div className="cardContent">
                  <h5>{values.title}</h5>
                  {/* <div className="roomInfo">
                  <span className="cardIcon">
                    {values.icon1}
                    <div className="ratingNum">{values.bed}</div>
                  </span>
                  <span className="cardIcon">
                    {values.icon2}
                    <div className="ratingNum"> {values.bathroom}</div>
                  </span>
                  <span className="cardIcon">
                    {values.icon3}
                    <div className="ratingNum">{values.rating}</div>
                  </span>
                </div> */}
                  <div className="price">
                    <h6>
                      ${values.price} <span>/day</span>
                    </h6>
                    <Link to="/" className="HeaderLink">
                      View
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="roomCard">
          <img src={Room3} alt="" />
          <div className="discount">20% OFF</div>
          <div className="arrow">
            <BsArrowRight />
          </div>

          <div className="cardContent">
            <h5>Deluxe Contrast Room</h5>
            <div className="roomInfo">
              <span>
                <IoIosBed className="cardIcon" />1
              </span>
              <span>
                <IoIosBed className="cardIcon" />1
              </span>
              <span>
                <IoIosBed className="cardIcon" />1
              </span>
            </div>
            <div className="price">
              <h6>
                $89 <span>/day</span>
              </h6>
            </div>
          </div>
        </div> */}
          {/* <div className="roomCard">
          <img src={Room3} alt="" />
          <div className="discount">20% OFF</div>
          <div className="arrow">
            <BsArrowRight className="arrowIcon"/>
          </div>

          <div className="cardContent">
            <h5>Deluxe Contrast Room</h5>
            <div className="roomInfo">
              <span>
                <IoIosBed className="cardIcon" />1
              </span>
              <span>
                <IoIosBed className="cardIcon" />2
              </span>
              <span>
                <IoIosBed className="cardIcon" />3
              </span>
            </div>
            <div className="price">
              <h6>
                $89 <span>/day</span>
              </h6>
            </div>
          </div>
        </div>
        <div className="roomCard">
          <img src={Room3} alt="" />
          <div className="discount">20% OFF</div>

          <div className="cardContent">
            <h5>Deluxe Contrast Room</h5>
            <div className="roomInfo">
              <span>
                <IoIosBed className="cardIcon" />1
              </span>
              <span>
                <IoIosBed className="cardIcon" />2
              </span>
              <span>
                <IoIosBed className="cardIcon" />3
              </span>
            </div>
            <div className="price">
              <h6>
                $89 <span>/day</span>
              </h6>
            </div>
          </div>
        </div> */}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  height: max-content;
  margin: 0 auto;
  padding: 2rem 0;
  z-index: 10;
  /* overflow: hidden; */

  .headerContainer {
    display: flex;
    flex-flow: column;
    width: 90%;
    padding: 2rem 0;
    margin: 0 auto;
    @media screen and (max-width: 768px) {
      margin-top: -1rem;
    }
    .flexTop {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 2.5rem;

      .Title {
        /* margin-bottom: 2rem; */
        h3 {
          margin-bottom: 0.3rem;
          font-size: 2rem;
          line-height: 1em;
          font-family: "Montserrat";
          text-transform: capitalize;
          font-weight: 900;
          @media screen and (max-width: 768px) {
            font-size: 1.3rem;
          }
        }
      }
    }
  }

  .roomList {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
    align-items: center;
    justify-content: space-evenly;
    width: 100%;
    margin: 0 auto;
    gap: 2rem;
    z-index: 100;

    .roomCard {
      display: flex;
      flex-direction: column;
      background: #fff;
      border-radius: 10px;
      position: relative;
      box-shadow: rgba(100, 100, 111, 0.2) 0px 0px 8px 0px;

      img {
        display: block;
        width: 100%;
        height: 15rem;
        object-fit: cover;
        border-top-left-radius: 10px;
        border-top-right-radius: 10px;
        /* filter: contrast(80%); */
        /* z-index: 5; */
        @media screen and (max-width: 768px) {
          height: 11rem;
        }
      }
      .discount {
        background-color: #16104b;
        color: #ccc;
        width: max-content;
        padding: 0.4rem;
        font-size: 0.6rem;
        font-weight: 600;
        font-family: "Open Sans";
        border-radius: 10px;
        position: absolute;
        right: 0;
        margin: 0.8rem;
        z-index: 10;
      }
      .arrow {
        background-color: var(--primary--color);
        color: var(--default--color);
        width: max-content;
        padding: 0.4rem;
        font-size: 0.6rem;
        font-weight: 600;
        font-family: "Open Sans";
        border-radius: 10px;
        position: absolute;
        right: 0;
        bottom: 40%;
        margin: 0.8rem;
        width: max-content;
      }
      .cardContent {
        padding: 1rem;
        line-height: 1rem;
        /* z-index: 100; */
        h5 {
          font-size: 0.8rem;
          color: #8fb0da;
          padding-bottom: 0.7rem;
          font-family: "Open Sans";
        }
        .roomInfo {
          padding-bottom: 0.5rem;
          z-index: 10;
          span {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            font-family: "Open Sans";
            padding-right: 1.2rem;
            /* margin-bottom: 4rem; */
            color: var(--default--color);
            .cardIcon {
              display: flex;
              flex-flow: row;
              color: #ccc;
              margin-right: 0.4rem;
              z-index: 5;
            }
          }
        }
        .price {
          display: flex;
          justify-content: space-between;
          align-items: center;
          h6 {
            font-size: 1rem;
            font-family: "Open Sans";
            font-weight: 900;
            color: #16104b;
            span {
              color: #ccc;
              font-size: 0.7rem;
            }
          }
          .HeaderLink {
            padding: 0.4rem 1rem;
            border-radius: 20px;
            border: 1.2px solid #6e6ec1;
            background: #6e6ec1;
            color: #f6f8f9;
            font-size: 0.7rem;
            transition: 0.3s ease-in-out;
            outline: none;
            z-index: 100;
          }

          .HeaderLink:hover {
            background: transparent;
            color: var(--outline);
          }
        }
      }
    }
  }
`;
export default Lodge;
