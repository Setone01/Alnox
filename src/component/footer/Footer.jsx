import React from "react";
import styled from "styled-components";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  return (
    <FooTer>
      <div className="Container">
        <div className="footerCol">
          <h2>Alnox</h2>
          <p>
            The right property for you. Big range of top-rated properties. Price
            guaranteed.
          </p>
        </div>
        {/* <div className="footerCol">
          <h4>Quick Links</h4>
          <li>
            <a className="links" href="/booking">
              Booking
            </a>
          </li>
          <li>
            <a className="links" href="/facilities">
              Facilities
            </a>
          </li>
          <li>
            <a className="links" href="/room">
              Rooms
            </a>
          </li>
          <li>
            <a className="links" href="/support">
              Support
            </a>
          </li>
          <li>
            <a className="links" href="/blog">
              Blog
            </a>
          </li>
        </div> */}
        <div className="footerCol">
          <h4>Company</h4>
          <li>
            <a className="links" href="/location">
              Global location
            </a>
          </li>
          <li>
            <a className="links" href="/mission">
              Mission
            </a>
          </li>
          <li>
            <a className="links" href="/career">
              Career
            </a>
          </li>
          <li>
            <a className="links" href="/policy">
              Private Policy
            </a>
          </li>
        </div>
        <div className="footerCol">
          <h4>Information</h4>
          <li>
            <a className="links" href="/terms">
              Terms of Use
            </a>
          </li>
          <li>
            <a className="links" href="/policy">
              Private Policy
            </a>
          </li>
          <li>
            <a className="links" href="/license">
              License of Agreement
            </a>
          </li>
        </div>
        <div className="footerCol">
          <h4>Social Media</h4>
          <div className="socialMedia">
            <FaFacebookF className="socialIcon" />
            <FaTwitter className="socialIcon" />
            <FaInstagram className="socialIcon" />
            <FaWhatsapp className="socialIcon" />
          </div>
        </div>
      </div>
      <div className="footerPara">
        O'seton Hacks &copy; 2022 - All Right Reserved
      </div>
    </FooTer>
  );
};

const FooTer = styled.footer`
  width: 100%;
  background-color: var(--primary--color);
  bottom: 0;

  @media screen and (max-width: 768px) {
    bottom: unset;
  }
  .Container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;
    width: 90%;
    margin: 0 auto;
    padding: 3rem 0;

    h2 {
      margin-bottom: 1rem;
      font-size: 2rem;
      padding-top: 0;
      z-index: 4;
    }
    p {
      font-size: 1rem;
      line-height: 1.8em;
      font-weight: 500;
      color: var(--default--color);
      z-index: 4;
    }

    .footerCol {
      flex-basis: 25%;
      padding: 10px;

      &:nth-child(2),
      &:nth-child(3) {
        flex-basis: 20%;
      }

      @media screen and (max-width: 768px) {
        flex-basis: 100%;

        &:nth-child(2),
        &:nth-child(3) {
          flex-basis: 100%;
        }
      }
      h4 {
        margin-bottom: 1rem;
        font-size: 1.4rem;
        z-index: 4;
        font-weight: bold;
      }
      li {
        list-style-type: none;
        a {
          text-decoration: none;
          color: var(--default--color);
          line-height: 1.8em;
          font-size: 0.9rem;
          font-weight: 500;
          z-index: 4;
        }
      }

      .socialMedia {
        .socialIcon {
          border-radius: 50%;
          text-align: center;
          line-height: 40px;
          font-size: 30px;
          color: var(--default--color);
          padding: 6px;
          background: #fff;
          margin-right: 15px;
          cursor: pointer;
          z-index: 4;
          transition: 0.3s ease-in-out;

          &:hover {
            background-color: var(--default--color);
            color: #fff;
          }
        }
      }
    }
  }
  .footerPara {
    width: 95%;
    text-align: center;
    font-size: 0.8rem;
    border-top: 1px solid #ccc;
    margin: 0 auto;
    padding: 0.5rem 0;
  }
`;

export default Footer;
