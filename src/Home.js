import React from 'react';
import './Home.css';
import {Container, Row,Col} from 'react-bootstrap';
import ReactPlayer from 'react-player';
import waste from "./video/waste.mp4";

/**
* @author
* @function Home
**/

const Home = () => {
  return(
      
<div  className='grid'>
 
    
    <Container>
    
    <Row>
      <Row>

          <Col xs={12} sm={8} className="main-section">
                     
          
            <ReactPlayer className="main-section"
                 width='550px'
                  height='200px'
                  controls
                url='https://www.youtube.com/watch?v=JTGnf_qVRTs'
                	
                />
               
          </Col>

         
      </Row>
<Container>
      <Row>
          <Col xs={12} sm={4} className="main-section">
  
            <ReactPlayer className="react-player"
                 width='130px'
                  height='80px'
                  controls
                url='https://www.youtube.com/watch?v=JTGnf_qVRTs'
                	
                />

              
            <ReactPlayer className="react-player"
                 width='130px'
                  height='80px'
                  controls
          
                url='https://www.youtube.com/watch?v=yXcWJm7J538' 
                 />
               
  
            <ReactPlayer className="react-player"
                 width='130px'
                  height='80px'
                  controls
                url='https://www.youtube.com/watch?v=5qap5aO4i9A'
                 />
                                

            <ReactPlayer className="react-player"
                 width='130px'
                  height='80px'
                  controls
                url='https://www.youtube.com/watch?v=7gPOwt2gmrg'
                 />
  
            <ReactPlayer className="react-player"
                 width='130px'
                  height='80px'
                  controls
                url='https://www.youtube.com/watch?v=RwxC5J8LI4Q'
                 />
          </Col>
      </Row>
      </Container>

    </Row>
  </Container>
 
</div>
      
   )

 };

export default Home;