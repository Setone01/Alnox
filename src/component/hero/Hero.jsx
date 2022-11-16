// import React, { useState, useEffect } from "react";
// import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
// import { slideData } from "./data";
// import styled from "styled-components";
// import Button from "../button/Button";

// const Hero = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);
//   const slideLength = slideData.length;
//   const autoScroll = true;
//   let slideInterval;
//   let intervalTime = 5000;

//   const nextSlide = () => {
//     setCurrentSlide(currentSlide === slideLength - 1 ? 0 : currentSlide + 1);
//   };

//   const prevSlide = () => {
//     setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
//   };

//   function auto() {
//     slideInterval = setInterval(nextSlide, intervalTime);
//   }

//   useEffect(() => {
//     setCurrentSlide(0);
//   }, []);

//   useEffect(() => {
//     if (autoScroll) {
//       auto();
//     }
//     return () => clearInterval(slideInterval);
//   }, [currentSlide]);

//   return (
//     <HeroSection>
//       <div className="slider">
//         <FaArrowCircleLeft className="arrow prev" onClick={prevSlide} />
//         <FaArrowCircleRight className="arrow next" onClick={nextSlide} />

//         {slideData.map((slide, index) => {
//           return (
//             <div
//               className={index === currentSlide ? "slide current" : "slide"}
//               key={index}
//             >
//               {index === currentSlide && (
//                 <div>
//                   <img src={slide.image} alt="slide" />
//                   <div className="content">
//                     <h2>{slide.title}</h2>
//                     <p>{slide.desc}</p>
//                     <hr />
//                     <Button className="--btn --btn-primary">Explore</Button>
//                   </div>
//                 </div>
//               )}
//             </div>
//           );
//         })}
//       </div>
//     </HeroSection>
//   );
// };

// const HeroSection = styled.nav`
//   .slider {
//     width: 100%;
//     height: 90vh;
//     margin: 0 auto;
//     position: relative;
//     overflow: hidden;
//   }

//   .slide {
//     position: absolute;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     opacity: 0;
//     transform: translateX(-50%);
//     transition: all 0.5s ease;
//   }

//   @media (min-width: 600px) {
//     .slide img {
//       width: 100%;
//       height: 100%;
//     }
//   }

//   .slide img {
//     height: 100%;
//   }

//   .content {
//     position: absolute;
//     top: 23rem;
//     left: 5rem;
//     opacity: 0;
//     width: 50%;
//     padding: 3rem;
//     background: rgba(120, 120, 120, 0.7);
//     border-radius: 20px;
//     animation: slide-up 1s ease 0.5s;
//     animation-fill-mode: forwards;
//     /* visibility: hidden; */
//   }

//   @keyframes slide-up {
//     0% {
//       visibility: visible;
//       top: 23rem;
//     }
//     100% {
//       visibility: visible;
//       top: 12rem;
//     }
//   }

//   @media (max-width: 700px) {
//     .content {
//       width: 80%;
//       left: 3rem;
//       margin: 0 auto;
//     }
//   }

//   .content > * {
//     color: #fff;
//     margin-bottom: 1rem;
//   }

//   .current {
//     opacity: 1;
//     transform: translateX(0);
//   }

//   .current .content {
//     opacity: 1;
//   }

//   .arrow {
//     border: 2px;
//     border-radius: 50%;
//     background: transparent;
//     top: 45%;
//     color: #fff;
//     width: 2rem;
//     height: 2rem;
//     cursor: pointer;
//     position: absolute;
//     z-index: 10;
//   }

//   .arrow:hover {
//     background: #fff;
//     color: #777;
//   }
//   .next {
//     right: 0.5rem;
//   }
//   .prev {
//     left: 0.5rem;
//   }

//   hr {
//     height: 1px;
//     background: #fff;
//     width: 50%;
//   }
// `;

// export default Hero;
