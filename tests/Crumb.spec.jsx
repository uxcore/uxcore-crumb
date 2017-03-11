
/* eslint-disable react/no-multi-comp */
/* eslint-disable react/prefer-es6-class */
/* eslint-disable react/no-string-refs */
import expect from 'expect.js';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils, { Simulate } from 'react-addons-test-utils';
import Crumb from '../src';

describe('Crumb', () => {
  let div;
  let instance;
  beforeEach(() => {
    div = document.createElement('div');
    document.body.appendChild(div);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(div);
    document.body.removeChild(div);
  });

  it('view', (done) => {
    const Demo = React.createClass({
      render() {
        return (
          <Crumb>
            <Crumb.Item ref="index">index</Crumb.Item>
          </Crumb>
        );
      },
    });
    instance = ReactDOM.render(<Demo />, div);
    const CrumbNode = instance.refs.index;
    expect(CrumbNode.getLabelNode().innerHTML).to.be('index');
    done();
  });
});
