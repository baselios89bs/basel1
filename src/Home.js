import React from "react";
import { Link } from "react-router-dom";


function Home(){
  
   return <div className="home">

          <div className="hom-mobile">
              <img src="https://image.oppo.com/content/dam/oppo/product-asset-library/a/a54/a54-overview-5/v1/assets/phone-type-img-1920.png" alt="" />
              <h1>MOBILE</h1>
              <button><Link className="link" to={"/mobile"}>ENTER</Link></button>
          </div>

          <div className="hom-smartwatch">
              <img src="https://www.pngpix.com/wp-content/uploads/2021/05/PNGPIX-COM-Smart-Watch-PNG-Transparent-Image-1.png" alt="" />
              <h1>SMART WATCH</h1>
              <button disabled>comming soon ..</button>
          </div>

          <div className="hom-smarttv">
              <img src="https://images.samsung.com/is/image/samsung/latin-en-qledtv-q60t-qn85q60tapxpa-rperspectiveblack-thumb-277875019?$480_480_PNG$" alt="" />
              <h1>SMART TV</h1>
              <button disabled>comming soon ..</button>
          </div>
            
        </div>
       
 
}
export default Home 