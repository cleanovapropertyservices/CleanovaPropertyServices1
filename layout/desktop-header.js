import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';

const background = "img/call.png"

export default function DesktopHeader() {

    const [isActive, setActive] = useState(false);
    const activeTrueFalse = () => setActive(!isActive)
    const [isSelect, setSelect] = useState("USD");

    return (
        <>
            <div className="industify_fn_header">

                {/* <!-- Header: Top Panel --> */}
                <div className="industify_fn_toppanel">
                    <div className="left_panel">
                        <div className="info">
                            <Link href="tel:+64220455048"><a>(+64) 220 - 455 - 048</a></Link>
                        </div>
                        <div className="info">
                            <Link href="mailto:rendycoder.com@gmail.com"><a>CleanovaPropertyServices@gmail.com</a></Link>
                        </div>
                        <div className="industify_fn_social_list">
                            <ul>
                            <li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Facebook className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Twitter className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Instagram className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Vk className="fn__svg" />
									</a></Link>
								</li>
								<li>
									<Link href="#"><a target="_blank" rel="noreferrer">
										<Linkedin className="fn__svg" />
									</a></Link>
								</li>
                            </ul>
                        </div>
                    </div>
                </div>
                {/* <!-- /Header: Top Panel --> */}

                {/* <!-- Header: Bottom Panel --> */}
                <div className="header_inner">
                    <div className="menu_logo">
                        <Link href="/"><a>
                            <img className="desktop_logo" src="img/logo-light.png" alt="Industry HTML Template" />
                            <img className="desktop_logo_dark" src="img/logo-dark.png" alt="Industry HTML Template" />
                        </a></Link>
                    </div>
                    <div className="menu_nav">
                        <ul className="industify_fn_main_nav vert_nav">
                            <li>{/* className="menu-item-has-children" */}
                                <Link href="/"><a>Home</a></Link>
                                {/*<ul className="sub-menu">
                                    <li><Link href="/"><a>Home Alpha</a></Link></li>
                                    <li><Link href="/index-1"><a>Home Beta</a></Link></li>
                                    <li><Link href="/index-2"><a>Home Gamma</a></Link></li>
                                    <li><Link href="/index-3"><a>Home Delta</a></Link></li>
                                </ul>*/}
                            </li>
                            {/*<li>
                                <Link href="/portfolio"><a>Projects</a></Link>
                            </li>*/}
                            <li className="menu-item-has-children">
                                <Link href="/services"><a>Our Services</a></Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link href="/service-single-9"><a>COMMERCIAL CLEANING</a></Link>
                                        <ul>
                                            <li><Link href="/office-cleaning">OFFICE CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">COMMON AREA CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">BUILDERS & CONSTRUCTION CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">SCHOOLS & EDUCATION PROVIDER CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">SUPERMARKET & RETAIL CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">PUBLIC FACILITY CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">WINDOW CLEANING</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/service-single-9"><a>RESIDENTIAL CLEANING</a></Link>
                                        <ul>
                                            <li><Link href="/office-cleaning">RENTAL PROPERTY CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">MOVE OUT CLEANING & END OF TENANCY CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">PRE TENANCY CLEANING & CHECKS</Link></li>
                                            <li><Link href="/office-cleaning">PRE SALE CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">WALLS & CEILING CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">MOULD & MILDEW CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">DECK CLEANING, PATH CLEANING & HOUSE WASHING</Link></li>
                                            <li><Link href="/office-cleaning">WINDOW CLEANING</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/service-single-9"><a>SPECIALITY CLEANING</a></Link>
                                        <ul>
                                            <li><Link href="/office-cleaning">CARPET CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">UPHOLSTERY CLEANING</Link></li>
                                            <li><Link href="/office-cleaning">SPRING CLEANING</Link></li>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            {/*<li className="menu-item-has-children">
                                <Link href="#"><a>Pages</a></Link>
                                <ul className="sub-menu">
                                    <li><Link href="/gallery"><a>Gallery</a></Link></li>
                                    <li><Link href="/404"><a>404 Page</a></Link></li>
                                    <li><Link href="/principles"><a>Our Principles</a></Link></li>
                                    <li><Link href="/services"><a>Our Services</a></Link></li>
                                    <li><Link href="/blog-full"><a>Blog Full</a></Link></li>
                                    <li><Link href="/protected"><a>Protected Page</a></Link></li>
                                </ul>
                            </li>
                            <li>
                                <Link href="/blog"><a>Blog</a></Link>
                            </li>*/}
                            <li>
                                <Link href="/contact"><a>Book A services</a></Link>
                            </li>
                        </ul>
                    </div>
                    <div className="toll_free_lang">
                        {/*<div className="lang_switcher">
                            <span onClick={activeTrueFalse} className="click">{isSelect}</span>
                        </div>
                        <div className={isActive ? "industify_fn_moving_lang opened" : "industify_fn_moving_lang"} style={{ "position": "absolute", "left": "1281.16px", "top": "105.085px" }}>
                            <ul onClick={activeTrueFalse}>
                                <li onClick={() => setSelect("Eng")}><span>Eng</span></li>
                                <li onClick={() => setSelect("Spa")}><span>Spa</span></li>
                                <li onClick={() => setSelect("Rus")}><span>Rus</span></li>
                            </ul>
                        </div>*/}
                        <div className="toll_free">
                            <span className="shape1"></span>
                            <span className="shape2"></span>
                            <span className="shape3"></span>
                            <div className="tf_in">
                                <div className="img_holder" style={{ backgroundImage: `url(${background})` }}></div>
                                <p><span>Toll Free:</span> <Link href="tel:+64220455048"><a>(+64) +64220455048</a></Link></p>
                            </div>
                        </div>

                    </div>
                </div>
                {/* <!-- /Header: Bottom Panel --> */}

            </div>
            <div className="my-class"></div>
        </>
    )
}
