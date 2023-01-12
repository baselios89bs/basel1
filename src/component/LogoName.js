import React, { useState } from "react";
import { FaUserCircle } from "react-icons/fa";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BiCart,BiCog } from "react-icons/bi";
import DATA from "../Datas";

  




 let  arrstore = [];
 let closeornot = 0 ;
 let x;

function LogoName(){

     function StoreItems(props){
       
          function delItem(){
                DATA[props.sid][props.id].logostoreopacity = 0.2;
                DATA[DATA.length-1].splice(DATA[DATA.length-1].indexOf(props.idall),1)
                GetData()
               
               }        
               
          return(
                     <div className="storepay-items--item1" >
                         <div className="storepay-items--item1__it1">
                         <p>{props.sub}</p>
                         <AiOutlineCloseCircle className="itemdel" onClick={delItem}/> 
                         </div>
                         <p>{props.name}</p>
                         <div className="storepay-items--item2">
                         <p>{props.mRam} GB  </p>  
                         <p> <i>price </i>:  $</p>
                         <span>  {props.newpric}</span> 
                         </div>
                    </div>
          )
       }


     const [openclosestor,setopenclosestor] = useState("none");
     const [DatatToPay,setDatatToPay] = useState();
    
     const  closewindow = ()=>{
          if(closeornot === 0){
              x =  setTimeout(()=>setopenclosestor("none"),2000);
          }else{
             clearTimeout(x);
             closeornot = 0;
          }};

     const dontclosewindow = ()=>{
          closeornot = 1;
          closewindow()
     }
     const  [coust,setcount] =useState(0);
     
     function GetData  (){
          if(openclosestor === "none"){
                 setopenclosestor("block");
             }
             else{
                 setopenclosestor("none")}
          let coustall =0
          arrstore = []
          for (let i = 0; i < DATA.length -1; i++) {
               for (let q = 0; q < DATA[i].length; q++) {
                    for (let r = 0; r < DATA[DATA.length-1].length; r++) {
                       if(DATA[i][q].idall === DATA[DATA.length-1][r]){
                              arrstore.push(DATA[i][q]);
                              coustall +=  DATA[i][q].newpric}}}}

                              setcount(coustall)
              
           setDatatToPay(arrstore.map(m=>
                    <StoreItems
                    id = {m.id}
                    idall = {m.idall}
                    name = {m.name}
                    sub = {m.sub}
                    mRam = {m.mRam}
                    newpric = {m.newpric}
                    sid = {m.sid}
                    logostoreopacity = {m.logostoreopacity}
                    />) )}
                    function bay() {
                        DATA[DATA.length-1] = [] 
                        GetData()
                    } 
      
          function scrollToSubscribe() {
               window.scrollTo({
                    top:document.body.scrollHeight - 1300,
                    behavior:"smooth"
               })
          } 
          let mood = "dark"              
          function changecolor(){
               
               if (mood === "light") {
                    document.documentElement.style.setProperty("--primary_color","#2D033B")
                    document.documentElement.style.setProperty("--secondary_color","#810CA8")
                    document.documentElement.style.setProperty("--simple_color","#E5B8F4")
                    document.documentElement.style.setProperty("--secondary_color_hover","#810ca8c7")
                    document.documentElement.style.setProperty("--secondary_color_active","#810ca8e1")
                    mood = "dark" 
               }else{
                    document.documentElement.style.setProperty("--primary_color","#100F0F")
                    document.documentElement.style.setProperty("--secondary_color","#0F3D3E")
                    document.documentElement.style.setProperty("--simple_color","#F1F1F1")
                    document.documentElement.style.setProperty("--secondary_color_hover","#165b5c")
                    document.documentElement.style.setProperty("--secondary_color_active","#2ea3a5")
                    mood = "light"                    
               }
            }
            const [sitting,setsitting] = useState("none")
            function closesitting(){
               if(sitting === "none"){
                    setsitting("block")
               }else{
                    setsitting("none") 
               }
            }
        
return  <div className="logoname">
           <div className="logoname-name">
           <img src="https://static.vecteezy.com/system/resources/previews/010/872/412/original/3d-mobile-store-icon-png.png" alt="superman" />
                <h1 className="font-effect-shadow-multiple">
                    
                    &nbsp; BASEL PAGE
                </h1>
           </div>
           <div className="logoname-navsections">
               
           </div>
           <div className="logoname-sitting">
                <span className="logoname-sitting--register" onClick={scrollToSubscribe}><FaUserCircle /></span>
                &nbsp;&nbsp;
                <span className="logoname-sitting--store"    >
                     <BiCart className="logoCart" onClick={GetData}  />
                    <div className="storepay" style={{display:openclosestor}} onMouseMoveCapture={dontclosewindow} onMouseLeave={closewindow}>

                         <div className="storepay-items">
                               {DatatToPay}
                         </div>
                         
                         <div className="storepay-total">
                              <p><b> total price:</b> <i>$ {coust}</i></p>
                              <button onClick={bay}>pay now</button>
                         </div>

                    </div>
               </span>
                &nbsp;&nbsp;
                <span className="logoname-sitting--sitting" ><BiCog  onClick={closesitting}/>
                    <div className="changemood" style={{display:sitting}}>
                         <input type="checkbox" onChange={changecolor} className="check" /><span>night mood</span>
                    </div>
                </span></div>
         </div>
}
export default LogoName

