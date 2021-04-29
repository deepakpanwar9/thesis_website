import React from "react";
import "./My_blogs_cards.css";

function My_blogs_cards({ content, title, link }) {
  return (
    <div className="my_blog_card">
      <h3 className="my_blog_card__title" >{title}</h3>
      <div className="my_blog_card__content">{content}</div>
      <div className="my_blog_card_button">
        <a href={link} target="_blank">
          <button type="submit">Read More</button>
        </a>
      </div>
    </div>
  );
}

export default My_blogs_cards;
