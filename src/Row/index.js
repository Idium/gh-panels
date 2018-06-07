import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import styles from './styles.scss';

const Row = props => {
  let {
    children
  } = props;

  return (
    <div
      className={classnames(
        "gh gh-row",
        props.className
      )}
      style={props.style}
    >
      { children }
    </div>
  );
}

Row.propTypes = {
  children: PropTypes.node,
  style: PropTypes.object,
  className: PropTypes.string
};

Row.defaultProps = {
  children: null,
  style: {},
  className: ''
};

export default Row;
