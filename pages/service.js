import React from "react";
import Link from "next/link";
import Header from './heads'
import ServiceRight from './service-right'
import ServiceLeft from './service-left'
import Footer  from './footer'



const  Service = ({service}) =>{
    console.log(service.portraitImage);

    return(
<div>
    
        <section class="page-title js-parallax-scroll p-t-175 p-b-175 background-service-title"  >
        <div class="bg-overlay bg-overlay--opa40"></div>
           <div class="page-title__inner">
            <div class="container">
                <h2>{service.coverText}</h2>
            </div>
          </div>
       </section>

       <section class="service- 3 bg-f8 p-t-70 p-b-40">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                     <ServiceLeft 
                        ServiceLeftDescription={{
                         fashion:`${service.fashionTitle}`,
                         portrait:`${service.portraitTitle}`,
                         fashionText:`${service.fashionDescription}.` ,
    
                        portraitText:`${service.portraitDescription}`,
                         imageLeftFashion:`${service.fashionImage.url}`,
                        imageLeftPortrait:`${service.portraitImage.url}`,
                           
                         
                     }}
                    
                      />
                        
                    </div>
                     <div class="col-lg-6">
                        <ServiceRight 
                         ServiceRightDescription={{
                         mariage:`${service.mariageTitle}`,
                         event:`${service.eventTitle}`,
                         eventText:`${service.eventDescription}.` ,
       
                         mariageText:`${service.mariageDescription}`,
                         imageRightMariage:`${service.mariageImage.url}`,
                         imageRightEvent:`${service.eventImage.url}`,
                              
                            
                        }}




                       />
                    </div> 
                </div>
            </div>
        </section>



</div>
    )
}

export async function getServerSideProps(){
    //const {API_URL}=process.env
    
       const res = await fetch('http://localhost:1337/service-description')
      //const res = await fetch(`${API_URL}/home`)
      
      const data = await res.json()
    
      return{
        props:{
          service:data
        }
    
      }
    }

    export default Service