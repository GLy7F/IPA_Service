import React, { Component } from 'react'
import { Jumbotron,Container,Badge } from 'react-bootstrap';
export default class About extends Component {
    render() {
        return (
            <div>

       <div className="aboutpage">
<Jumbotron bsPrefix>
  <Container>
      <div className="abouttext">
    <h1>IPA Service</h1>
    <p>
        
    This site helps you get information <br/>From where you are to know the country details and city where you live <br/>And Connection information, device information, weather and currency
      </p>

</div>

        
 
  <div className="secknow">




  <Badge pill variant="info">
  This site is for educational purposes only.  
  </Badge>
  <br/>
  <Badge pill variant="danger">
  *just for Yazeed And Mohammed Alfisal
  </Badge>
  <br/>
      <Badge pill variant="warning">
      <sup>so any technical in this site is for "hacking xD"</sup>
  </Badge>

 </div>
  </Container>
</Jumbotron>




 

  </div>
  </div>
        
        )
    }
}
