import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Column = props => {
  let {
    children
  } = props;

  return (
  <div className="gh column">
    { children }
  </div>
  );
}

Column.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Column;
