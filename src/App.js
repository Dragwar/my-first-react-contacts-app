import React, { Component } from 'react';
import ListContacts from './ListContacts';
import * as ContactsAPI from './utils/ContactsAPI'

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
        contacts: allContacts
      })))
      .catch(console.warn);
  }

  removeContact = contact => {
    this.setState(currentState => ({
      contacts: currentState.contacts.filter(cont => cont.id !== contact.id)
    }));
    ContactsAPI.remove(contact)
      .catch(console.warn);
  };

  render() {
    return (
      <div className="App">
        <ListContacts
          contacts={this.state.contacts}
          removeContact={this.removeContact}
        />
      </div>
    );
  };
};

export default App;
