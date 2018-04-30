import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PanelHeader = props => {
  let {
    children
  } = props;

  return (
    <div className="gh gh-panel-header">
      { children }
    </div>
  );
}

PanelHeader.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default PanelHeader;
