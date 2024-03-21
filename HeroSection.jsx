import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">AI is Future</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">
            Artificial intelligence is based on the principle that human intelligence can be defined in a way that a machine can easily mimic it and execute tasks, from the most simple to those that are even more complex. </p>
          {/* <Button className="btn hireme-btn">
            <NavLink to="../Services"> Explore AI Models </NavLink>
          </Button> */}
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img " />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 9rem 0;
   background-color: light grey;
  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 26rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 1000;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    color: White;
    margin-top: 1.5rem;
    margin-bottom: 3.4rem;
    max-width: 60rem;
    font-weight : 700;
    font-size: 0.5 rem;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 90%;
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    .grid {
      gap: 7.2rem;
    }
  }
`;

export default HeroSection;
