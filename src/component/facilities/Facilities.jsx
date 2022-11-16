import React from "react";
import styled from "styled-components";
import { SiCampaignmonitor } from "react-icons/si";
import { BiWifi } from "react-icons/bi";
import { MdPool, MdFreeBreakfast, MdLocalLaundryService } from "react-icons/md";
import { TbParking } from "react-icons/tb";
import { FaDumbbell } from "react-icons/fa";
import { SiGnuprivacyguard } from "react-icons/si";
import { ImPower } from "react-icons/im";
// import { icons } from "react-icons/lib";

const Facilities = () => {
  const data = [
    {
      id: 1,
      icon: <SiGnuprivacyguard />,
      title: "Private Workspace",
    },
    {
      id: 2,
      icon: <SiCampaignmonitor />,
      title: "Outdoor Space",
    },
    {
      id: 3,
      icon: <MdPool />,
      title: "Swimming Pool",
    },
    {
      id: 4,
      icon: <TbParking />,
      title: "Parking space",
    },
    {
      id: 5,
      icon: <BiWifi />,
      title: "Free Wifi",
    },
    {
      id: 6,
      icon: <ImPower />,
      title: "Standby Power",
    },
    {
      id: 7,
      icon: <MdFreeBreakfast />,
      title: "Breakfast",
    },
    {
      id: 8,
      icon: <MdLocalLaundryService />,
      title: "Laundry Services",
    },
    {
      id: 9,
      icon: <FaDumbbell />,
      title: "Others",
    },
  ];

  return (
    <Section>
      <div className="Container">
        <div className="Title">
          <h4>See the Facilities</h4>
          <h4>we provide in real time.</h4>
        </div>
        <div className="facContainer">
          {data.map((item) => (
            <div key={item.id} className="facWrapper">
              <div className="facIcon">{item.icon}</div>
              <div className="facTitle">
                <h5>{item.title}</h5>
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
  max-height: 95vh;
  margin: 6rem 0;
  overflow: hidden;
  .Container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
    background: var(--primary--color);
    width: 60%;
    height: 100%;
    margin: 0 auto;
    padding: 3rem 2rem;
    border-radius: 10px;
    .Title {
     margin-bottom: 3rem;
      h4 {
        color: var(--default--color);
        text-align: center;
        margin-bottom: 0.3rem;
        font-size: 2rem;
        line-height: 1em;
        font-family: "Montserrat";
      }
    }
    .facContainer {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 1.5rem;
      margin: 0;
      width: 100%;
      .facWrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        .facIcon {
          font-size: 2.5rem;
          color: var(--default--color);
          z-index: 50;
        }
        .facTitle {
          h5 {
            color: var(--default--color);
            font-family: "Open Sans";
            font-weight: 500;
            z-index: 20;
          }
        }
      }
    }
  }
`;

export default Facilities;
