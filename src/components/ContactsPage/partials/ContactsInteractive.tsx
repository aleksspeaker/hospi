import React from 'react';

import mapIcon from './../../../../static/images/map-tag-icon.svg';
import ContactsForm from './ContactsForm';

import './ContactsInteractive.scss';

const ContactsInteractive = () => {
  return (
    <main className="Contacts-interactive">
      <div className="Contacts-interactive__form-area">
        <p>
          <span>
            Send us a message and <span>we'll get back to you in a flash.</span>
          </span>
        </p>
        <ContactsForm />
      </div>
      <div className="Contacts-interactive__visit-office Visit-office">
        <h2 className="Visit-office__title">Visit our office.</h2>
        <div className="Visit-office__secondary">
          <small>For all other inquiries: support@cordie.com</small>
          <span>
            Phone: <a href="tel:2064031395">206-403-1395</a>
          </span>
        </div>
        <p className="Visit-office__address">
          <a
            target="_blank"
            href="https://www.google.com.ua/maps/search/228+Dexter+Ave+N.+London,+UK+98109/@47.6199536,-122.3399112,16z"
          />
          <span>228 Dexter Ave N.</span>
          London, UK 98109
        </p>

        <div className="Visit-office__map-view-btn">
          <a
            target="_blank"
            href="https://www.google.com.ua/maps/search/228+Dexter+Ave+N.+London,+UK+98109/@47.6199536,-122.3399112,16z"
          />
          <img src={mapIcon} alt="map tag" />
          <span>VIEW ON MAP</span>
        </div>
      </div>
    </main>
  );
};

export default ContactsInteractive;
