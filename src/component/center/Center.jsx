import React from "react";
import styled from "styled-components";
import Button from "../button/Button";
import pool from "../images/pool.jpg";
import gym from "../images/gym.jpg";
import restaurant from "../images/restaurant.jpg";

const data = [
  {
    id: 1,
    img: restaurant,
    title: "Restaurant",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure facere tempora eum praesentium aliquam quisquam ullam rem inventore. Distinctio, laboriosam sapiente voluptates autem facilis consectetur! Mollitia veniam quia distinctio est, maiores tenetur quaerat pariatur. Eveniet, impedit rerum quibusdam pariatur quod, velit animi sequi recusandae ad eos enim architecto iusto consequatur!",
  },
  {
    id: 2,
    img: gym,
    title: "GYM Center",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure facere tempora eum praesentium aliquam quisquam ullam rem inventore. Distinctio, laboriosam sapiente voluptates autem facilis consectetur! Mollitia veniam quia distinctio est, maiores tenetur quaerat pariatur. Eveniet, impedit rerum quibusdam pariatur quod, velit animi sequi recusandae ad eos enim architecto iusto consequatur!",
  },
  {
    id: 3,
    img: pool,
    title: "Swimming Pool",
    desc: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure facere tempora eum praesentium aliquam quisquam ullam rem inventore. Distinctio, laboriosam sapiente voluptates autem facilis consectetur! Mollitia veniam quia distinctio est, maiores tenetur quaerat pariatur. Eveniet, impedit rerum quibusdam pariatur quod, velit animi sequi recusandae ad eos enim architecto iusto consequatur!",
  },
];

const Center = () => {
  return (
    <Section>
      <div className="Container">
        <div className="contentTitle">
          <h5>Popular Facilities</h5>
        </div>
        <div className="mainContent">
          {data.map((card) => (
            <div key={card.id} className="mainWrapper">
              <div className="mainImg">
                <img src={card.img} alt="" />
              </div>
              <div className="mainDesc">
                <h1>{card.title}</h1>
                <p>{card.desc}</p>
                <div className="mainButton">
                  <Button buttonStyle={"btn--outline--solid"}>
                    {"Visit Now"}
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

const Section = styled.section`
  width: 100%;
  margin-bottom: 3rem;

  /* height: ; */
  .Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    width: 90%;
    margin: 0 auto;
    .contentTitle {
      align-self: flex-start;
      margin-bottom: 2rem;

      h5 {
        text-align: left;
        font-size: 2rem;
        line-height: 1em;
        font-family: "Montserrat";
        line-height: 1.2em;
        z-index: 3;

        @media screen and (max-width: 768px) {
          font-size: 1.7rem;
        }
      }
    }
    .mainContent {
      width: 85%;
      margin:0 auto;
      @media screen and (max-width: 768px) {
        width: 90%;
        margin: 0 auto;
      }

      .mainWrapper {
        display: grid;
        grid-template-columns: 30% 50%;
        margin-bottom: 3rem;
        gap: 4rem;

        &:nth-child(2) {
          flex-flow: row-reverse;
        }

        @media screen and (max-width: 768px) {
          display: grid;
          grid-template-columns: 1fr;
          gap: 0.5rem;
          &:nth-child(2) {
            flex-flow: column;
          }
        }

        .mainImg {
          min-width: 100px;
          @media screen and (max-width: 768px) {
            margin-bottom: 1rem;
          }
          img {
            width: 20rem;
            height: 15rem;
            border-radius: 20px;
            z-index: 4;
          }
        }
        .mainDesc {
          /* width: 100%; */
          @media screen and (max-width: 768px) {
            width: 100%;
          }

          h1 {
            font-size: 1.2rem;
            margin-bottom: 0.4rem;
            color: var(--h1--text);
            z-index: 3;
            @media screen and (max-width: 768px) {
            }
          }
          p {
            font-size: 0.8rem;
            line-height: 1.3em;
            color: var(--default--color);
            margin-bottom: 1rem;
            z-index: 3;
          }
          .mainButton {
            margin-top: 1.2rem;
            z-index: 3;
          }
        }
      }
    }
  }
`;

export default Center;
