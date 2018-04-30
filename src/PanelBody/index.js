import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PanelBody = props => {
  let {
    children,
    style
  } = props;

  return (
    <div className="gh gh-panel-body" style={style}>
      { children }
    </div>
  );
}

PanelBody.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ]),
  style: PropTypes.object
};

export default PanelBody;
