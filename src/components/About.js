import React from 'react';
import { useHistory } from 'react-router-dom';

const About = (props) => {
  const history = useHistory();

  const handleClick = () => {
    history.push('/contact/Japan/Tokyo');
  };

  return (
    <React.Fragment>
      <h3>About Component</h3>
      <button className='btn btn-primary' onClick={handleClick}>
        Go to Home
      </button>
    </React.Fragment>
  );
};

export default About;
