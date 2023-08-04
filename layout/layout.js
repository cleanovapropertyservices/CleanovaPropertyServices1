import React, { useState } from 'react'
import DesktopHeader from './desktop-header'
import MobileHeader from './mobile-header'
import Footer from './footer'
import PopRight from './rightpop'

export default function Layout({ children, className}) {
    const [showPopup, setShowPopup] = useState(false)

    setTimeout(() => {
        setShowPopup(true)
    }, 5000);

    return (
        <>
            <div className="industify_fn_wrapper_all" data-nav-skin={className}>

                {/* <!-- Wrapper --> */}
                <div className="industify_fn_wrapper">

                    {/* <!-- Header --> */}
                    <DesktopHeader />
                    {/* <!-- /Header --> */}

                    {/* <!-- Mobile Menu --> */}
                    <MobileHeader />
                    {/* <!-- /Mobile Menu --> */}

                    {/* <!-- Preloader --> */}
                    {/* <Preloader/> */}
                    {/* <!-- /Preloader --> */}

                    {children}



                    {/* Site Footer Start */}
                    <Footer />
                    {/* Site Footer End */}
                    
                    <PopRight show={showPopup} />
                </div>
            </div>
        </>
    )
}
