import React from "react";
import Link from "next/link";
import Header from './heads'
import Footer from './footer'

export default function About(){

    return(
<div>

    
<section class="page-title js-parallax-scroll p-t-175 p-b-175 background-about-title"  >
        <div class="bg-overlay bg-overlay--opa40"></div>
        <div class="page-title__inner">
            <div class="container">
                <h2>A propos</h2>
            </div>
        </div>
    </section>
    

 
    <section class="about-me-1 service2 p-t-70 p-b-70">
        <div class="container">
            <div class="row no-gutters">
                <div class="col-lg-4 col-lg-4--wider">
                    <div class="about-me-1__image">
                        <img src="https://res.cloudinary.com/duwas1k3k/image/upload/v1606766714/about-me-01_l8kjyt.jpg" alt="Victor Umber" />
                    </div>
                </div>
                <div class="col-lg-7 offset-lg-1 offset-lg--padding-70">
                    <div class="about-me-1__content-wrap">
                        <div class="about-me-1__content">
                            <h5>je suis junior mercius</h5>
                            <h2>je suis votre photographe parfait</h2>
                            <p class="m-t-15 m-b-15">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dict sunt explicabo. Nemo
                                enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed alt quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.</p>
                            <div class="service-box">
                                <div class="service-box__item">
                                    {/* <div class="icon">

                                       
                                        <i class="fas fa-camera">
                                            <img src="https://cdn.xl.thumbs.canstockphoto.fr/profil-avatar-personne-m%C3%A2le-vecteur-eps_csp39416748.jpg">


                                        </i>
                                    </div> */}
                                    <div class="text">
                                        <h4>
                                            <a href="service.html">Portrait</a>
                                        </h4>
                                    </div>
                                </div>
                                <div class="service-box__item">
                                    <div class="icon">
                                        <i class="fas fa-cubes"></i>
                                    </div>
                                    <div class="text">
                                        <h4>
                                            <a href="service.html">Fashion</a>
                                        </h4>
                                    </div>
                                </div>
                                <div class="service-box__item">
                                    <div class="icon">
                                        <i class="fas fa-heartbeat"></i>
                                    </div>
                                    <div class="text">
                                        <h4>
                                            <a href="service.html">Mariage</a>
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