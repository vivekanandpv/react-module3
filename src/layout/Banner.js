import React from 'react';
import { Link } from 'react-router-dom';

const Banner = (props) => {
  return (
    <React.Fragment>
      <div className='jumbotron'>
        <div className='container'>
          <h1 className='display-3'>Hello, world!</h1>
          <p>
            This is a template for a simple marketing or informational website.
            It includes a large callout called a jumbotron and three supporting
            pieces of content. Use it as a starting point to create something
            more unique.
          </p>

          <p>
            <a className='btn btn-primary btn-lg' href='#' role='button'>
              Learn more &raquo;
            </a>
          </p>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Banner;
