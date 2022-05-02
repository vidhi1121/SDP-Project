

import React from 'react'
//import '../css/carosel.css'
import "../cssfile/homecss.css"

function Home({props,history}) {

    const checkout = () => {
                history.push("/home");
            };
    return (
        <div className="container-fluid" >
                <div id="myCarousel" className="carousel slide carousel-bg" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                        <li data-target="#myCarousel" data-slide-to="1"></li>
                        <li data-target="#myCarousel" data-slide-to="2"></li>
                    </ol>

                    <div className="carousel-inner">

                     

                        <div className="item">
                            <img 
                           
                           
                          src="https://s1.1zoom.me/big0/597/Vegetables_Tomatoes_Pepper_Cucumbers_Onion_Gray_543228_1280x856.jpg" className="pull-right" alt="" /> 
                        
                          <div className="carousel-caption">
                            <h3>Vegetables</h3>
                            <p>Fresh from the farm and Hygenic!</p>
                          <button type="submit" className="btn btn-dark"  onClick={checkout} >Buy With us</button>
                            </div>
                        </div>
            
                    </div>

                    <a className="left carousel-control" href="#myCarousel" data-slide="prev">
                        <span className="glyphicon glyphicon-chevron-left"></span>
                        <span className="sr-only">Previous</span>
                     </a>
                     <a className="right carousel-control" href="#myCarousel" data-slide="next">
                            <span className="glyphicon glyphicon-chevron-right"></span>
                            <span className="sr-only">Next</span>
                     </a>
            </div>
   </div>
    )
}

export default Home