import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Row = props => {
  let {
    children
  } = props;

  return (
    <div className="gh gh-row">
      { children }
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Row;
