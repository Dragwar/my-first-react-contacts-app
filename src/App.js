import React, { Component } from 'react';
import ListContacts from './ListContacts';

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
  }
  render() {
    return (
      <div className="App">
        <ListContacts contacts={this.state.contacts} />
      </div>
    );
  }
}

export default App;
