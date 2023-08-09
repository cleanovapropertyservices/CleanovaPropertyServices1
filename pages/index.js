import React from 'react'
import Slider from '../components/Home/HomeSlider'
import Layout from '../layout/layout'
import Title from '../layout/title'
import Link from 'next/link'
import { Arrow_r, Certificate, Checked, Quotes, Stars } from '../public/svg/icon'
import dynamic from 'next/dynamic'
 
const Services = dynamic(() => import('../components/Home/HomeServices'), { ssr: false })

const right = "/img/about/Steven1.png"
const rightImage = "/img/service/right-image.jpg"
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
										<h3 className="title">We are Industify</h3>
										<p>Industify is a pioneer in design-build specializing in engineering, architecture and construction services to both domestic and international customers. Founded in 1960, Industify is a family-owned company headquartered in Lexington, Ky. with offices across the U.S., Canada and Japan.</p>
										<p>To provide exceptional services to the insurance industry and thier clients, the property owner. We are committed to providing the highest level of professionalism, service response, and quality workmanship.</p>
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
										<p>At Industify Company, we rely on honesty, discipline and hard work and believe our success can be attributed to upholding a simple set of core values that date back to the beginning of the company.</p>
										<p>Industify is an integrated design-build firm offering engineering, architecture and construction services to domestic and international customers throughout the U.S. Unique to Industify is the fact that we conduct all disciplines in-house in a collaborative environment.</p>
									</div>
									<div className="signature">
										<Certificate className="fn__svg" />
										<p>We have a<br />ISO Certificate.</p>
									</div>
								</div>
								<div className="right_part">
									<div className="r_inner">
										<div className="top_section">
											<div className="badge_holder">
												<div className="badge_left">
													<div className="b_title">
														<h3>World&apos;s Leading Industry<br />Corporation</h3>
													</div>
													<div className="b_desc"><span className="year">10</span><span className="text">Years of Experience</span></div>
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
															<p>We have completed over 3000 projects.</p>
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
															<p>Company has over 2000 workers.</p>
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
