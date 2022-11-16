import React, { useState } from "react";
import styled from "styled-components";
import Data from "./data";

const LodgeDetail = () => {
  const [data, setData] = useState(Data);

  const filterResult = (cartItem) => {
    const result = Data.filter((curDate) => {
      return curDate.category === cartItem;
    });
    setData(result);
  };

  return (
    <Section>
      <div className="Container">
        <div className="row">
          <div className="col">
            <h1>Save an extra 10% on every </h1>
            <h1>room booking</h1>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <button
              className="btn active"
              onClick={() => filterResult("bedroom")}
            >
              Bedroom
            </button>
            <button className="btn" onClick={() => filterResult("guest room")}>
              Guest Room
            </button>
            <button
              className="btn"
              onClick={() => filterResult("meeting room")}
            >
              Meeting Rooms
            </button>
            <button className="btn" onClick={() => filterResult("gym center")}>
              Gym Center
            </button>
            <button
              className="btn"
              onClick={() => filterResult("swimming pool")}
            >
              Swimming Pool
            </button>
          </div>
          <div className="col">
            <div className="cards">
              {data.slice(0, 3).map((values) => {
                const { id, img, title } = values;
                return (
                  <div key={id} className="card">
                    <div className="cardImg">
                      <img src={img} alt="" />
                      <div className="cardTitle">{title}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  .Container {
    width: 90%;
    margin: 0 auto;
    margin-bottom: 3rem;
    position: relative;
  }
  .row:first-child {
    margin-bottom: 3rem;
  }
  h1 {
    font-size: 2rem;
  }

  .row:nth-child(2) {
    display: flex;
  }

  .row:nth-child(2) .col {
    padding: 0 15px;
  }
  .row:nth-child(2) .col:first-child {
    flex: 1;
    display: flex;
    flex-flow: column;
  }

  .btn {
    margin-bottom: 15px;
    background-color: transparent;
    border: none;
    outline: none;
    width: max-content;
    text-transform: uppercase;
    font-size: 1.2rem;
    transform: all 0.5s;
    cursor: pointer;
  }

  /* .active{
    color: goldenrod;
    font-weight: bold;
  } */

  .btn:hover {
    font-weight: bold;
    color: goldenrod;
  }
  .row:nth-child(2) .col:last-child {
    flex: 3;
  }
  .cards {
    display: flex;
    flex-wrap: wrap;
    /* position: absolute; */
  }

  .card {
    width: 250px;
    box-shadow: 0 0 10px #ccc;
    /* border-radius: 10px; */
    /* padding: 5px; */
    margin: 0 25px 25px 0;
  }

  .cardImg img {
    width: 100%;
    height: 250px;
    border-radius: 10px;
  }
  .cardTitle {
    position: absolute;
    bottom: 9%;
    z-index: 50;
    margin-left: 10px;
    font-weight: bold;
    color: #fff;
    font-family: "Open Sans";
  }
`;

export default LodgeDetail;
