import React from "react";
import Link from "next/link";



export default function ServiceLeft(props) {

    return(
        <div>
                        <div class="service-3-item service-3-item--img-left clearfix">
                            <div class="image">
                                <Link href="/galerie-fashion">
                                  <a >
                                    <img 
                                        src={props.ServiceLeftDescription.imageLeftFashion} 
                                          alt="Fashion"
                                     />
                                    </a>
                                </Link>
                            </div>
                            <div class="content">
                                <h2 class="title title--num1">
                                    <Link href="/galerie-fashion">
                                        <a >{props.ServiceLeftDescription.fashion}</a>
                                    </Link>

                                </h2>
                                <p>{props.ServiceLeftDescription.fashionText}</p>
                            </div>
                        </div>
                        <div class="service-3-item service-3-item--img-left clearfix">
                            <div class="image">
                                <Link href="/galerie-fashion">
                                   <a >
                                      <img
                                            src={props.ServiceLeftDescription.imageLeftPortrait}
                                            alt="Fashion" 
                                        />
                                 </a>
                                </Link>
                            </div>
                            <div class="content">
                                <h2 class="title title--num1">
                                    <Link href="/galerie-fashion">
                                    <a >{props.ServiceLeftDescription.portrait}</a>
                                    </Link>

                                </h2>
                                <p>{props.ServiceLeftDescription.portraitText}</p>
                            </div>
                        </div>  
        </div>
    )
    
}