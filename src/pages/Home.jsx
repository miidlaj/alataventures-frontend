import React from 'react'
import Footer from '../componets/Footer'
import Partner from '../componets/Partner'
import Contact from '../componets/Contact'
import Portfolio from '../componets/Portfolio'
import About from '../componets/About'
import Slider from '../componets/Slider'
import Navbar from '../componets/Navbar'


const Home = () => {
  return (
    <>
     <div className="boxed_wrapper">
        <div className="preloader" />

        {/* main header */}
        <Navbar />
        {/* End main header */}

        {/* Start Main Slider */}
        <Slider />
        {/* End Main Slider */}

        {/*Start About Style1 Area*/}
        <About />
        {/*End About Style1 Area*/}

        {/*Start Latest Portfolio Area*/}
        <Portfolio />
        {/*End Latest Portfolio Area*/}

        {/*Start Contact Form Section*/}
        <Contact />
        {/*End Contact Form Section*/}

        {/*Start Partner Area*/}
        <Partner />
        {/*End Partner Area*/}

        {/*Start footer area*/}
        <Footer />
        {/*End footer area*/}
        
      </div>
      <button className="scroll-top scroll-to-target" data-target="html">
        <span className="icon-angle" />
      </button>
    </>
  )
}

export default Home