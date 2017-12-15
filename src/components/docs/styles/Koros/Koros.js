import React from 'react';
import './Koros.scss';

export default class Koros extends React.Component {

      render() {
            return (
                  <div className="koro-example">
                        <div class="koro-content">
                              <h3 className='my-1'>Pulse</h3>
                              <p>Generated via <code>@include koro("pulse", $hel-bus, 300)</code></p>
                        </div>
                  </div>
            );
      }
};