import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const Panel = props => {
  let {
    children
  } = props;

  return (
    <div className="gh panel">
      { children }
    </div>
  );
}

Panel.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default Panel;
