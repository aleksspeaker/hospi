import React from 'react';
import ButtonEllipse from '../../ButtonEllipse/ButtonEllipse';

import './ContactsForm.scss';

const ContactsForm = () => {
    return (
        <form className="Contacts-form" id="Contact-us">
            <div className="Contacts-form__name">
                <input placeholder="Name" type="text" />
            </div>
            <div className="Contacts-form__mail">
                <input placeholder="E-mail" type="email" />
            </div>
            <div className="Contacts-form__comment">
                <textarea id="comment" rows={6} required={true} />
                <label htmlFor="comment">Comment</label>
            </div>
            <div className="Contacts-form__agree">
                <input type="checkbox" id="agree" />
                <label htmlFor="agree">
                    Accept{' '}
                    <a className="terms-and-conditions" href="/">
                        Terms & Conditions
                    </a>
                </label>
                <button type="submit" className="Contacts-form__agree-btn">
                    <ButtonEllipse
                        routeTo="#"
                        text="send"
                        classes="Button-ellipse_orange arrow-white"
                    />
                </button>
            </div>
        </form>
    );
};

export default ContactsForm;
