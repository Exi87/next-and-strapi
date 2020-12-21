import React from "react";
import Link from "next/link";


const  About =({about}) =>{
    //console.log(about.coverImage.url);

    return(
<div>

    
<section class="page-title js-parallax-scroll p-t-175 p-b-175 background-about-title"  >
        <div class="bg-overlay bg-overlay--opa40"></div>
        <div class="page-title__inner">
            <div class="container">
                <h2>{about.coverText}</h2>
            </div>
        </div>
    </section>
    

 
    <section class="about-me-1 service2 p-t-70 p-b-70">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-lg-4 col-lg-4--wider">
                    <div class="about-me-1__image">
                        <img 
                        src={about.coverImage.url}
                         alt="Victor Umber" 
                         />
                    </div>
                </div>
                <div class="col-lg-7 offset-lg-1 offset-lg--padding-70">
                    <div class="about-me-1__content-wrap">
                        <div class="about-me-1__content">
                            <h5>{about.aboutTile}</h5>
                            <h2>{about.aboutSubTitle}</h2>
                            <p class="m-t-15 m-b-15">{about.aboutDescription}.</p>
                            <p>.</p>
                            <div class="service-box">
                                <div class="service-box__item">
                                    {/* <div class="icon">

                                       
                                        <i class="fas fa-camera">
                                            <img src="https://cdn.xl.thumbs.canstockphoto.fr/profil-avatar-personne-m%C3%A2le-vecteur-eps_csp39416748.jpg">


                                        </i>
                                    </div> */}
                                      <div class="icon">
                                        <i class="fas fa-camera"></i>
                                    </div>
                                    <div class="text">
                                        <h4>

                                            <Link href='/portrait'>
                                            <a>Portrait</a>
                                            </Link>
                                            {/* <a href="service.html">Portrait</a> */}
                                        </h4>
                                    </div>
                                </div>
                                <div class="service-box__item">
                                    <div class="icon">
                                        <i class="fas fa-cubes"></i>
                                    </div>
                                    <div class="text">
                                        <h4>
                                        <Link href='/galerie-fashion'>
                                            <a>Fashion</a>
                                            </Link>
                                            {/* <a href="service.html">Fashion</a> */}
                                        </h4>
                                    </div>
                                </div>
                                <div class="service-box__item">
                                    <div class="icon">
                                        <i class="fas fa-heartbeat"></i>
                                    </div>
                                    <div class="text">
                                        <h4>
                                        <Link href='/galerie-mariage'>
                                            <a>Mariage</a>
                                            </Link>
                                           
                                        </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>


</div>
      
    )
}
export async function getServerSideProps(){
   
    
       const res = await fetch('http://localhost:1337/about')
      //const res = await fetch(`${API_URL}/Acceuils`)
      
      const data = await res.json()
    
      return{
        props:{
          about:data
        }
    
      }
    }

export default About