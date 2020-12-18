import React from "react";
import Header from './heads'
import fetch from 'isomorphic-unfetch'
import Footer from './footer'
import "../styles/main.css";

const  Home = ({acceuil})=> {


  
  return (
    
    <body className="animsition">
      <div className="page-wrapper">
    

        <section className="slide slide-1">
          <div className="container-fluid">
            <div className="section__content section__content--w1760">
              <div
                className="slide-wrapper js-slick-wrapper"
                data-slick-autoplay="true"
                data-slick-fade="true"
              >
                <div className="slide__content js-slick-content">
                  <div className="slide-item">
                    <img

                     //src={acceuil.banner.url}
                      src="https://res.cloudinary.com/duwas1k3k/image/upload/v1606748626/junior-slide11_ra8n0q.jpg"
                      alt="Slide 1"
                    />
                    <div
                      className="slide__caption js-first-slick clearfix d-none d-lg-block"
                      data-animation="fadeInUp"
                      data-animation-delay=".1s"
                    >
                      <div className="number float-left">01</div>
                      <h2 className="text" >
                        {acceuil.sliderText}
                        {/* CHAQUE IMAGE A UNE HISTOIRE À RACONTER */}
                      </h2>
                    </div>
                  </div>
              
                </div>
                <div className="slide-arrows">
                  <i className="zmdi zmdi-arrow-left js-slick-arrow-left prev"></i>
                  <i className="zmdi zmdi-arrow-right js-slick-arrow-right next"></i>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="recent-blog p-t-70">
          <div className="container">
            <div className="recent-blog__item clearfix">
              <div className="image-wrap float-lg-left">
                <div className="image">
                  <a href="blog-detail.html">
                    <img
                      src="https://res.cloudinary.com/duwas1k3k/image/upload/v1606753174/blog-01_lvqjmh.jpg"
                      alt="PHOTOGRAPHY IS A FORM OF TIME TRAVEL"
                    />
                  </a>
                </div>
                <div className="bg-layer d-none d-lg-block bg-layer--right"></div>
              </div>
              <div className="content content--right">
                <h2 className="title">
                  {acceuil.homeTitle}
                  {/* LA PHOTOGRAPHIE EST UNE FORME DE VOYAGE DANS LE TEMPS */}
                </h2>

                <p className="text">
                  {acceuil.homeDescription}
                  {/* Sed ut perspiciatis unde omnis iste natus error sit volupta
                  accusantium doloremque laudantium, totam rem aperi, eaque ipsa
                  quae ab illo inventore veritatis et quasi archit beatae vitae
                  dicta sunt explicabo. Nemo enim ipsam alt voluptatem quia
                  voluptas sit aspernatur aut odit aut mov fugit, sed quia
                  consequuntur. */}
                </p>
              </div>
            </div>
          </div>
        </section>

   
      </div>
    </body>
  );
}


export async function getServerSideProps(){
const {API_URL}=process.env

   const res = await fetch('http://localhost:1337/HOME')
  //const res = await fetch(`${API_URL}/Acceuils`)
  
  const data = await res.json()

  return{
    props:{
      acceuil:data
    }

  }
}
export default Home


