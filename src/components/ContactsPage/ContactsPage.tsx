import React from 'react';
import ContactsInteractive from './partials/ContactsInteractive';
import ContactsIntro from './partials/ContactsIntro';

import './ContactsPage.scss';

const ContactsPage = () => {
    return (
        <div className="Contacts-page">
            <ContactsIntro />
            <ContactsInteractive />
        </div>
    );
};

export default ContactsPage;
