import React, { Component } from 'react'
import { Button, Grid, Jumbotron, Col, Row, ButtonToolbar, Container, Nav, Navbar } from 'reactstrap';
import Welcome from '../../components/Welcome';
import Image from '../../components/Image';
import ContentTextWithImage from '../../components/ContentTextWithImage';
import image1 from '../../images/sketch-how-to/1-open-files.png';
import image2 from '../../images/sketch-how-to/2-sketch-library.png';
import image3 from '../../images/sketch-how-to/3-open-resources.png';
import image4 from '../../images/sketch-how-to/4-modify-symbol.png';
import image5 from '../../images/sketch-how-to/5-accept-changes.png';



class SketchDocumentation extends Component {
      render() {
            const image = { url: 'https://www.sketchapp.com/images/press/sketch-press-kit/app-icons/sketch-mac-icon@2x.png' };
            const welcome = {
                  heading: "Sketch Documentation",
                  paragraph: "How to apply Sketch files in your design process"
            };

            const URL = {
                  url: 'https://github.com/nettinero/open-city-guide/tree/master/hki-sketch'
            }
            const cards = {
                  "cards": [
                        {
                              key: 1,
                              header: '1. Download the files',
                              paragraph: <p>Download the file from <a href={'www.facebook.com'}>here</a> or from <a href={'www.github.com'}>GitHub</a>.</p>,
                              imageURL: image1,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '2. Open the Library file in Sketch',
                              paragraph: 'In case you have problems opening the file go to Sketch documentation to find out more about the usage of library files In the hki-sketch.zip file you should see one sketch project and the resources -file. Open the hki-library -Sketch project in Sketch.',
                              imageURL: image1,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '3. Modify the Library in Sketch',
                              paragraph: 'Ones you have opened the Library -file you can modify the components by double clicking them. If you create a new symbol it will automatically be saved into the library. Note: you need to save in order to make the change in the library to make it appear in a linked file. All changes to the library will take effect in all files it is linked to.',
                              imageURL: image2,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '4. Open the resources in Sketch',
                              paragraph: 'Go to the “resources” file in the hki-sketch.zip and open the hki-modules Sketch project in Sketch.',
                              imageURL: image3,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '5. Modify a symbol in an external library',
                              paragraph: 'In the hki-modules -project you can double click any of the components (symbols). You will be prompt to open the component in the hki-library file. Click “Open in Original Document” to modify the component. ',
                              imageURL: image4,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                        {
                              key: 2,
                              header: '6. Accept changes from the library',
                              buttonText: 'Download Sketch Library',
                              paragraph: 'In the hki-modules -project you can double click any of the components (symbols). You will be prompt to open the component in the hki-library file. Click “Open in Original Document” to modify the component. ',
                              imageURL: image5,
                              buttonURL: '#',
                              buttonText: 'Download Sketch Library'
                        },
                  ]
                  }
            return (
                  <div>
                        <Welcome welcome={welcome} />
                        <Container  >

                        {cards.cards.map((card, i) =>
                                                
                              <Col style={rowStyle} lg='12' xl='6' >
                                    <ContentTextWithImage key={i} card={card} />
                              </Col>
                        )}
                                                              </Container>  
  </div>
            );
      }

}

const imageStyle = { maxHeight: '20px' };

const welcomeStyle = {
      marginBottom: 0,
      borderRadius: 0,
      padding: 10,
      backgroundColor: 'transparent',
}
const rowStyle = {
      marginBottom: 50,
}

export default SketchDocumentation;