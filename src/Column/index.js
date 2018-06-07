import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const Column = props => {
  let {
    children
  } = props;

  return (
    <div
      className={classnames(
        "gh gh-column",
        props.className
      )}
      style={props.style}
    >
    { children }
  </div>
  );
}

Column.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
};

Column.defaultProps = {
  children: null,
  style: {},
  className: ''
};

export default Column;
