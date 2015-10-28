/**
 * Crumb Component for uxcore
 * @author peijie.dpj
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

let CrumbItem = require('./CrumbItem');
let classnames = require('classnames');

class Crumb extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <div className={classnames({
        [props.prefixCls]: true,
        [props.className]: !!props.className
      })}>
        {React.Children.map(this.props.children, function (item) {
           return <CrumbItem {...item.props}>{item.props.children}</CrumbItem>
        })}
      </div>
    );
  }
}

Crumb.defaultProps = {
  prefixCls: 'kuma-uxcrumbs'
}


// http://facebook.github.io/react/docs/reusable-components.html
Crumb.propTypes = {
  prefixCls: React.PropTypes.string,
  className: React.PropTypes.string
}

Crumb.Item = CrumbItem;

Crumb.displayName = 'Crumb';

module.exports = Crumb;
