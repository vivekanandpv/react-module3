import React from 'react';

const Table = (props) => {
  return (
    <table className='table'>
      <thead>
        <tr>
          <th scope='col'>Id</th>
          <th scope='col'>Title</th>
          <th scope='col'>Completed</th>
        </tr>
      </thead>
      <tbody>
        {props.rows.map((r) => {
          return (
            <tr key={r.id}>
              <th scope='row'>{r.id}</th>
              <td>{r.title}</td>
              <td>{r.completed ? 'YES' : 'NO'}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default Table;
