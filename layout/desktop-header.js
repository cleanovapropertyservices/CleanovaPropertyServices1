import React, { useState } from 'react'
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';

const background = "/img/about/supportContact.png"

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
                            <Link href="tel:+64223993001"><a>(+64) 223 - 993 - 001</a></Link>
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
                            <img className="desktop_logo" src="img/logo-dark1.png" alt="Industry HTML Template" />
                            <img className="desktop_logo_dark" src="img/logo-light1.png" alt="Industry HTML Template" />
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
                                    <li><Link href="/index-3"><a>Home</a></Link></li>
                                </ul>*/}
                            </li>
                            {/*<li>
                                <Link href="/portfolio"><a>Projects</a></Link>
                            </li>*/}
                            <li className="menu-item-has-children">
                                <Link href="/services"><a>Our Services</a></Link>
                                <ul className="sub-menu">
                                    <li>
                                        <Link href="/business-workspace-sanitation"><a>Business and Workspace Sanitation</a></Link>
                                        <ul>
                                            <li><Link scroll={false} href="/business-workspace-sanitation#scrubbing-dusting-offices">Scrubbing and Dusting of Offices</Link></li>
                                            <li><Link scroll={false} href="/business-workspace-sanitation#sanitation-shared-spaces">Sanitation of Shared Spaces</Link></li>
                                            <li><Link scroll={false} href="/business-workspace-sanitation#post-construction-cleanup">Post-Construction Cleanup</Link></li>
                                            <li><Link scroll={false} href="/business-workspace-sanitation#cleaning-services-educational-institutions">Cleaning Services for Educational Institutions</Link></li>
                                            <li><Link scroll={false} href="/business-workspace-sanitation#public-area-maintenance-sanitation">Public Area Maintenance and Sanitation</Link></li>
                                            <li><Link scroll={false} href="/business-workspace-sanitation#transparent-surface-sanitation">Transparent Surface (Window) Sanitation</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/home-cleaning-services"><a>Home Cleaning Services</a></Link>
                                        <ul>
                                            <li><Link scroll={false} href="/home-cleaning-services#lease-property-sanitation">Lease Property Sanitation</Link></li>
                                            <li><Link scroll={false} href="/home-cleaning-services#post-occupancy-cleanup">Post-Occupancy Cleanup</Link></li>
                                            <li><Link scroll={false} href="/home-cleaning-services#pre-occupancy-scrub-down-inspection">Pre-Occupancy Scrub-down and Inspection</Link></li>
                                            <li><Link scroll={false} href="/home-cleaning-services#cleaning-services-before-property-sale">Cleaning Services before Property Sale</Link></li>
                                            <li><Link scroll={false} href="/home-cleaning-services#detailed-cleaning-kitchens-bathrooms-ovens">Detailed Cleaning of Kitchens, Bathrooms, and Ovens</Link></li>
                                            <li><Link scroll={false} href="/home-cleaning-services#wall-ceiling-sanitation">Wall and Ceiling Sanitation</Link></li>
                                            <li><Link scroll={false} href="/home-cleaning-services#mildew-mould-remediation">Mildew and Mould Remediation</Link></li>
                                            <li><Link scroll={false} href="/home-cleaning-services#house-deck-pathway-power-washing">House, Deck, and Pathway Power Washing</Link></li>
                                            <li><Link scroll={false} href="/home-cleaning-services#transparent-surface-cleanup">Transparent Surface (Window) Cleanup</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/specialized-cleaning-solutions"><a>Specialized Cleaning Solutions</a></Link>
                                        <ul>
                                            <li><Link scroll={false} href="/specialized-cleaning-solutions#rug-carpet-deep-clean">Rug and Carpet Deep Clean</Link></li>
                                            <li><Link scroll={false} href="/specialized-cleaning-solutions#furniture-upholstery-freshening">Furniture Upholstery Freshening</Link></li>
                                            <li><Link scroll={false} href="/specialized-cleaning-solutions#comprehensive-springtime-cleaning">Comprehensive Springtime Cleaning</Link></li>
                                            <li><Link scroll={false} href="/specialized-cleaning-solutions#in-depth-sanitization-sterilization">In-Depth Sanitization and Sterilization</Link></li>
                                            <li><Link scroll={false} href="/specialized-cleaning-solutions#thorough-bathroom-scrub-down">Thorough Bathroom Scrub-down</Link></li>
                                            <li><Link scroll={false} href="/specialized-cleaning-solutions#floor-maintenance-care">Floor Maintenance and Care</Link></li>
                                            <li><Link scroll={false} href="/specialized-cleaning-solutions#maintenance-assistance-facilities">Maintenance Assistance for Facilities</Link></li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link href="/additional-cleaning-services"><a>Additional Cleaning Services</a></Link>
                                        <ul>
                                            <li><Link scroll={false} href="/additional-cleaning-services#vehicle-interior-cleaning">Vehicle Interior Cleaning</Link></li>
                                            <li><Link scroll={false} href="/additional-cleaning-services#grout-tile-deep-clean">Grout and Tile Deep Clean</Link></li>
                                            <li><Link scroll={false} href="/additional-cleaning-services#garage-cleanup-organisation">Garage Cleanup and Organisation</Link></li>
                                            <li><Link scroll={false} href="/additional-cleaning-services#garden-shed-outdoor-furniture-cleaning">Garden Shed and Outdoor Furniture Cleaning</Link></li>
                                            <li><Link scroll={false} href="/additional-cleaning-services#pest-dropping-cleanup-sanitization">Pest Dropping Cleanup and Sanitization</Link></li>
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
                                <Link href="/contact"><a>Book A service</a></Link>
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
                                <p><span>Call Now:</span> <Link href="tel:+64223993001"><a>(+64) 223 - 993 - 001</a></Link></p>
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
