import React from "react";
import Link from "next/link";


const Header = ({logo})=>{

  console.log(logo);

    return(
    <header className="header-desktop header-1 d-none d-lg-block">
        <div className="container-fluid">
          <div className="section__content section__content--w1760">
            <div className="row no-gutters header__content">
              <div className="col-md-3 wrap ">
                <a href="/">
                  <img src="https://res.cloudinary.com/duwas1k3k/image/upload/v1606748634/Lens_v_tnnuuw.jpg" />
                </a>
              </div>

              <div className="col-md-9 navheader-wrap">
                <nav className="nav-header">
                  <ul className="list-unstyled list-inline">

                  <li className="list-inline-item ">

                    <Link href='/' >
                    <a className="list-inline-item ">Acceuil</a>
                    </Link>
                   
                    </li>

                    <li className="list-inline-item ">

                     <Link href='/about' >
                    <a className="list-inline-item ">A propos</a>
                   </Link>

                  </li>
                    {/* <Link href="/"
                    
                    >
                      <a className="list-inline-item ">Acceuil</a>
                    </Link> */}
{/* 
                    <Link href="/about"
                    
                    >
                      <a className="list-inline-item ">A propos</a>
                    </Link> */}
                    {/* <li className="list-inline-item ">
                      <a href="about">A propos</a>
                    </li> */}
                      {/* <li className="list-inline-item has-mega">
                       <Link href="#">  <a >Albums</a></Link>
                    
                      <div className="mega-menu">
                        <div className="row no-gutters">
                          <div className="col-lg-6 mega-menu__col">
                            <ul className="mega-menu__list list-unstyled">
                              <li>
                                <Link href="portrait">
                                <a >Portrait</a></Link>
                              </li>

                              <li>
                                <Link href="fashion">
                                <a >Fashion</a>
                                </Link>
                              
                              </li>

                              <li>
                                <Link href="mariage">
                                <a >Mariage</a>
                                </Link>
                               
                              </li>

                              <li>
                                <Link href="event">
                                <a >Evenements</a>
                                </Link>
                               
                              </li>

                              <li>
                                <a
                                  class="border-bottom-0"
                                  href="album-v5.html"
                                >
                                  album version 5
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </li>   */}
                    <li className="list-inline-item">

                    <Link href="/service"
                     
                    >
                      <a className="list-inline-item ">Service</a>
                    </Link> </li>

                    {/* <li className="list-inline-item">

                       <Link href="/galerie">
                              <a className="list-inline-item ">Gallerie</a>
                        </Link> </li> */}

                    {/* <li className="list-inline-item">
                      <a href="service.html">Service</a>
                    </li> */}
                       <li className="list-inline-item">

                       <Link href="/contact"
                    
                    >
                      <a className="list-inline-item ">Contact</a>
                    </Link> 
                       </li>
                  
                    {/* <li className="list-inline-item">
                      <a href="contact.html">Contact</a>
                    </li> */}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </header>

    )
}

export async function getServerSideProps(){
  //const {API_URL}=process.env
  
     const res = await fetch('http://localhost:1337/logo')
    //const res = await fetch(`${API_URL}/home`)
    
    const data = await res.json()
  
    return{
      props:{
        logo:data
      }
  
    }
  }

export default Header