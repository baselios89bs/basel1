import React, { useEffect,  useState } from "react";
import { FiChevronsLeft,FiChevronsRight } from "react-icons/fi"
import DATA from "../../Datas";
import MobileSection1 from "./MobileSection1";
import MobileSection2 from "./MobilesSection2";

 export default function Mobiles(props) {
    
    
    let movarr2 = [];
    let opacity = []
       for (let index = 0; index < 3; index++) {
        for (let i = -2400; i < (1200*(DATA[0].length-3)+1);i= i+1200) {
        movarr2.push(i); 
        if(i === 0) {
            opacity.push(1) ;
        }else{
            opacity.push(0) ;}}}
    const [q,setq] = useState(2);
    const [o,seto] = useState(2);        
    function  moveleft2(){setTimeout(()=>{setq(q+1);seto(o+1);},400);}; // moveleft2  
    function  moveright2(){setTimeout(()=>{setq(q-1);seto(o-1);},400);}; // moveright2
    useEffect(()=>{if(q ===DATA[0].length*2){setq(DATA[0].length);}
                    if(q===0){setq(DATA[0].length);}},[q])
    useEffect(()=>{if(o ===DATA[0].length*2){seto(DATA[0].length);}
                    if(o===0){seto(DATA[0].length);}},[o])
 
  
      function mobileTop() {
        return  DATA[0].map(m =>
            <MobileSection1
            id={m.id}
            idall={m.idall}
            left= {movarr2[q+(m.id)]}
            opacity= {opacity[o+(m.id)]}
            name = {m.name}
            img = {m.img}
            oldpric = {m.oldpric}
            newpric = {m.newpric}
            news = {m.news} 
            screen = {m.screen}
            mRam = {m.mRam}
            camera = {m.camera}
            battery = {m.battery}
            sub={m.sub}
            returncolor = {props.returncolor}
            logostoreopacity = {m.logostoreopacity}
            sid = {m.sid}
            />
        )
       }
       function mobilebitshigh(priceh,pricel) {
        let newarrhigh = []
        for (let i = 0; i < DATA[0].length; i++) {
            if(DATA[0][i].newpric >= pricel && DATA[0][i].newpric <= priceh){
              newarrhigh.push(DATA[0][i])  }}
        
         return newarrhigh.map(m=>
            <MobileSection2 
            id={m.id}
            idall={m.idall}
            sid = {m.sid}
            name = {m.name}
            img = {m.img}
            newpric = {m.newpric}
            news = {m.news} 
            screen = {m.screen}
            mRam = {m.mRam}
            camera = {m.camera}
            battery = {m.battery}
            sub={m.sub}
            
            />
            
            
            )
       }


       
       const [openbit1,setopenbit1] = useState("none");
       const [openbit2,setopenbit2] = useState("none");
       const [openbit3,setopenbit3] = useState("none");
       function openbits1 (){
            setopenbit2("none")
            setopenbit3("none")
            if (openbit1 === "none") {
             setopenbit1("block")   
            }else{
                setopenbit1("none")  
            }
            
            }
        function openbits2 (){ 
            setopenbit1("none")
            setopenbit3("none") 
            if (openbit2 === "none") {
                setopenbit2("block")   
               }else{
                   setopenbit2("none")  
               }
            }
        function openbits3 (){ 
            setopenbit2("none")
            setopenbit1("none") 
            if (openbit3 === "none") {
                setopenbit3("block")   
               }else{
                   setopenbit3("none")  
               }
            }
         function goUp(){
            window.scrollTo({"behavior":"smooth","top":"offsetTop"})
         } 
         const [upHidden,setupHidden] = useState("none");
     window.onscroll = function(){
        if (window.scrollY > 500) {
            setupHidden("")
        }else{
            setupHidden("none")
        }
     }  

   


    return(
        <div className="mobiles">

            <div className="mobiles-top">
            <h1>MOBILE</h1>
                  <ul >
                    {mobileTop()} 
             
             </ul>
                    <i className="left" onClick={moveleft2}><FiChevronsLeft /></i>
                    <i className="right" onClick={moveright2}><FiChevronsRight /></i>
            </div>


            <div  className="mobiles-choosing">
                <h2>please choose what do you want to see</h2>
                  <div className="nounsbits">
                        <h1 onClick={openbits1}>HIGH CLASS MOBILE</h1>
                        <h1 onClick={openbits2}>MIDDLE CLASS MOBILE</h1>
                        <h1 onClick={openbits3}>LOW CLASS MOBILE</h1>
                  </div>


                <div className="mobiles">
                    
                    <div className="mobiles-low" style={{display:openbit1}}>
                    {mobilebitshigh(1000,300)} 
                    </div>
                    
                </div>

                <div className="mobiles">
                    
                    <div className="mobiles-low" style={{display:openbit2}}>
                    {mobilebitshigh(299,200)} 
                    </div>
                    
                </div>

                <div className="mobiles">
                    
                    <div className="mobiles-low" style={{display:openbit3}}>
                        {mobilebitshigh(199,0)}
                    </div>
                    
                </div>
            </div>
            
            
          <div className="goUp" onClick={goUp} style={{display:upHidden}}>up</div>  

        </div>
    )
    
 }