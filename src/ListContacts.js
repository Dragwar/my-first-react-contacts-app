import React from 'react';
import PropTypes from 'prop-types';

function ListContacts(props) {
  return (
    <ol id="ListContacts" className="contact-list">
      {
        props.contacts.map(contact => (
          <li key={contact.id} className="contact-list-item" id={contact.id + "-contact"}>
            <div
              className="contact-avatar"
              style={{
                backgroundImage: `url(${contact.avatarURL})`
              }}></div>
            <div className="contact-details">
              <p className="contact-name">{contact.name}</p>
              <p className="contact-handle">@{contact.handle}</p>
            </div>
            <button className="contact-remove" onClick={() => props.removeContact(contact)}>Remove</button>
          </li>
        ))
      }
    </ol>
  );
};

ListContacts.propTypes = {
  contacts: PropTypes.array.isRequired,
  removeContact: PropTypes.func.isRequired,
};

export default ListContacts;
