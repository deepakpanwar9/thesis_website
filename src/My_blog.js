import React, { useState, useEffect } from "react";
import Blog_slider from "./Blog_slider.js";
import "./My_blog.css";
import about_photo1 from "./about_photo1.jpg";
import about_photo2 from "./about_photo2.jpg";
import about_photo3 from "./about_photo3.jpg";
import about_photo4 from "./about_photo4.jpg";
import about_photo5 from "./about_photo5.jpg";
import about_photo6 from "./about_photo6.jpg";
import My_blogs_cards from "./My_blogs_cards";
import Nav from "./Nav";
import Footer from "./Footer";

import { db } from "./firebase/config";

function My_blog() {
  const [blogs, setBlogs] = useState();

  useEffect(() => {
    const fetchData = async () => {
      db.collection("thesis")
        .orderBy("dateCollected")
        .get()
        .then((querySnapshot) => {
          const result = [];
          querySnapshot.forEach((doc) => {
            result.push({
              ...doc.data(),
              id: doc.id,
            });
          });
          console.log(result);
          setBlogs(result);
        })
        .catch((e) => console.log(e));
    };

    fetchData();
  }, []);

  const Loading = () => {
    return (
      <div className="stateContainer" >
        <p>Loading...</p>
      </div>
    );
  };

  const ComingSoon = () => {
    return (
      <div className="stateContainer" >
        <p>Coming Soon ...</p>
      </div>
    );
  };

  return (
    <>
      <Nav />
      <div className="my_blog_container">
        <div className="my_blog_container1">
          <Blog_slider className="container1_background" />
        </div>
        <div className="blog_container2">
          <div className="blog_container2_inner">
            <span className="blog_container2_inner_title">
            RIGHT TO HEALTH
            </span>
            <span className="blog_container2_inner_content">
            The term 'health' is etymologically derived from the old word "Hal."
            The word English literally means "totality, completeness, sound or
            pleasant." The fullness of significance is therefore 'health' and
            'completeness of organization and physical perfection, fitness of
            life, freedom to act, work, vigor and freedom from all constraints
            and unholy corruption.' "Euexia," meaning to live in a critical and
            strong condition, is the word for health in ancient Greek language.
            </span>
            <button type="submit">Read More</button>
          </div>
        </div>
        <div className="my_blog_container3">
          <span className="blog_container3_title">My Articles</span>
          <div className="my_blog_container3_cards">
            {blogs ? (
              blogs.length > 0 ? (
                blogs.map((cur) => (
                  <My_blogs_cards
                    title={cur.title}
                    content={cur.description}
                    link={cur.downloadURL}
                  />
                ))
              ) : (
                <ComingSoon />
              )
            ) : (
              <Loading />
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default My_blog;
