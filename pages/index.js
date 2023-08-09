import React from 'react'
import Slider from '../components/Home/HomeSlider'
import Layout from '../layout/layout'
import Title from '../layout/title'
import Link from 'next/link'
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../public/svg/icon'
import dynamic from 'next/dynamic'
 
const Services = dynamic(() => import('../components/Home/HomeServices'), { ssr: false })

const right = "/img/about/Steven1.png"
const rightImage = "/img/service/StevenSCOGIF1.gif"
const testimonial = "/img/testimonial/bg.jpg"
const portfolio1 = "/img/portfolio/1.jpg"
const portfolio2 = "/img/portfolio/2.jpg"
const portfolio3 = "/img/portfolio/3.jpg"
const portfolio4 = "/img/portfolio/4.jpg"
const map = "/img/blog/map.png"
const blog1 = "/img/blog/1.jpg"
const blog2 = "/img/blog/2.jpg"
const blog3 = "/img/blog/3.jpg"


export default function Index() {
	return (
		<>
			<Title title='Home Alpha' />
			<Layout className={"transdark"}>
				<Title title='Home Delta' />

				<Slider />
				{/* <!-- Principles Modern --> */}
				{/*<div className="fn_cs_principles_modern">
					<div className="container">
						<div className="inner">
							<div className="shape"><span className="shape1"></span><span className="shape2"></span></div>
							<ul className="fn_cs_miniboxes">
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/principles"><a></a></Link>
											<h3>Honesty</h3>
											<p>Be humble in all dealings with our partners, clients and team members. True wisdom and understanding belong to the humble.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">01</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/principles"><a></a></Link>
											<h3>Passion</h3>
											<p>Success is when we can achieve results in the things we are passionate about and feel as though we are making a difference.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">02</div>
									</div>
								</li>
								<li>
									<div className="item">
										<div className="title_holder">
											<Link href="/principles"><a></a></Link>
											<h3>Quality Work</h3>
											<p>We ensure that all projects are done with utmost professionalism using quality materials while offering clients the support and accessibility.</p>
											<span className="icon">
												<Arrow_r className="fn__svg" />
											</span>
										</div>
										<div className="number_holder">03</div>
									</div>
								</li>
							</ul>
						</div>
					</div>
				</div>*/}
				{/* <!-- /Principles Modern --> */}


				{/* <!-- About Section --> */}
				<div className="about_section">

					{/* <!-- About Shortcode --> */}
					<div className="fn_cs_about">
						<div className="container">
							<div className="a_inner">
								<div className="leftpart">
									<div className="title_holder">
										<h3 className="title">Cleanova P.S. Beyond Clean</h3>
										<p>Established five years ago, Cleanova Property Services set out from Porirua city with a mission to redefine the essence of cleanliness. Our touch transforms both commercial and residential spaces, ensuring unparalleled brilliance and attention to detail.</p>
										<p>Our commitment goes beyond mere cleaning. Every project we undertake showcases our passion for excellence, mirroring our dedication to quality and client satisfaction. With Cleanova, expect a standard that always goes beyond.</p>
									</div>
									<div className="sign_holder">
										<h3 className="name">Steven Eashae</h3>
										<p className="occ">Chief Executive</p>
									</div>
								</div>
								<div className="rightpart">
									{/* <div className="r_inner" id="scene">
										<div className="layer border" data-depth="0.3">
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5">
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" style={{ "backgroundImage": `url(${right})` }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9">
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
									</div> */}
									<div className="r_inner" id="scene" style={{ "transform": "translate3d(0px, 0px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
										<div className="layer border" data-depth="0.3" style={{ "position": "relative", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(21.2782px, -19.0075px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
											<span className="span1"></span>
											<span className="span2"></span>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
										<div className="img_holder layer" data-depth="0.5" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden", "transform": "translate3d(35.4636px, -31.6792px, 0px)" }}>
											<img src="img/thumb/500-560.jpg" alt="" />
											<div className="abs_img" data-bg-img="img/about/Steven1.png" style={{ "backgroundImage": "url(img/about/Steven1.png)" }}></div>
										</div>
										<div className="dots layer" data-switch="disable" data-depth="0.9" style={{ "position": "absolute", "display": "block", "left": "0px", "top": "0px", "transform": "translate3d(63.8345px, -57.0226px, 0px)", "transformStyle": "preserve-3d", "backfaceVisibility": "hidden" }}>
											<img src="img/thumb/500-560.jpg" alt="" />
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /About Shortcode --> */}

				</div>
				{/* <!-- /About Section --> */}


				<Services />



				{/* <!-- Service Section --> */}
				<div className="service_section">

					{/* <!-- About with Rating Shortcode --> */}
					<div className="fn_cs_about_with_rating">
						<div className="container">
							<div className="awr_inner">
								<div className="left_part">
									<div className="title_holder">
										<h3>Why choose our services?</h3>
										<p>At CleanovaP.S., we don't just clean; we transform spaces. Having refined our skills over half a decade, we're more than just a cleaning service. We're a promise of excellence. From bustling commercial hubs to personal sanctuaries at home, our comprehensive range of services caters to a vast spectrum of needs, ensuring every corner doesn't just shine but resonates with impeccable quality.</p>
										<p>Choosing Cleanova means choosing unwavering dedication. Our team, armed with top-tier certifications and the latest industry knowledge, approaches each task with unmatched precision and passion. Whether it's a deep sterilization or a meticulous carpet care, we bring in the same commitment to quality and client satisfaction. With Cleanova, you're not just getting a clean space; you're experiencing a new standard of brilliance.</p>
									</div>
									<div className="signature">
										<Certificate className="fn__svg" />
										<p>We have a<br />IICRC Cleaning Certificate.</p>
									</div>
								</div>
								<div className="right_part">
									<div className="r_inner">
										<div className="top_section">
											<div className="badge_holder">
												<div className="badge_left">
													<div className="b_title">
														<h3>Local Legends in <br />Cleaning Excellence</h3>
													</div>
													<div className="b_desc"><span className="year">5</span><span className="text">Years of Experience</span></div>
												</div>
												<div className="badge_right" style={{ "backgroundImage": `url(${rightImage})` }}></div>
											</div>
											<div className="rating_holder">
												<div className="r_header"></div>
												<div className="r_footer"></div>
												<Link href="#"><a></a></Link>
												<Stars className="fn__svg" />
												<h3 className="rating_number">9.7</h3>
												<h3 className="rating_text">Customer Rating</h3>
											</div>
										</div>
										<div className="bottom_section">
											<div className="list">
												<ul>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Best talent in the industry business.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>One of the most expirienced company.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>We have completed over 2530 projects.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Most dedicated and passionate team.</p>
														</div>
													</li>
													<li>
														<div className="item">
															<span className="icon">
																<Checked className="fn__svg" />
															</span>
															<p>Unmatched expertise in our vast crew.</p>
														</div>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
					{/* <!-- /About with Rating Shortcode --> */}

				</div>
				{/* <!-- /Service Section --> */}


				{/* <!-- Call to Action --> */}
				<div className="fn_cs_call_to_action">
					<div className="container">
						<div className="cta_holder">
							<div className="title_holder">
								<h3>We will Make Your Dream Come True</h3>
								<p>We are focused on sustainable business that delivers the best possible project results.</p>
							</div>
							<div className="link_holder">
								<Link href="/contact"><a>Book A Service</a></Link>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /Call to Action --> */}
			</Layout>

		</>
	)
}
