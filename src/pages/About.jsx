import React from "react";
import "./About.css"
export const About = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-text">
          <h1>About PlotPalette</h1>
          <p>
            Welcome to PlotPalette, your gateway to the magical world of cinema. Our platform is dedicated to bringing movie enthusiasts closer to the films they love. We aim to provide detailed information about movies, including their plots, characters, themes, and the creative minds behind them. At PlotPalette, we celebrate the art of storytelling and the way it connects people across cultures and generations.
          </p>
          <p>
            Movies are more than just entertainment; they are reflections of society, windows into different cultures, and explorations of human emotions. PlotPalette strives to capture this essence by offering an in-depth look at every film we feature. Whether it's a timeless classic, an independent gem, or the latest blockbuster, we delve into the details that make each movie unique.
          </p>
          <p>
            Our mission is to make movie exploration enjoyable, engaging, and educational. PlotPalette goes beyond the basics of plot summaries to explore themes, symbolism, and the cultural significance of films. We want to inspire curiosity and foster a deeper appreciation for the medium of cinema.
          </p>
        </div>
        <div className="about-image">
          <img 
            src="./About.jpg" 
            alt="About PlotPalette" 
          />
        </div>
      </div>
    </section>
  );
};
