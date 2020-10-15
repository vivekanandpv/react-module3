import React, { useState } from 'react';
import axios from 'axios';
import Table from './Table';
import { httpClient } from '../utils/axios-instance';

const AxiosPlayground = (props) => {
  const [rows, setRows] = useState([]);
  const handleClick = () => {
    console.log('Before');
    httpClient
      .get('todos')
      .then((response) => {
        setRows(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
    console.log('After');
  };

  const handleSubmit = () => {
    //collate information, validation
    const formData = {
      name: 'Vivek',
      city: 'Bengaluru',
    };

    httpClient
      .post('todos', formData)
      .then((response) => {
        console.log('Serer says', response);
      })
      .catch((error) => {
        console.error('Post Error', error);
      });
  };

  const handleDelete = (id) => {
    httpClient
      .delete(`todos/${id}`)
      .then((response) => {
        console.log('Serer says', response);
      })
      .catch((error) => {
        console.error('Post Error', error);
      });
  };

  return (
    <React.Fragment>
      <h3>AxiosPlayground Component</h3>

      <hr />

      <button className='btn btn-primary' onClick={handleClick}>
        Get Data
      </button>

      <button className='btn btn-primary ml-3' onClick={handleSubmit}>
        Post Data
      </button>

      <button className='btn btn-primary ml-3' onClick={() => handleDelete(12)}>
        Delete Data
      </button>

      <hr />

      <Table rows={rows} />
    </React.Fragment>
  );
};

export default AxiosPlayground;
