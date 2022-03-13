// import React from 'react'
// import { Container,Row, Col } from 'react-bootstrap' 

// const Footer = () => {
//     return (
//         <>
//             <footer>
//                 <Container>
//                     <Row>
//                         <Col md={12}>
//                             <span className="text-center">
//                                 Copyright &copy; Techinfo YT
//                             </span>
//                         </Col>
//                     </Row>
//                 </Container>
//             </footer>
//         </>
//     )
// }



import React from 'react';
import { Container,Row, Col } from 'react-bootstrap' 


export const footer = () => {
  return (
    <>
                 <footer>
                     <Container>
                         <Row>
                             <Col className="text-center">
                                 <span > Copyright &copy; veggies.com</span>
                             </Col>
                         </Row>
                     </Container>
                 </footer>
             </>
  
    )
};

export default footer