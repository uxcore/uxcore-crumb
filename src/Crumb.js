/**
 * Crumb Component for uxcore
 * @author peijie.dpj
 *
 * Copyright 2014-2015, Uxcore Team, Alinw.
 * All rights reserved.
 */

const prefixCls = 'kuma-crumbs';
const CrumbItem = require('./CrumbItem');

class Crumb extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const props = this.props;

    return (
      <div className={`${prefixCls} ${props.className}`}>
        {React.Children.map(this.props.children, function (item) {
           return <CrumbItem {...item.props}>{item.props.children}</CrumbItem>
        })}
      </div>
    );
  }
}

Crumb.defaultProps = {
  className: ''
}


// http://facebook.github.io/react/docs/reusable-components.html
Crumb.propTypes = {}

Crumb.Item = CrumbItem;

Crumb.displayName = 'Crumb';

module.exports = Crumb;
