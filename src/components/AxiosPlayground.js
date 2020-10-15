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

  const handleSubmit = () => {
    //collate information, validation
    const formData = {
      name: 'Vivek',
      city: 'Bengaluru',
    };

    axios
      .post('https://jsonplaceholder.typicode.com/todos/145', formData)
      .then((response) => {
        console.log('Serer says', response);
      })
      .catch((error) => {
        console.error('Post Error', error);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
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
