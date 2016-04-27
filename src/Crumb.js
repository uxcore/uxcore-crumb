/**
 * Crumb Component for uxcore
 * @author peijie.dpj
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let CrumbItem = require('uxcore-crumb-item');
let classnames = require('classnames');
let React = require('react'); 
let ReactDOM = require('react-dom');

class Crumb extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    let me = this;

    return (
      <div className={classnames({
        [me.props.prefixCls]: true,
        [me.props.className]: !!me.props.className
      })}>
        {me.props.children}
      </div>
    );
  }
}

Crumb.defaultProps = {
  prefixCls: 'kuma-uxcrumbs'
}


// http://facebook.github.io/react/docs/reusable-components.html
Crumb.propTypes = {
  /**
   * @title 类名前缀
   * @veIgnore
   */
  prefixCls: React.PropTypes.string,
  /**
   * @title CSS类名
   * @veIgnore
   */
  className: React.PropTypes.string
}

Crumb.Item = CrumbItem;

Crumb.displayName = 'Crumb';

module.exports = Crumb;
