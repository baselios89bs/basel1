import React from "react";
import { DiReact,DiSass} from "react-icons/di";
import { CiMail } from "react-icons/ci";
import { AiOutlineFacebook,AiOutlineInstagram } from "react-icons/ai";



function Footer(){
return  <div className="footer">
            
                <i><DiReact  className="logo"/><h1>REACT</h1> </i>
                <i><DiSass className="logo"/><h1>SASS </h1></i>
            
            <div className="footer-subscribe">
                <div className="footer-subscribe--box">
                    <h2>subscribe new user</h2>
                    <div className="footer-subscribe--box__inputbtn">
                        <input type="email" className="email"/>
                        <button>subscribe</button>
                    </div> 
                </div>
                
            </div>
            <div className="footer-info">
                <div className="footer-info--logoname">
                    <img src="https://static.vecteezy.com/system/resources/previews/010/872/412/original/3d-mobile-store-icon-png.png" alt="superman" />
                    <h1 class="font-effect-shadow-multiple">
                        &nbsp; BASEL PAGE
                    </h1>
                </div>

                <div className="footer-info--infos">
                    <div>
                        <h1>ABOUT US</h1>
                        <div>
                            <p>About the company</p>
                            <p>Contact</p>
                            <p>Career</p>
                            <p>Blog</p>
                            <p>Terms & Conditions</p>
                            <p>Privacy Policy</p>
                            <p>Cookies policy</p>
                            <p>Sell on Mobileshop</p>
                        </div>
                    </div>
                    <div>
                        <h1>ASSISTANCE</h1>
                        <div>
                            <p>How To Buy</p> 
                            <p>Shipping</p>
                            <p>Payment Options</p>
                            <p>FAQ</p>
                            <p>Warranty</p>
                            <p>Cancelations & Returnings</p>
                        </div>
                    </div>
                    <div>
                        <h1>CONTACT</h1>
                        <div className="numberEmail">
                            <div className="numberEmail-s">
                                <p>Call Center</p>
                                <b>+963947868007</b>
                            </div>
                            <div className="numberEmail-s">
                                <p>Email</p>
                                <b>basel.slaby@gmail.com</b>
                            </div>
                            <div className="numberEmail-s">
                                <p>GET SOCIAL</p>
                                <div className="numberEmail-s--logo">
                                < AiOutlineFacebook />   
                                <CiMail />
                               <AiOutlineInstagram />
                                </div>
                            </div>

                        </div>
                    </div>
                    
                </div>

            </div>
            <div className="footer-end">
               <span className="endspan">Copyright © 2010-2023 PASELPAGE. All rights reserved. All product pictures on site are property of PASELPAGE | Web Design: Art & Code / Creative Studio. | <span> Privacy Policy </span> | <span>Terms Of Service</span> </span>
            </div>
         
          </div>
}
export default Footer