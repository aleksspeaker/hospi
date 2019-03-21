import React from 'react';

import '../../Home/screens/TextContainer.scss';
import './ContactsIntro.scss';

const ContactsIntro = () => {
  return (
    <header className="Contacts-intro">
      <h1 className="Contacts-intro__title">Contact Us.</h1>
      <div className="Contacts-intro__illustration">
        <img
          src="https://res.cloudinary.com/dops-digital/image/upload/v1552994363/Hospitality%20Hub/contacts.svg"
          alt="Contact us"
        />
      </div>
      <div className="Contacts-intro__terms-links Terms-links">
        <a className="Terms-links__link" href="/">
          Terms & Conditions
        </a>
        <a className="Terms-links__link" href="/">
          Privacy Policy
        </a>
      </div>
    </header>
  );
};

export default ContactsIntro;
