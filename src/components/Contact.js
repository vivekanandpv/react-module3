import React from 'react';

const Contact = (props) => {
  return (
    <React.Fragment>
      <h3>Contact Component: City: {props.match.params.city}</h3>
    </React.Fragment>
  );
};

export default Contact;
