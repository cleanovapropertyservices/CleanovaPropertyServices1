import React, { useState, useEffect } from 'react'
import MetisMenu from 'metismenujs';
import Link from 'next/link'
import { Facebook, Instagram, Linkedin, Twitter, Vk } from '../public/svg/social/IconSocial';


export default function MobileHeader() {

	const [isMobileMenu, setMobileMenu] = useState(false);
	const MobileMenuTrueFalse = () => setMobileMenu(!isMobileMenu)

	useEffect(() => {
		new MetisMenu("#metismenu");
	}, []);

	return (
		<>
			<div className="industify_fn_mobilemenu_wrap">
				<div className="industify_fn_toppanel">
					<div className="left_panel">
						<div className="info"><Link href="/tel:+64220455048"><a>(+64) 220 - 455 - 048</a></Link></div>
						<div className="info"><Link href="/mailto:CleanovaPropertyServices@gmail.com"><a>CleanovaPropertyServices@gmail.com</a></Link></div>
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
				{/* <!-- Call Now MOBILE --> */}
				<div className="m_toll_free_lang">
					{/*<div className="lang_switcher">
						<ul>
							<li className="active"><span>Eng</span></li>
							<li><Link href="#"><a><span>Spa</span></a></Link></li>
							<li><Link href="#"><a><span>Rus</span></a></Link></li>
						</ul>
					</div>*/}
					<div className="m_toll_free">
						<span className="shape1"></span>
						<span className="shape2"></span>
						<span className="shape3"></span>
						<div className="tf_in">
							<div className="img_holder" style={{ "backgroundImage": "url(img/supportContact.png)" }}></div>
							<p><span>Call Now:</span> 0220455048</p>
						</div>
					</div>
				</div>
				{/* <!-- /Call Now MOBILE --> */}
				{/* <!-- LOGO & HAMBURGER --> */}
				<div className="logo_hamb">
					<div className="in">
						<div className="menu_logo">
							<Link href="/"><a><img src="img/logo-light.png" alt="Industry Template" /></a></Link>
						</div>
						<div onClick={MobileMenuTrueFalse} className={!isMobileMenu ? "hamburger hamburger--collapse-r" : "hamburger hamburger--collapse-r is-active"}>
							<div className="hamburger-box">
								<div className="hamburger-inner"></div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /LOGO & HAMBURGER --> */}
				{/* <!-- MOBILE DROPDOWN MENU --> */}
				<div className={!isMobileMenu ? "mobilemenu" : "mobilemenu opened d-block"}>
					<div>
						<nav >
							<ul className="metismenu" id="metismenu">
								<li>
									<Link href="#"><a>Home</a></Link>
									{/*<ul>
										<li><Link href="/"><a>Home Alpha</a></Link></li>
										<li><Link href="/index-1"><a>Home Beta</a></Link></li>
										<li><Link href="/index-2"><a>Home Gama</a></Link></li>
										<li><Link href="/index-3"><a>Home Delta</a></Link></li>
									</ul>*/}
								</li>
								{/*<li><Link href="/portfolio"><a>Projects</a></Link></li>*/}
								<li>
									<Link href="#"><a className="has-arrow">Our Services</a></Link>
									<ul>
										<li>
											<Link href="/service-single-9"><a className="has-arrow">Aerospace and Defense</a></Link>
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
											<Link href=""><a className="has-arrow">Automative Manufacturing</a></Link>
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
											<Link href="/service-single-7"><a className="has-arrow">Chemical Industry</a></Link>
											<ul>
												<li><Link href="/office-cleaning">CARPET CLEANING</Link></li>
												<li><Link href="/office-cleaning">UPHOLSTERY CLEANING</Link></li>
												<li><Link href="/office-cleaning">SPRING CLEANING</Link></li>
											</ul>
										</li>
									</ul>
								</li>
								{/*<li>
									<Link href="#"><a className="has-arrow">Pages</a></Link>

									<ul>
										<li><Link href="/gallery"><a>Gallery</a></Link></li>
										<li><Link href="/404"><a>404 Page</a></Link></li>
										<li><Link href="/principles"><a>Our Principles</a></Link></li>
										<li><Link href="/services"><a>Our Services</a></Link></li>
										<li><Link href="/blog-full"><a>Blog Full</a></Link></li>
										<li><Link href="/protected"><a>Protected Page</a></Link></li>
									</ul>
								</li>
								<li><Link href="/blog"><a>Blog</a></Link></li>*/}
								<li><Link href="/contact"><a>Book A service</a></Link></li>
							</ul>
						</nav>
					</div>
				</div>
				{/* <!-- /MOBILE DROPDOWN MENU --> */}
			</div>
		</>
	)
}
