import React from "react";
import "./Home_card.css";

function Home_card({ top, title, content, link }) {
  return (
    <a href={link} target="_blank" className="home_card">
      {/* <div className="home_card__top">{top}</div> */}
      <p className="home_card__title">{title}</p>
      <p className="home_card__content">{content}</p>
    </a>
  );
}

export default Home_card;
