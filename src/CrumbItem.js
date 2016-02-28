/**
 * CrumbItem Component for uxcore
 * @author peijie.dpj
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let classnames = require('classnames');
let React = require('react'); 
let ReactDOM = require('react-dom');

class CrumbItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return !props.href ? <span className={classnames({
        [props.className]: !!props.className
    })}>{props.children}</span> : <a href={props.href} className={props.className}>{props.children}</a>
  }
}

CrumbItem.defaultProps = {
}


// http://facebook.github.io/react/docs/reusable-components.html
CrumbItem.propTypes = {
  href: React.PropTypes.string,
  className: React.PropTypes.string
}

CrumbItem.displayName = 'CrumbItem';

module.exports = CrumbItem;
