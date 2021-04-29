import React from "react";
import "./About.css";
import AboutCard from "./About_card";
import AboutValuesCard from "./About_values_card";
import AboutContainer1llus from "./about_container1_illus.svg";
import AboutContainer2llus from "./about_container2_illus.svg";
import AboutContainer3llus from "./about_container3_illus.svg";
import AboutContainer4llus from "./about_container4_illus.jpg";
import AboutContainer5llus from "./about_container5_illus.svg";
import AboutContainer6llus from "./about_container6_illus.svg";
import AboutValues1 from "./about_values1.svg";
import AboutValues2 from "./about_values2.svg";
import AboutValues3 from "./about_values3.svg";
import AboutValues4 from "./about_values4.svg";
import AboutValues5 from "./about_values5.svg";
import team1 from "./team1.jpeg";
import team2 from "./team2.jpeg";
import team3 from "./team3.jpeg";
import team4 from "./team4.webp";
import Nav from "./Nav";
import Footer from "./Footer";

function About() {
  return (
    <div>
      <Nav />
      <div className="about">
        <div className="about_conainers">
          <div className="about_container1">
            <div className="about_container1_left">
              <span className="title">Company Presentation </span>
              <span className="content">
                Our writing firm is a welcoming community where you are always
                welcome. Rahul projects and dissertations isn't just another
                writing service; it's an organization that has a unique approach
                to writing. Our mission is to make you stronger without causing
                you to become disoriented or tired. We will assist you in better
                understanding the subject and achieving a higher academic
                standard. Our experts will assist you in overcoming the
                challenges of academic writing. Order our online assistance and
                receive a fantastic document to use as an example. Find the help
                and resources you can rely on at any time.you can find us on
                various other platforms. In just dial we have more than 350
                reviews with overall more than 4.5 ratings{" "}
              </span>
            </div>
            <div className="about_container1_right">
              <img src={AboutContainer1llus} alt="" />
            </div>
          </div>

          <div className="about_container2">
            <div className="about_container2_left">
              <img src={AboutContainer2llus} alt="" />
            </div>
            <div className="about_container2_right">
              <span className="title">Our Features</span>
              <span className="content">
                With your writing assignments, we provide fast and high-quality
                assistance. Every day, our authors improve their writing
                abilities. As a result, they can handle any kind of thesis,
                research paper, or term paper. Please do not hesitate to email
                us so that we can get to work right away.{" "}
              </span>
              <span className="content">
                We strive to improve your performance, knowledge, and
                constructive feedback. Our experts are able to help you with
                your issues and provide you with specific advice. We want you to
                have a good time working with us, so please let us know if you
                have any suggestions. Our team is working nonstop to make Rahul
                projects and dissertations more user-friendly.{" "}
              </span>
            </div>
          </div>

          <div className="about_container3">
            <div className="about_container3_left">
              <span className="title">What makes us unique? </span>
              <span className="content">
                We are not in the business of chasing money and fame, as many
                other businesses are. Instead, we provide high-quality academic
                writing assistance and fast online support. When you work with
                us, you'll notice a shift in your experience and attitude toward
                studying. We not only assist you with a specific homework
                assignment, but we also help you become more resilient and
                versatile. You will discover the best method for achieving
                academic success.{" "}
              </span>
            </div>
            <div className="about_container3_right">
              <img src={AboutContainer3llus} alt="" />
            </div>
          </div>

          <div className="about_container4">
            <div className="about_container4_left">
              <img src={AboutContainer4llus} alt="" />
            </div>
            <div className="about_container4_right">
              <span className="title">The mission of our company </span>
              <span className="content">
                We want every student to enjoy learning rather than dread it
                because they have a ton of work. Our goal is to help you set
                goals so that learning is enjoyable and pleasant for you. Many
                young people lament the difficulty of learning and the prospects
                for success that they wish they had. However, you will not have
                to suffer through the study process because we will make it
                enjoyable for you.
              </span>
              <span className="content">
                We can show you how to study quicker and more productively if
                you can't keep up with a large number of assignments. Our goal
                is to allow you to push the boundaries of your abilities and go
                beyond them.{" "}
              </span>
              <span className="content">
                That is how you can excel in not only college but in all aspects
                of life. You are welcome to seek advice or express your concerns
                about studying at Rahul projects and dissertation . We'll assist
                you in determining the best way to put your abilities and
                talents to use.{" "}
              </span>
            </div>
          </div>

          <div className="about_container5">
            <div className="about_container5_left">
              <span className="title">What writing services we provide</span>
              <span className="content">
                We provide expert academic writing assistance with any form of
                research. You can depend on our assistance if you are a high
                school, college, or university student. Our writers have
                experience with a wide range of essays, term papers, and article
                reviews. The Rahul projects and dissertation team is made up of
                authors and editors who work together to complete the report
                from start to finish. Each researcher has a Master's degree and
                at least five years of experience as a writer.
              </span>
              <span className="content">
                Never doubt our ability to assist you in improving your grades
                and academic results. We are accountable for the programs we
                provide. As a result, you will receive high-quality assistance
                and prompt online help. With Rahul projects and dissertation ,
                you'll have the chance to enjoy learning.
              </span>
            </div>
            <div className="about_container5_right">
              <img src={AboutContainer5llus} alt="" />
            </div>
          </div>

          <div className="about_container6">
            <div className="about_container6_left">
              <img src={AboutContainer6llus} alt="" />
            </div>
            <div className="about_container6_right">
              <span className="title">Fundamental values of our company</span>
              <span className="content">
                We wanted to form a company to bring together like-minded people
                who want to support students with their academic issues.
                workforce consists of more than just workers. They are writing
                professionals and compassionate individuals who are eager to
                assist.{" "}
              </span>
              <span className="content">
                Our team holds the ideals we've developed over the years in the
                workplace in high regard. We do not want to burden you, so there
                are fundamental values:{" "}
              </span>
            </div>
          </div>

          <div className="about_values">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="svg_about"
            >
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,128L30,106.7C60,85,120,43,180,69.3C240,96,300,192,360,208C420,224,480,160,540,160C600,160,660,224,720,224C780,224,840,160,900,160C960,160,1020,224,1080,234.7C1140,245,1200,203,1260,192C1320,181,1380,203,1410,213.3L1440,224L1440,0L1410,0C1380,0,1320,0,1260,0C1200,0,1140,0,1080,0C1020,0,960,0,900,0C840,0,780,0,720,0C660,0,600,0,540,0C480,0,420,0,360,0C300,0,240,0,180,0C120,0,60,0,30,0L0,0Z"
              ></path>
            </svg>
            {/* <span className="about_values_title">
            Our Fundamantal values are :-{" "}
          </span> */}
            <div className="about_values_cards">
              <AboutValuesCard
                image={AboutValues1}
                Title="Continuous improvement and development"
                content="Our experts are working around the clock to improve the site's usability and security. Clients are encouraged to provide input on the quality of our services. We determine which areas of work need change by reviewing their evaluations."
              />
              <AboutValuesCard
                image={AboutValues2}
                Title="Respect for customers"
                content="Regardless of the authors' challenges, they must not be disrespectful. The conditions we must meet are the desires and needs of the client. We instill in our workers the importance of treating each customer with respect. It will ensure that you are happy with the service. "
              />
              <AboutValuesCard
                image={AboutValues3}
                Title="Implementation of new technologies "
                content="It will ensure that you are happy with the service.  . We review your suggestions and implement new innovations to make the website more user-friendly. We want you to be able to use our service quickly and easily."
              />
              <AboutValuesCard
                image={AboutValues4}
                Title="Constant assistance"
                content="We understand how easy it is to get disoriented when you have no one to rely on. At Rahul projects and dissertation, we pay close attention to each and every one of our customers. Our customer service team is available 24 hours a day, 7 days a week to answer your questions and concerns. You can rely on fast online assistance whenever you need it. "
              />
              <AboutValuesCard
                image={AboutValues5}
                Title="Synergy"
                content="Our group of like-minded individuals shares the same inspiration and objectives. We are a big, friendly group with mutual respect. We establish trusting relationships among employees, which defines our client relationships. Purchase your writing assignment from a reputable company."
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1440 320"
              className="svg_about"
            >
              <path
                fill="#fff"
                fill-opacity="1"
                d="M0,128L30,106.7C60,85,120,43,180,69.3C240,96,300,192,360,208C420,224,480,160,540,160C600,160,660,224,720,224C780,224,840,160,900,160C960,160,1020,224,1080,234.7C1140,245,1200,203,1260,192C1320,181,1380,203,1410,213.3L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
              ></path>
            </svg>
          </div>
        </div>

        <div className="about_container15">
          <span className="my_team_profile">Our team</span>
          <div className="about_container15_cards">
            <AboutCard
              image={team1}
              title="(RAHUL) FOUNDER AND CEO"
              content="MBA IN MARKETING AND HR , FROM GAUTAM BUDDHA UNIVERSITY"
            />
            <AboutCard
              image={team2}
              title="Manika garg"
              content="Research scholar , Bio chemistry , Jamia hamdard"
            />
             <AboutCard
              image={team3}
              title="Mohit Khari"
              content="M tech , Food Processing and Technology ,Gautam Buddha University"
            />
             <AboutCard
              image={team4}
              title="Kratika Yadav"
              content="Research scholar , Management"
            />
      
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
