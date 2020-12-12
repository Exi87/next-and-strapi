import React from "react";
import Link from "next/link";



export default function ServiceLeft(props) {

    return(
        <div>
                        <div class="service-3-item service-3-item--img-left clearfix">
                            <div class="image">
                                <Link href="/galerie-fashion">
                                <a >
                                    <img src={props.ServiceLeftDescription.imageLeft} alt="Fashion" />
                                </a></Link>
                            </div>
                            <div class="content">
                                <h2 class="title title--num1">
                                    <Link href="/galerie-fashion">
                                        <a >fashion</a>
                                    </Link>

                                </h2>
                                <p>{props.ServiceLeftDescription.textLeft1}</p>
                            </div>
                        </div>
                        <div class="service-3-item service-3-item--img-left clearfix">
                            <div class="image">
                                <Link href="/galerie-fashion">
                                <a >
                                    <img src="https://res.cloudinary.com/duwas1k3k/image/upload/v1606766714/about-me-01_l8kjyt.jpg" alt="Fashion" />
                                </a></Link>
                            </div>
                            <div class="content">
                                <h2 class="title title--num1">
                                    <Link href="/galerie-fashion">
                                        <a >fashion</a>
                                    </Link>

                                </h2>
                                <p>{props.ServiceLeftDescription.textLeft2}</p>
                            </div>
                        </div>  
        </div>
    )
    
}