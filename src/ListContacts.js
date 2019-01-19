import React from 'react';

class ListContacts extends React.Component {
  render() {
    return (
      <ol id="ListContacts" className="contact-list">
        {
          this.props.contacts.map(contact => (
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
              <button className="contact-remove">Remove</button>
            </li>
          ))
        }
      </ol>
    );
  }
}

export default ListContacts;
