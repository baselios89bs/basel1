import React, { useState } from "react";
import { BiCart } from "react-icons/bi";
import { AiOutlineCloseCircle } from "react-icons/ai";
import DATA from "../../Datas";



export default function MobileSection1(props){
    
const [cart,setcart] = useState(1);
const [close,setclose] = useState("none");

const blur = ()=>{
    setclose("none")
}
const closes = ()=>{
  if(close === "none"){
         setclose("block");
     }
     else{
         setclose("none")}
}

 const carts=()=> {
    
    if(cart === 1){
        setcart(0.3);
        
    }else{
        setcart(1);
        
    }
    if (!DATA[DATA.length-1].includes(props.idall)) {
        DATA[DATA.length-1].push(props.idall);
        DATA[props.sid][props.idall].logostoreopacity = 1;
    }else{
        DATA[DATA.length-1].splice(DATA[DATA.length-1].indexOf(props.idall),1)
       DATA[props.sid][props.idall].logostoreopacity = 0.2;
    }
    
}

    
       
    
    

   return (
    
       <li className="li1" style={{left:`${props.left}px`,opacity:`${props.opacity}`}} onMouseLeave={blur}>
          
           <img src={props.img} alt="check your net"   onClick={closes}/>
           
           <div className="mobiles-top--div">
               <span className="mobilename" onClick={closes}>{props.name}</span>
               <span className="storelogo"><BiCart style={{opacity:DATA[props.sid][props.idall].logostoreopacity}} onClick={carts}/> </span>
               <div><i>{props.oldpric}</i><b>{props.newpric}</b></div>
               <p style={{opacity:`${props.news}`}}>new</p>
               </div>


            <div className="mobiles-top--info" style={{display:`${close}`}}>
                 <AiOutlineCloseCircle className="mobiles-top--info__close" onClick={closes}/>
                <div className="mobiles-top--info__header">
                    <img className="mobiles-top--info__header__img" src={props.img} alt="xx" />
                    <div>
                     <h1>{props.name}</h1> 
                     <p>{props.sub}</p>  
                    </div>
                   
                </div>
                <div className="infos">

                    <div className="infos--info">
                        <p>SCREEN :&nbsp;{props.screen}</p>
                        <p>MEMORY/RAM :&nbsp;{props.mRam} &nbsp;GB</p>
                        <p>CAMERA :&nbsp;{props.camera} &nbsp;PX</p>
                        <p>BATTERY :&nbsp;{props.battery} &nbsp;mAm</p>
                    </div>

                    <div className="infos--store">
                      <span className="storelogo"><BiCart onClick={carts} style={{opacity:DATA[props.sid][props.idall].logostoreopacity}} /> </span> 
                      <p> price :&nbsp; ${props.newpric}</p> 
                    </div>
                    
                    
                </div>
                
                
                
            </div>
         
       </li>
       
   )
}