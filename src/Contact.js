import React from "react";
import "./Contact.css";
import { useState } from "react";
import MessageIcon from "@material-ui/icons/Message";
import contact_us_image from "./contact_us_page.jpg";
import SendIcon from "@material-ui/icons/Send";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import PhoneAndroidIcon from "@material-ui/icons/PhoneAndroid";
import EmailIcon from "@material-ui/icons/Email";
import FacebookIcon from "@material-ui/icons/Facebook";
import WhatsAppIcon from "@material-ui/icons/WhatsApp";
import InstagramIcon from "@material-ui/icons/Instagram";
import Nav from "./Nav";
import Footer from "./Footer";
import { db, firebase } from "./firebase/config";

function Contact() {
  const [input_values, set_input_Values] = useState({
    full_name: "",
    email: "",
    phone: "",
    company_name: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    set_input_Values({
      ...input_values,
      [name]: value,
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      await db.collection("contacts").add({
        ...input_values,
        dateCollected: firebase.firestore.FieldValue.serverTimestamp(),
      });
      alert("Message has been submitted !");
      set_input_Values({
        full_name: "",
        email: "",
        phone: "",
        company_name: "",
        message: "",
      });
    } catch (e) {
      console.log(e);
      alert("Error in sending message. Please try after sometime.");
    }
    setLoading(false);
  };
  return (
    <div>
      <Nav />
      <div className="contact_page">
        <div className="contact_page_container1">
          <img className="contact_us_img" src={contact_us_image} alt="" />
          <div className="contact_page_container1_title">CONTACT US.</div>
          <div className="contact_page_container1_description">
            Just message us without any hesitation and we will contact you soon
            .
          </div>
        </div>
        <div className="contact_page_container2">
          <div className="contact_page_container2_left">
            <span className="contact_page_container2_left_title">
              <span className="text">Send us a message</span>
              <span className="icon">
                <MessageIcon />
              </span>
            </span>

            <form action="" onSubmit={handleSubmit}>
              <div className="only_inputfields">
                <div className="form__full_name">
                  <input
                    type="text"
                    name="full_name"
                    id="full_name"
                    placeholder="Enter name"
                    value={input_values.full_name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form__email">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Enter email"
                    value={input_values.email}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form__phone">
                  <input
                    type="number"
                    name="phone"
                    id="phone"
                    placeholder="Enter phone"
                    value={input_values.phone}
                    onChange={handleInputChange}
                    required
                  />
                </div>
                <div className="form__company_name">
                  <input
                    type="text"
                    name="company_name"
                    id="company_name"
                    placeholder="Enter company name"
                    value={input_values.company_name}
                    onChange={handleInputChange}
                  />
                </div>
              </div>
              <div className="form__msg">
                <span className="label_message">Write your message</span>
                <textarea
                  name="message"
                  value={input_values.message}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                onSubmit={handleSubmit}
                className="contact_us_button"
                disabled={loading}
              >
                Send us Message
                <span className="send_icon">
                  <SendIcon />
                </span>
              </button>
            </form>
          </div>
          <div className="contact_page_container2_right">
            <span className="container2__right_1">Contact Information</span>
            <span className="container2__right_2">
              <span className="con_icon">
                <LocationOnIcon />
              </span>{" "}
              G-21 Dmall , Indirapuram Ghaziabad , Uttar Pradesh 201014
            </span>
            <span className="container2__right_2">
              <span className="con_icon">
                <PhoneAndroidIcon />
              </span>{" "}
              +91 7042452911
            </span>
            <span className="container2__right_2">
              <span className="con_icon">
                <EmailIcon />
              </span>{" "}
              rahulprojects12@gmail.com
            </span>
            <span className="container2__right_3">
              <div className="con_icon_wt">
                <a href="https://wa.me/7042452911">
                  <WhatsAppIcon className="con_icon_wt_icon" />
                </a>
              </div>
              <div className="con_icon_ig">
                <a href="https://instagram.com/rahulprojects1?igshid=155jpgm16r9v5">
                  <InstagramIcon className="con_icon_ig_icon" />
                </a>
              </div>
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;
