import React from "react";
import Link from "next/link"

export default function Footer(){

    return(
        <footer className="footer footer--dark">
        <div className="container">
          <div className="row">
            {/* <div class="col-lg-4">
                      <div class="footer__logo">
                          <a href="index1.html">
                              <img src="images/icon/Lens v.jpg" alt="Umber" />
                          </a>
                      </div>
                  </div>  */}
            <div className="col-lg-4">
              <div className="footer__social">
                <a 
                href="https://www.facebook.com/Lens-Vid%C3%A9o-Photo-2039459022982620/"
                
                target='_blank'
                >
                  <i className="zmdi zmdi-facebook"></i>
                </a>
                <a 
                   target='_blank'
                href="https://www.instagram.com/p/CHZOLFojVVD/?igshid=ye33zhuz9hh8"
                
                >
                  <i className="zmdi zmdi-instagram"></i>
                </a>
                <a href="#">
                  <i className="zmdi zmdi-twitter"></i>
                </a>
                {/* <a className="mr-0" href="#">
                  <i className="zmdi zmdi-dribbble"></i>
                </a> */}
              </div>
            </div>
            <div className="col-lg-4">
              <div className="footer__copyright">
                © 2020 by{" "}
                <a
                  href="https://stormy-forest-47935.herokuapp.com"
                  target="_blank"
                  style={{color : '#fff'}}
                >
                  Exinord
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    )
}