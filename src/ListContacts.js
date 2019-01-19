import React from 'react';

class ListContacts extends React.Component {
  render() {
    return (
      <ol className="ListContacts">
        {
          this.props.contacts.map(contact => (
            <li key={contact.id} id={contact.id + "-contact"}>
              {contact.name}
            </li>
          ))
        }
      </ol>
    );
  }
}

export default ListContacts;
