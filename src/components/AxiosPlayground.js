import React from 'react';
import axios from 'axios';

const AxiosPlayground = (props) => {
  const handleClick = () => {
    console.log('Before');
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log('After');
  };

  return (
    <React.Fragment>
      <h3>AxiosPlayground Component</h3>

      <hr />

      <button className='btn btn-primary' onClick={handleClick}>
        Get Data
      </button>
    </React.Fragment>
  );
};

export default AxiosPlayground;
