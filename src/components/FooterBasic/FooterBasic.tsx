import React from "react";
import ButtonEllipse from "../ButtonEllipse/ButtonEllipse";

import "./FooterBasic.scss";

export const FooterBasic = () => {
  return (
    <footer className="Footer-basic">
      <section className="Footer-basic__upper-block">
        <div className="Newsletter-sign-up">
          <h4>
            <span>Sign up</span>
            to newsletter.
          </h4>
          <form className="Newsletter-form">
            <input
              type="email"
              name="newsletter-email"
              placeholder="yourmail@domain.com"
            />
            <button
              className="Newsletter-form__submit"
              type="submit"
            >
              <ButtonEllipse
                text="subscribe"
                classes="Button-ellipse_orange arrow-white"
              />
            </button>
          </form>
        </div>
        <section className="Footer-links">
          <div className="Footer-links__list">
            <b>Company</b>
            <ul>
              <li>
                <a href="/">Story & Mission</a>
              </li>
              <li>
                <a href="/">Learners</a>
              </li>
              <li>
                <a href="/">Jobs</a>
              </li>
              <li>
                <a href="/">Contacts</a>
              </li>
            </ul>
          </div>
          <div className="Footer-links__list">
            <b>We provide</b>
            <ul>
              <li>
                <a href="/">For Companies</a>
              </li>
              <li>
                <a href="/">Consulting</a>
              </li>
              <li>
                <a href="/">Marketplace</a>
              </li>
              <li>
                <a href="/">Content Hub</a>
              </li>
            </ul>
          </div>
          <div className="Footer-links__list">
            <b>Partnership</b>
            <ul>
              <li>
                <a href="/">Course partnerships</a>
              </li>
              <li>
                <a href="/">Academic partnerships</a>
              </li>
            </ul>
          </div>
          <div className="Footer-links__list">
            <b>More</b>
            <ul>
              <li>
                <a href="/">FAQ & Support</a>
              </li>
              <li>
                <a href="/">Technology Requirements</a>
              </li>
              <li>
                <a href="/">Terms of Service</a>
              </li>
              <li>
                <a href="/">Privacy Policy</a>
              </li>
            </ul>
          </div>
        </section>
      </section>

      <section className="Footer-basic__lower-block">
        <span>&#9400; 2019 Hospitality Hub. All rights reserved.</span>
        <div>
          <a href="/">Privacy Policy</a>
          <a href="/">Terms and Conditions</a>
        </div>
        <small>
          Made by<a href="/">dops.digital</a>
        </small>
      </section>
    </footer>
  );
};
