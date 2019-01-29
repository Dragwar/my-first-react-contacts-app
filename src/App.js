import React, { Component } from 'react';
import ListContacts from './ListContacts';
import CreateContact from './CreateContact';
import { Route } from 'react-router-dom';
import * as ContactsAPI from './utils/ContactsAPI';

class App extends Component {
  state = {
    contacts: [
      {
        "id": "michael",
        "name": "Michael Jackson",
        "handle": "michael_jackson",
        "avatarURL": "./michael.jpg"
      },
      {
        "id": "ryan",
        "name": "Ryan Florence",
        "handle": "ryanflorence",
        "avatarURL": "./ryan.jpg"
      },
      {
        "id": "tyler",
        "name": "Tyler McGinnis",
        "handle": "tylermcginnis",
        "avatarURL": "./tyler.jpg"
      }
    ],
  };

  componentDidMount() {
    ContactsAPI.getAll()
      .then(allContacts => this.setState(currentState => ({
        contacts: allContacts,
      })))
      .catch(console.warn);
  };

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(cont => cont.id !== contact.id),
    }));
    ContactsAPI.remove(contact)
      .catch(console.warn);
  };

  CreateContact = contact => {
    ContactsAPI.create(contact)
      .then(contact => this.setState(currentState => ({
        contacts: [contact, ...currentState.contacts],
      })))
      .catch(console.warn);
  };

  render() {
    return (
      <div className="App">
        <Route exact path="/" render={() => (
          <ListContacts
            contacts={this.state.contacts}
            removeContact={this.removeContact}
          />
        )} />
        <Route exact path="/create" render={() =>
          <CreateContact
            onCreateContact={contact => this.CreateContact(contact)}
          />
        } />
      </div>
    );
  };
};

export default App;
