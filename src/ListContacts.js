import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ListContacts extends Component {
  state = {
    query: "",
  };

  static propTypes = {
    contacts: PropTypes.array.isRequired,
    removeContact: PropTypes.func.isRequired,
  };

  updateQuery = (query) => {
    this.setState((prevState) => ({
      query: query.trim(),
    }));
  };

  clearQuery = () => {
    this.updateQuery('');
  }

  render() {
    const { query } = this.state;
    const { contacts, removeContact } = this.props;
    let showingContacts;

    if (query !== '') {
      showingContacts = contacts.filter((contact) => (
        contact.name.toLowerCase().includes(query.toLowerCase())
      ));
    } else {
      showingContacts = contacts;
    };

    return (
      <div className="list-contacts">
        <div className="list-contacts-top">
          <input
            className="search-contacts"
            type="text"
            placeholder="Search Contacts"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
          />
        </div>
        {
          showingContacts.length !== contacts.length && (
            <div className="showing-contacts">
              <span>
                Now Showing {showingContacts.length} of {contacts.length}
              </span>
              <button onClick={this.clearQuery}>Show all</button>
            </div>
          )
        }
        <ol id="ListContacts" className="contact-list">
          {
            showingContacts.map(contact => (
              <li
                key={contact.id}
                className="contact-list-item"
                id={contact.id + "-contact"}
              >
                <div
                  className="contact-avatar"
                  style={{
                    backgroundImage: `url(${contact.avatarURL})`
                  }}
                >
                </div>
                <div className="contact-details">
                  <p className="contact-name">{contact.name}</p>
                  <p className="contact-handle">@{contact.handle}</p>
                </div>
                <button
                  className="contact-remove"
                  onClick={() => removeContact(contact)}
                >
                  Remove
                </button>
              </li>
            ))
          }
        </ol>
      </div>
    );
  };
};


export default ListContacts;
