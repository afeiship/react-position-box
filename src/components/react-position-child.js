import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';


const DEFAULT_DIRECTIONS = [
  'top', 'right', 'bottom', 'left', 'center',
  'tl', 'tr', 'bl', 'br'
];

export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    direction: PropTypes.oneOf(DEFAULT_DIRECTIONS),
  };

  static defaultProps = {
  };
  /*===properties end===*/

  render() {
    const { className, direction, ...props } = this.props;
    return (
      <span data-direction={direction} className={classNames('react-position-child', className)} {...props} />
    );
  }
}
