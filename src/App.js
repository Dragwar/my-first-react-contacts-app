import React, { Component } from 'react';
import ListContacts from './ListContacts';

const contacts = [
  {
    "id": "karen",
    "name": "Karen Isgrigg",
    "handle": "karen_isgrigg",
    "avatarURL": "./michael.jpg"
  },
  {
    "id": "richard",
    "name": "Richard Kalehoff",
    "handle": "richardkalehoff",
    "avatarURL": "./ryan.jpg"
  },
  {
    "id": "tyler",
    "name": "Tyler McGinnis",
    "handle": "tylermcginnis",
    "avatarURL": "./tyler.jpg"
  }
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <ListContacts contacts={contacts} />
      </div>
    );
  }
}

export default App;
