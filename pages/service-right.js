import React from "react";
import Link from "next/link";



export default function ServiceRight(props) {

    return(
        <div>
             <div class="service-3-item service-3-item--img-right clearfix">
                            <div class="image">
                            <Link href="/galerie-mariage">
                                <a >
                                <img src="https://res.cloudinary.com/duwas1k3k/image/upload/v1606766714/about-me-01_l8kjyt.jpg" alt="Fashion" />
                                </a>
                            </Link>
                            </div>
                            <div class="content">
                                <h2 class="title title--num2">
                                <Link href="/galerie-mariage">
                                        <a >Mariage</a>
                                    </Link>
                                </h2>
                                <p>{props.textRight1}</p>
                            </div>
                        </div>
                         <div class="service-3-item service-3-item--img-right clearfix">
                            <div class="image">
                                <Link href="galerie-event">
                                <a >
                                <img src="https://res.cloudinary.com/duwas1k3k/image/upload/v1606766714/about-me-01_l8kjyt.jpg" alt="Fashion" />

                                </a>
                                </Link>
                                
                            </div>
                            <div class="content">
                                <h2 class="title title--num4">
                                <Link href="/galerie-event">
                                        <a >Event</a>
                                    </Link>
                                </h2>
                                <p>{props.textRight2}</p>
                            </div>
                        </div> 
        </div>
    )
    
}