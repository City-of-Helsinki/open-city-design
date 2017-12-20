import React from 'react';
import './Typography.scss';

export default class Cuts extends React.Component {

      render() {
            return (
                  <div>                  
                  <h1 className="regular"> Heading h1 </h1><p>font-weight: 400;</p>
                  <h1 className="medium"> Heading h1 </h1><p>font-weight: 500;</p>
                  <h1 className="bold"> Heading h1 </h1><p>font-weight: 600;</p>
                  <h1 className="black"> Heading h1 </h1><p>font-weight: 700;</p>



                        </div>
            );
      }
};