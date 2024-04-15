// REACT
import React from "react";

// REACT COMPONENTS
import { SearchForm } from "./SearchForm";

// FROM ASSETS
import hero from "../assets/svg/hero.svg";
import carpool from "../assets/svg/carpool.svg";

// STYLES
import "../styles/hero.scss";

export const Hero = () => {
  return (
    <>
      <div className="carpool-img">
        <img className="carpool-img" src={carpool} alt={carpool} />
      </div>

      <section className="hero-section">
        <h1 className="hero-heading">
          Поездки на ваш выбор по самым <br />
          низким ценам
        </h1>
        <div className="hero">
          <SearchForm isSearchPage={false} isHomePage={true} />
          <div className="hero-img">
            <img
              className="hero-svg"
              src={hero}
              alt="Two people travel by the car"
            />
          </div>
        </div>
      </section>
    </>
  );
};
