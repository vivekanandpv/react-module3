import React, { useState } from 'react';
import axios from 'axios';
import Table from './Table';

const AxiosPlayground = (props) => {
  const [rows, setRows] = useState([]);
  const handleClick = () => {
    console.log('Before');
    axios
      .get('https://jsonplaceholder.typicode.com/todos')
      .then((response) => {
        setRows(response.data);
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

      <hr />

      <Table rows={rows} />
    </React.Fragment>
  );
};

export default AxiosPlayground;
