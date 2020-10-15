import React from 'react';

const MainContent = (props) => {
  return (
    <React.Fragment>
      <div className='container'>
        {props.children}
        <hr />
      </div>
    </React.Fragment>
  );
};

export default MainContent;
