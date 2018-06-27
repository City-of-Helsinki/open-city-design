/* eslint react/no-multi-comp: 0, react/prop-types: 0, import/no-webpack-loader-syntax: off */
import React from 'react';
import { UncontrolledTooltip } from 'reactstrap';

export default function Example() {
  return (
    <div>
      <p>Somewhere in here is a <a href="#link" id="UncontrolledTooltipExample">tooltip</a>.</p>
      <UncontrolledTooltip placement="right" target="UncontrolledTooltipExample">
        Hello world!
      </UncontrolledTooltip>
    </div>
  );
}
