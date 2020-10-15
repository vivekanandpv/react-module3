import React from 'react';

const Contact = (props) => {
  return (
    <React.Fragment>
      <h3>Contact Component</h3>
      <p>Country: {props.match.params.country}</p>
      <p>City: {props.match.params.city}</p>
    </React.Fragment>
  );
};

export default Contact;
