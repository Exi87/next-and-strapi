import React from "react";
import Link from "next/link";



export default function ServiceRight(props) {

    return(
        <div>
             <div class="service-3-item service-3-item--img-right clearfix">
                            <div class="image">
                            <Link href="/galerie-mariage">
                                <a >
                                <img 
                                
                                src={props.ServiceRightDescription.imageRightMariage}

                                
                                alt="Fashion" />
                                </a>
                            </Link>
                            </div>
                            <div class="content">
                                <h2 class="title title--num2">
                                <Link href="/galerie-mariage">
                                <a >{props.ServiceRightDescription.mariage}</a>
                                    </Link>
                                </h2>
                                <p>{props.ServiceRightDescription.mariageText}</p>
                            </div>
                        </div>
                         <div class="service-3-item service-3-item--img-right clearfix">
                            <div class="image">
                                <Link href="galerie-event">
                                <a >
                                <img 
                                
                                src={props.ServiceRightDescription.imageRightEvent}

                                
                                alt="Fashion" />

                                </a>
                                </Link>
                                
                            </div>
                            <div class="content">
                                <h2 class="title title--num4">
                                <Link href="/galerie-event">
                                <a >{props.ServiceRightDescription.event}</a>
                                    </Link>
                                </h2>
                                <p><a >{props.ServiceRightDescription.eventText}</a></p>
                            </div>
                        </div> 
        </div>
    )
    
}