import React from 'react';
import PropTypes from 'prop-types';

import styles from './styles.scss';

const PanelFooter = props => {
  let {
    children
  } = props;

  return (
    <div className="gh gh-panel-footer">
      { children }
    </div>
  );
}

PanelFooter.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node
  ])
};

export default PanelFooter;
