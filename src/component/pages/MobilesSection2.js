import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import DATA from "../../Datas";



export default function MobileSection2(props){
    const [cart,setcart] = useState(1);
    const carts=()=> {
    
        if(cart === 1){
            setcart(0.3);
            
        }else{
            setcart(1);
            
        }
        if (!DATA[DATA.length-1].includes(props.idall)) {
            DATA[DATA.length-1].push(props.idall);
            DATA[props.sid][props.id].logostoreopacity = 1;
        }else{
            DATA[DATA.length-1].splice(DATA[DATA.length-1].indexOf(props.idall),1)
           DATA[props.sid][props.id].logostoreopacity = 0.2;
        }
        
    }
       
    
    

   return (
    
      
        <div className="mobiles-low--box">
            <img src="https://images.complex.com/complex/images/c_fill,dpr_auto,f_auto,q_auto,w_1400/fl_lossy,pg_1/qi3gqverqthxatrgu18v/fortnite-logo2?fimg-ssr-default" alt="" />
            
            <div className="mobiles-low--box__bit1">
              <h1>{props.name}</h1>
              <h2>{props.sub}</h2>
              <p><i style={{opacity:`${props.news}`}}>new</i></p>

            </div>
            <div className="mobiles-low--box__bit2">
                <p>SCREEN :&nbsp;{props.screen}</p>
                <p>MEMORY/RAM :&nbsp;{props.mRam} &nbsp;GB</p>
                <p>CAMERA :&nbsp;{props.camera} &nbsp;PX</p>
                <p>BATTERY :&nbsp;{props.battery} &nbsp;mAm</p>
            </div>
            <div className="mobiles-low--box__bit3">
                <span className="storelogo"><BiCart style={{opacity:DATA[props.sid][props.idall].logostoreopacity}} onClick={carts} /> </span> 
                <p> price :&nbsp; ${props.newpric}</p> 
            </div>
           
        </div>

     
       
   )
}