import React from "react";
import Link from "next/link";
import Header from './heads'
import ServiceRight from './service-right'
import ServiceLeft from './service-left'
import Footer  from './footer'



export default function Service(props){

    return(
<div>
    
        <section class="page-title js-parallax-scroll p-t-175 p-b-175 background-service-title"  >
        <div class="bg-overlay bg-overlay--opa40"></div>
           <div class="page-title__inner">
            <div class="container">
                <h2>Service</h2>
            </div>
          </div>
       </section>

       <section class="service- 3 bg-f8 p-t-70 p-b-40">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                     <ServiceLeft 
                     ServiceLeftDescription={{
                        textLeft1:`Lorem ipsum dolor sit amet fer consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna bink aliqua , ut enim ad minim malk veniam.` ,
    
                         textLeft2:`Lorem ipsum dolor sit amet fer consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                         ut labore et dolore magna bink aliqua , ut enim ad minim malk veniam.`,
                         imageLeft:'https://res.cloudinary.com/duwas1k3k/image/upload/v1606766714/about-me-01_l8kjyt.jpg'
                     }}
                    
                      />
                        
                    </div>
                     <div class="col-lg-6">
                        <ServiceRight 
                        textRight1='Lorem ipsum dolor sit amet fer consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                        ut labore et dolore magna bink aliqua , ut enim ad minim malk veniam.'

                        textRight2='Lorem ipsum dolor sit amet fer consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                     ut labore et dolore magna bink aliqua , ut enim ad minim malk veniam.' />
                    </div> 
                </div>
            </div>
        </section>



</div>
    )
}