import React from 'react';
import PropTypes from 'prop-types';

const Navbar = (props) => {
  const { githubIcon, title } = props;
  return (
    <nav className='navbar bg-primary'>
      <h1>
        <i className={githubIcon} /> {title}
      </h1>
    </nav>
  );
};

Navbar.defaultProps = {
  title: 'Github Finder',
  githubIcon: 'fab fa-github',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  githubIcon: PropTypes.string.isRequired,
};

export default Navbar;
