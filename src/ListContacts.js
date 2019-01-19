import React from 'react';

class ListContacts extends React.Component {
  render() {
    console.log(this.props.contacts);
    return (
      <ol className="ListContacts">

      </ol>
    );
  }
}

export default ListContacts;
