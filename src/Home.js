import React, { useEffect, useState } from "react";
import "./Home.css";
import FacebookIcon from "@material-ui/icons/Facebook";
import Button from "@material-ui/core/Button";
import My_blog from "./My_blog.js";
import Home__form from "./Home__form.js";
import Home_card from "./Home_card.js";
import Order_process_card from "./Order_process_card.js";
import Service_card from "./Service_card.js";
import Carousel from "react-elastic-carousel";
import ReactDOM from "react-dom";
import Item_for_review from "./Item_for_review.js";
import RateReviewIcon from "@material-ui/icons/RateReview";
import about_photo1 from "./about_photo1.jpg";
import about_photo2 from "./about_photo2.jpg";
import about_photo3 from "./about_photo3.jpg";
import about_photo4 from "./about_photo4.jpg";
import about_photo5 from "./about_photo5.jpg";
import about_photo6 from "./about_photo6.jpg";
import services1 from "./services1.png";
import services2 from "./services2.png";
import services3 from "./services3.png";
import services4 from "./services4.png";
import order1 from "./order1.svg";
import order2 from "./order2.jpg";
import order3 from "./order3.svg";
import order4 from "./order4.svg";
import just_dial from "./just_dial.svg";
import JD_ratings1 from "./JD_ratings1.png";
import JD_ratings2 from "./JD_ratings2.png";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import arrow from "./arrow_png.png";
import company_logo from "./company_logo.png";
import home_cont3 from "./home_cont_3.svg";
import name1 from "./name1.png";
import { Link } from "@material-ui/core";
import Nav from "./Nav.js";
import Footer from "./Footer";
// import { Carousel } from "bootstrap";
import { db } from "./firebase/config";
function Home() {
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

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 1200, itemsToShow: 2 },
    { width: 1700, itemsToShow: 3 },
    { width: 2000, itemsToShow: 4 },
  ];

  const Loading = () => {
    return (
      <div className="stateContainer">
        <p>Loading...</p>
      </div>
    );
  };

  const ComingSoon = () => {
    return (
      <div className="stateContainer">
        <p>Coming Soon ...</p>
      </div>
    );
  };

  return (
    <div>
      <Nav />
      <div className="home">
        <div className="svg_container_back">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="30rem"
            preserveAspectRatio="xMinYMin meet"
            className="s_v_g"
            viewBox="0 0 765 290"
          >
            <path
              fill="#fcce98"
              fill-opacity="1"
              d="M0,288L1440,32L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
        <div className="home__container1">
          <div className="home__container1_left_text">
            <img src={company_logo} alt="" id="compa_logo" />
            <img src={JD_ratings1} alt="" id="comp_review" />
            <img src={JD_ratings2} alt="" id="comp_review2" />
          </div>

          <div className="home__container1_middle">
            <img src={home_cont3} alt="" id="home_middle_image" />
            <span className="home__title_down">
              WANT TO MAKE YOUR DISSERTATION WITH PLAGRIASM FREE CONTENT
            </span>
          </div>

          <div className="home__container1_right ">
            <div className="home__container1_right_option whats_app">
              <a href="https://wa.me/7042452911">
                <WhatsAppIcon className="right_option_icon whats_app_icon" />
              </a>
            </div>
            <div className="home__container1_right_option Instagram">
              <a href="https://instagram.com/rahulprojects1?igshid=155jpgm16r9v5">
                <InstagramIcon className="right_option_icon Instagram_icon" />
              </a>
            </div>

            <div className="home__container1_right_option review">
              <a href="https://www.jdmart.com/Delhi/Rahul-Projects-and-Dissertations/011PXX11-XX11-190207164726-W9U8_BZDET/catalogue">
                <RateReviewIcon className="right_option_icon review_icon" />
              </a>
            </div>
          </div>
        </div>

        <div className="services_container">
          <div className="service_title">OUR Services</div>
          <div className="service_card">
            <Service_card title="Thesis Writing" image={services1} />
            <Service_card title="Dissertation Book" image={services2} />
            <Service_card
              title="Movie Review / Critical Thinking"
              image={services3}
            />
            <Service_card
              title="Review Report Editing and proofreading"
              image={services4}
            />
          </div>
        </div>

        <div className="home__container2">
          <div className="home__container2_photos">
            <img
              src={about_photo1}
              alt="no idea"
              className="container2_photos"
            />
            <img
              src={about_photo2}
              alt="no idea"
              className="container2_photos"
            />
            <img
              src={about_photo3}
              alt="no idea"
              className="container2_photos"
            />
            <img
              src={about_photo4}
              alt="no idea"
              className="container2_photos"
            />
          </div>

          <div className="home__container2_about">
            <span className="about__text">About</span>
            <span className="about__text_under">
              Rahuls Project consists of a group of experts in the field of
              academic writing, editing, and proofreading .
            </span>
            <span className="home__container2_content">
              Our writing firm is a welcoming community where you are always
              welcome. Rahul projects and dissertations isn't just another
              writing service; it's an organization that has a unique approach
              to writing. Our mission is to make you stronger without causing
              you to become disoriented or tired. We will assist you in better
              understanding the subject and achieving a higher academic
              standard. Our experts will assist you in overcoming the challenges
              of academic writing. Order our online assistance and receive a
              fantastic document to use as an example. Find the help and
              resources you can rely on at any time.you can find us on various
              other platforms. In just dial we have more than 350 reviews with
              overall more than 4.5 ratings
              <div className="container3_right_content_button">
                <Button variant="outlined" color="primary">
                  <a href="./About">Read More</a>
                </Button>
              </div>
            </span>
          </div>
        </div>

        <div className="home__container3">
          <div className="home__container3_left">
            {blogs ? (
              blogs.length > 0 ? (
                blogs
                  .slice(0, 6)
                  .map((cur) => (
                    <Home_card
                      className="home_card"
                      top="Lorem, ipsum."
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

          <div className="home__container3_right">
            <div className="container3_right_container">
              <div className="container3_right_title">My best blog</div>
              <div className="container3_right_content">
                In our daily lives, we all encounter Intellectual property in
                one form or another. From the moment one wakes up till bedtime,
                this intangible property in its various forms is all around us.
                The first cup of tea or coffee in the morning is consumed
                because something about the product appealed to the consumer.
                Perhaps there was a brand recall (trade marks) which warranted
                that the particular beverage from the particular manufacturer
                only be purchased for consumption.
              </div>
              <div className="container3_right_content_button">
                <Button variant="outlined" color="primary" id="button_my_blog">
                  <a href="./Myblog">Learn More</a>
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="order_process">
          <div className="order_process_title">Ordering Process</div>
          <div className="order_process_cards_list">
            <Order_process_card
              title="Fill in the application"
              image={order1}
              content="The order process starts with the form, where you need to specify the type of research, guidelines, academic level, and deadline. Send  out  as more detailed and accurate as you can.
   If we need more details about the work you need, we will contact you"
            />
            <img src={arrow} alt="" className="order_process_arrow" />
            <Order_process_card
              title="Assistance with writers about the work"
              image={order2}
              content="We will connect you with the writers of your subjects to get your research purpose and discuss doubts or any special requirement you want you can discuss"
            />
            <img src={arrow} alt="" className="order_process_arrow" />
            <Order_process_card
              title="Easy pricing process"
              image={order3}
              content="Once you discuss  the details with the writer and get fully satisfied then we will give you the quotation after few minutes.
   Our process of chapter wise payment will get you more trust in us and will be updated about your work and can give us changes in meantime."
            />
            <img src={arrow} alt="" className="order_process_arrow" />
            <Order_process_card
              title="Order completed"
              image={order4}
              content="When the deadline comes, you will receive the completed research  with turn tin plagiarism report in your mailbox and to the personal account as well.
   Check and review the paper you get and if you have any question - let us know, we appreciate any feedback you give us"
            />
          </div>
          <Button variant="outlined" color="primary">
            <a href="./Contact">Order Now</a>
          </Button>
        </div>

        <div className="cus_title">Customer Review</div>
        <div className="review_slider">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 765 290">
            <path
              fill="#fcce98"
              fill-opacity="1"
              d="M0,192L1440,64L1440,0L0,0Z"
            ></path>
          </svg>
          <Carousel breakPoints={breakPoints} className="carousal_items">
            <Item_for_review
              image={about_photo1}
              review="I was bit hesitant at first to approach such an organization for research assistance, but it turned out to be of great help and they provided me with really good services.They were humble and assisted me throughout..!"
              name="Vdhu"
            />
            <Item_for_review
              image={about_photo2}
              review="I am glad to write here that Rahul Projects and Dissertations helped me a lot to provide me the best thesis for my Ph.d. I expressed my sincere attempt especially to Mr. Shubham Mishra and his team. I shall be highly obliged to this team. Keep on doing sir. Thank you once again. May you get stupendous success in your life."
              name="Jyoti Sharma"
            />
            <Item_for_review
              image={about_photo3}
              review="Great work done by them on time .nice behaviour ,best writing professional s"
              name="Karuna"
            />
            <Item_for_review
              image={about_photo4}
              review="Great work, delivered on time"
              name="Gajendra Chaudhary"
            />
          </Carousel>
        </div>

        <div className="review_container">
          <span className="title" id="title_rev">
            REVIEWS & RATINGS - RAHUL PROJECTS AND DISSERTATIONS
          </span>
          <div className="review_content">
            <div className="review_left">
              <span>
              OUR COMPANY IS ASSOCIATED WITH JUST DIAL FOR MORE THAN 3 YEARS AND BUILD A FAMILY OF CUSTOMERS THROUGH THEM . OUR CURRENT RATING IN JUST DIAL IS 4.8 WITH MORE THAN 350 REVIEWS HIGHEST IN OUR FILED .WE HAVE BUILD NETWORK OF STUDENTS FROM ALL OVER INDIA AND ABRAOD THROUGH JUST DIAL AND WILL CONTINUE FOREVER .RIGHT NOW WE ARE CURRENTLY AVAILABLE IN DELHI NCR,CHANDIGARH, JAIPUR CLICK HERE TO SEE MORE :-
              </span>
            </div>
            <div className="review_right">
              <a href="https://www.jdmart.com/Delhi/Rahul-Projects-and-Dissertations/011PXX11-XX11-190207164726-W9U8_BZDET/catalogue">
                Click here{" "}
              </a>
            </div>
          </div>
        </div>

        {/* <div className="home__container5"> */}
          {/* <div className="home__container5_inside">
            <span className="home__container5_title">Register Yourself</span>
            <span className="home__container5_content">
              Sign up right now to get connected with us
            </span>
            <div className="home__container5_form">
              <Home__form />
            </div>
          </div> */}
        {/* </div> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;
