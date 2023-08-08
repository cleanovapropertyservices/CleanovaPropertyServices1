import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'


export default function Services() {
	return (
		<>
			<Title title='Services' />
			<Layout>

				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Our Services</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"> Our Services</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}


				{/* Sidebar Page */}
				<div className="industify_fn_sidebarpage">
					<div className="container">
						<div className="s_inner">


							{/* Main Sidebar: Left */}
							<div className="industify_fn_leftsidebar">
								<ul className="industify_fn_service_list">
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s1.jpg)" }}></div>
													<Link href="/business-workspace-sanitation"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/business-workspace-sanitation"><a>Business and Workspace Sanitation</a></Link></h3>
													<p>Elevate workplace hygiene with our professional care. At the forefront of our mission is the protection of your team, ensuring a pristine and health-conscious environment. We believe in boosting your productivity by maintaining a thoroughly sanitized workspace.</p>
												</div>
												<div className="read_more">
													<Link href="/business-workspace-sanitation"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s8.jpg)" }}></div>
													<Link href="/home-cleaning-services"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/home-cleaning-services"><a>Home Cleaning Services</a></Link></h3>
													<p>Breathe new life into your living space with our comprehensive home cleaning services. Our expert cleaners are dedicated to making homes sparkle from floor to ceiling, ensuring that every corner gleams. Restore the comfort and freshness you deserve in your personal sanctuary.</p>
												</div>
												<div className="read_more">
													<Link href="/home-cleaning-services"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s10.jpg)" }}></div>
													<Link href="/specialized-cleaning-solutions"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/specialized-cleaning-solutions"><a>Specialized Cleaning Solutions</a></Link></h3>
													<p>Dive into our specialized cleaning solutions, where we employ advanced techniques for those unique cleaning challenges. Offering tailored solutions for hard-to-tackle areas, our expertise goes beyond the conventional clean, ensuring every detail is addressed.</p>
												</div>
												<div className="read_more">
													<Link href="/specialized-cleaning-solutions"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s11.jpg)" }}></div>
													<Link href="/additional-cleaning-services"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/additional-cleaning-services"><a>Additional Cleaning Services</a></Link></h3>
													<p>Complementing our primary offerings, we proudly present our additional cleaning services. These go beyond the basics, ensuring that even the minutiae of your cleaning needs are met with precision. Whatever your requirement, we expand our services to cater to every cleaning nuance.</p>
												</div>
												<div className="read_more">
													<Link href="/additional-cleaning-services"><a>Read More</a></Link>
												</div>
											</div>
										</div>
									</li>
								</ul>

								<div className="clearfix"></div>

								{/*<div className="industify_fn_pagination">
									<ul>
										<li className="active"><span className="current">1</span></li>
										<li><Link href="#"><a>2</a></Link></li>
										<li className="view"><p>Viewing page 1 of 2</p></li>
									</ul>
								</div>*/}


							</div>
							{/* /Main Sidebar: Left */}


							{/* Main Sidebar: Right */}
							<div className="industify_fn_rightsidebar">


								{/* Service List */}
								<div className="service_list_as_function">
									<div className="title">
										<h3>Full list of Services</h3>
									</div>
									<div className="list_holder">
										<ul>
											<li><Link href="/business-workspace-sanitation"><a>Business and Workspace Sanitation</a></Link></li>
											<li><Link href="/home-cleaning-services"><a>Home Cleaning Services</a></Link></li>
											<li><Link href="/specialized-cleaning-solutions"><a>Specialized Cleaning Solutions</a></Link></li>
											<li><Link href="/additional-cleaning-services"><a>Additional Cleaning Services</a></Link></li>
										</ul>
									</div>
								</div>
								{/* /Service List */}

								{/* Get Sidebar */}
								<Sidebar />
								{/* /Get Sidebar */}


							</div>
							{/* Main Sidebar: Right */}

						</div>
					</div>
				</div>
				{/* /Sidebar Page */}
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
