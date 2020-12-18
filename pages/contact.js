import React from "react";
import Link from "next/link";
import Header from './heads'
import Footer from './footer'
export default function Contact(){

    return(
<div>
        
    <section class="page-title js-parallax-scroll p-t-175 p-b-175 background-contact-title"  >
        <div class="bg-overlay bg-overlay--opa30"></div>
        <div class="page-title__inner">
            <div class="container">
                <h2>Contact</h2>
            </div>
        </div>
    </section>


    <section class="contact p-t-70 p-b-50">
            <div class="container">
                <div class="row">
                    <div class="col-lg-6">
                        <div class="contact__image">
                            <img 
                            src="" alt="Victor Umber" />
                        </div>
                    </div>
                    <div class="col-lg-6">
                        <div class="contact-info clearfix">
                            <div class="contact-info__img">
                                <div class="contact-info__img-inner">
                                    <img 
                                    src="https://res.cloudinary.com/duwas1k3k/image/upload/v1607697336/about-me-02_tobpyt.jpg"
                                    
                                    alt="Miracle Lens" />
                                </div>
                            </div>
                            <div class="contact-info__content">
                                <h3>contact info</h3>
                                <ul class="list-unstyled contact-info__list">
                                    <li>
                                        <i class="fas fa-home"></i>#33 rue la paix , Delmas 33 , HAITI</li>
                                    <li>
                                        <i class="fas fa-phone"></i>(+509) 4744 43 98</li>
                                    <li>
                                        <i class="fas fa-envelope"></i><a href="merziuslouisjunior@gmail.com" class="__cf_email__" >merziuslouisjunior@gmail.com</a></li>
                                </ul>
                            </div>
                        </div>
                        <h3 class="title title--dark title--semibold m-b-35">send us message</h3>
                        <form class="form-contact js-contact-form" method="POST" action="https://freebw.com/templates/umber/includes/contact-form.php">
                            <div class="row">
                                <div class="col-lg-6">
                                    <input class="au-input au-input--full m-b-30" type="text" placeholder="Your Name" required name="name" />
                                </div>
                                <div class="col-lg-6">
                                    <input class="au-input au-input--full m-b-30" type="email" placeholder="Your Email" required pattern="[^@]+@[^@]+.[a-zA-Z]{2,6}" name="email" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-12">
                                    <textarea class="au-input au-textfield au-input--full" name="message" placeholder="Your Message" required></textarea>
                                </div>
                            </div>
                            <button class="au-btn au-btn--dark au-btn--p70 m-t-30" type="submit">send</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>

      
       </div>
    )
}