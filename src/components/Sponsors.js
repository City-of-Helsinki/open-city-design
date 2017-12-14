import React, { Component } from 'react'
import { Container } from 'reactstrap';
import { SixAikaColorSvg } from '../images/6aika-color.svg';
import { SixAikaMonochromeSvg } from '../images/6aika-white.svg';
import { EuLocationDevelopmentSvg } from '../images/eu-aluekehitys-color.svg';
import { EuLocationDevelopmenMonochromeSvg } from '../images/eu-aluekehitys-white.svg';
import { EuLiftsSvg } from '../images/eu-vipuvoimaa-color.svg';
import { EuLiftsMonochromeSvg } from '../images/eu-vipuvoimaa-white.svg';


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
            const sixAikaSvg = SixAikaColorSvg;
            var sponsorStyle = {
                  /*marginTop: 20,
                  marginBottom: 20,
                  borderRadius: 0,
                  padding: 0,
                  backgroundColor: 'transparent',
                  width: '100%',*/
                 }

            return(
                  <div style={sponsorStyle} className={"partner-banner partner-banner--" + this.props.placement}>
                        { this.props.placement === 'top' && 
                              <div className="">
                                    <div className="partner-banner__logo">
                                          <SixAikaColorSvg />
                                    </div>
                                    <div className="partner-banner__logo">
                                          <img alt="Vipuvoimaa EU:lta 2014-2020" src="/images/eu-vipuvoimaa-color.svg" class="partner-logo" aria-hidden="true" />
                                    </div>
                                    <div className="partner-banner__logo">
                                          <img alt="Euroopan aluekehitysrahasto" src="/images/eu-aluekehitys-color.svg" class="partner-logo" aria-hidden="true" />
                                    </div>
                              </div>

                        }
                  </div>
            );
      }

}

export default Sponsors;