import './Style/ContactsView.css';

import React from 'react';

const ContactView = () => {
  return <div className='contact-container'>
    <div className='contact-details'>
    <h3 className='contact-title'>Contacts</h3>
    <div className='contact-body-container'>
      <p className='contact-admin-paragraph'>
        Urbán Eszter <br /> Email: admin@admin.hu
      </p>
      <p className='contact-admin-paragraph'>
        Iglódi Gergő <br /> Email: admin2@admin.hu
      </p>
      <p className='contact-admin-paragraph'>
        Derzsi Szabolcs <br /> Email: admin3@admin.hu
      </p>
      <p className='contact-admin-paragraph'>
        Oláh Ádám <br /> Email: admin4@admin.hu
      </p>
      <p className='contact-admin-paragraph'>
        Szőke Ákos <br /> Email: admin5@admin.hu
      </p>
      <p className='contact-admin-paragraph'>
        Szőnyi Ádám <br /> Email: admin6@admin.hu
      </p>
    </div>
    </div>
    </div>;
};
export default ContactView;
