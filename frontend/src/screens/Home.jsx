// import React from 'react'
// import { Button } from 'react-bootstrap'

// const Home = ({history}) => {

//     const checkout = () => {
//         history.push("/home");
//     };
//   return (
//     <div>
//        <Button onClick={checkout}> Fill Form</Button>
//     </div>
//   )
// }

// export default Home

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

                        {/* <div className="item active">
                            <img src="https://firebasestorage.googleapis.com/v0/b/agricart-c7914.appspot.com/o/banners%2Fslider2-min.png?alt=media&token=20d5c1b4-2168-4b8e-a0f9-f496db47894b" className="pull-right" alt="Los Angeles" />
                            <div className="carousel-caption">
                                <h3>Fruits</h3>
                            <p>Fruits delivered directly from farmers!</p>
                          <button type="submit" className="btn btn-cust" onClick={checkout} >Buy With us</button>

                            
                            </div>
                        </div> */}

                        <div className="item">
                            <img //src="https://firebasestorage.googleapis.com/v0/b/agricart-c7914.appspot.com/o/banners%2Fslider12-min.png?alt=media&token=b849e8db-b975-4781-85d8-2677dac10522" className="pull-right" alt="Chicago"/>
                            //  src="https://img.freepik.com/free-photo/collection-vegetables-isolated-white-background_44074-1572.jpg?w=1060" className="pull-right" alt="Chicago"/> 
                            //  src="https://c.neh.tw/thumb/f/720/5401720414797824.jpg"/> 
                            //  src="https://image.shutterstock.com/image-photo/healthy-food-background-copy-space-600w-391490803.jpg" className="pull-right" alt="Chicago"/> 
                        //  src="https://images.creativemarket.com/0.1.0/ps/3683908/910/607/m2/fpnw/wm1/m74so5ylty5cq0la0ib6nxv0j1hbxyehlevasr0ffyzr4rf0shwldskrgw56igaj-.jpg?1512399171&s=fb6ded031f3d6fce98a633564286be45"/> 
                        //  src="../images/bgimage.jpg"/> 
                           
                            // src="https://envato-shoebox-0.imgix.net/8a6f/773e-320a-4d0b-a5b4-10c06094b5d7/DSCF0052.jpg?auto=compress%2Cformat&fit=max&mark=https%3A%2F%2Felements-assets.envato.com%2Fstatic%2Fwatermark2.png&markalign=center%2Cmiddle&markalpha=18&w=1000&s=cfaa1ed34ed1e395f6c8fd6f5036a7ce" className="pull-right" alt="Chicago"/>
                          src="https://s1.1zoom.me/big0/597/Vegetables_Tomatoes_Pepper_Cucumbers_Onion_Gray_543228_1280x856.jpg" className="pull-right" alt="" /> 
                        {/* //   src="E:\sem 6\LAB WORK\SDP2\veggies\frontend\src\205-2059910_vegetables-hd-wallpapers-hd-wallpapers-vegetables.jpg"className="pull-right" alt="Chicago"/> */}
                          <div className="carousel-caption">
                            <h3>Vegetables</h3>
                            <p>Fresh from the farm and Hygenic!</p>
                          <button type="submit" className="btn btn-cust"  onClick={checkout} >Buy With us</button>
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