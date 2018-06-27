import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const DEFAULT_POSITION = [
  'relative', 'absolute', 'fixed'
];


export default class extends Component {
  /*===properties start===*/
  static propTypes = {
    className: PropTypes.string,
    position: PropTypes.oneOf(DEFAULT_POSITION),
  };

  static defaultProps = {
    position: 'relative'
  };
  /*===properties end===*/

  render() {
    const { className, position, ...props } = this.props;
    return (
      <div data-position={position} {...props} className={classNames('webkit-sassui-position-box react-position-box', className)} />
    );
  }
}
