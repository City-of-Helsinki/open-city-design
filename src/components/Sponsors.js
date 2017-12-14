import React, { Component } from 'react'
import { Container } from 'reactstrap';
import SixAikaColorSvg from '../images/6aika-color.svg';
import SixAikaMonochromeSvg from '../images/6aika-white.svg';
import EuLocationDevelopmentSvg from '../images/eu-aluekehitys-color.svg';
import EuLocationDevelopmenMonochromeSvg from '../images/eu-aluekehitys-white.svg';
import EuLiftsSvg from '../images/eu-vipuvoimaa-color.svg';
import EuLiftsMonochromeSvg from '../images/eu-vipuvoimaa-white.svg';



class Sponsors extends Component {
      render()  {

            const sponsors = {
                  sponsors: [
                        {
                              key: 1,
                              header: '6Aika',
                              imageURL: SixAikaColorSvg,
                              imageURLMonochrome: SixAikaMonochromeSvg,
                              URL: 'https://6aika.fi'
                        },
                        {
                              key: 2,
                              header: 'Vipuvoimaa EU:lta 2014-2020',
                              imageURL: EuLocationDevelopmentSvg,
                              imageURLMonochrome: EuLocationDevelopmenMonochromeSvg,
                              URL: '#'
                        },
                        {
                              key: 3,
                              header: 'Euroopan aluekehitysrahasto',
                              imageURL: EuLiftsSvg,
                              imageURLMonochrome: EuLiftsMonochromeSvg,
                              URL: '#'
                        }
                  ]
            }
            return(
                  <div className={"partner-banner partner-banner--" + this.props.placement}>

                        {sponsors.sponsors.map((sponsor, i) =>
                              <div className="partner-banner__logo">
                                    { this.props.placement === 'top' && 
                                          <img alt={sponsor.header} src={sponsor.imageURL} className="partner-logo" aria-hidden="true"></img>
                                    }
                                    { this.props.placement === 'footer' && 
                                          <a href={sponsor.URL} target="_blank">
                                                <img alt={sponsor.header} src={sponsor.imageURLMonochrome} className="partner-logo" aria-hidden="true"></img>
                                          </a>
                                    }
                              </div>
                        )}
                  </div>
            );
      }

}

export default Sponsors;