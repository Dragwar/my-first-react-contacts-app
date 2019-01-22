import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  state = {
    query: "",
  }

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired,
  };

  updateQuery = (query) => {
    this.setState((prevState) => ({
      query: query.trim()
    }));
  }

  render() {
    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={this.state.query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        <ol id="ListContacts" className="contact-list">
          {
            this.props.contacts.map(contact => (
              <li
                key={contact.id}
                className="contact-list-item"
                id={contact.id + "-contact"}>
                <div
                  className="contact-avatar"
                  style={{
                    backgroundImage: `url(${contact.avatarURL})`
                  }}
                ></div>
                <div className="contact-details">
                  <p className="contact-name">{contact.name}</p>
                  <p className="contact-handle">@{contact.handle}</p>
                </div>
                <button
                  className="contact-remove"
                  onClick={() => this.props.removeContact(contact)}>Remove</button>
              </li>
            ))
          }
        </ol>
      </div>
    );
  }
};


export default ListContacts;
