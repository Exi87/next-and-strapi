import React from "react";
import Head from "next/head";
// import "../styles/main.css";
import "../assets/junior/css/font-face.css";
import "../assets/junior/css/switcher.css";
import Header from './heads'
import Footer from './footer'
//import "../assets/junior/vendor/animejs/anime.min.js";
//import "../assets/junior/vendor/animsition/animsition.min.css";
import "../assets/junior/vendor/bootstrap-progressbar/bootstrap-progressbar-3.3.4.min.css";
import "../assets/junior/vendor/bootstrap4/bootstrap.min.css";
import "../assets/junior/vendor/wow/animate.css";
import "../assets/junior/vendor/css-hamburgers/hamburgers.min.css";
import "../assets/junior/vendor/slick/slick.css";
import "../assets/junior/vendor/wow/animate.css";
import "../assets/junior/vendor/font-awesome-5/css/fontawesome-all.min.css";
import "../assets/junior/vendor/font-awesome-4.7/css/font-awesome.min.css";
import "../assets/junior/vendor/mdi-font/css/material-design-iconic-font.min.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Junior || photograph</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />

        <script
          src="https://code.jquery.com/jquery-3.5.1.min.js"
          integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
          crossOrigin="anonymous"
        ></script>

        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"
          integrity="sha384-Tc5IQib027qvyjSMfHjOMaLkfuWVxZxUPnCJA7l2mCWNIpG9mGCD8wGNIcPD7Txa"
          crossOrigin="anonymous"
        ></script>
      </Head>
<Header />
      <Component {...pageProps} />

      <Footer/>
    </>
  );
}

export default MyApp;
