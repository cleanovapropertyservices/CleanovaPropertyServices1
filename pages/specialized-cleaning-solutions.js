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
							<h3>Specialized Cleaning Solutions</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"> Specialized Cleaning Solutions</span></li>
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
										<div className="item" id="rug-carpet-deep-clean">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/slider/carpet-cleaning.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href=""><a>Rug and Carpet Deep Clean</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="furniture-upholstery-freshening">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/8.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-8"><a>Furniture Upholstery Freshening</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="comprehensive-springtime-cleaning">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Comprehensive Springtime Cleaning</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="in-depth-sanitization-sterilization">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>In-Depth Sanitization and Sterilization</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="thorough-bathroom-scrub-down">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s10.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Thorough Bathroom Scrub-down</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="floor-maintenance-care">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Floor Maintenance and Care</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="maintenance-assistance-facilities">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Maintenance Assistance for Facilities</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
											</div>
										</div>
									</li>
								</ul>

								<div className="clearfix"></div>
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
											<li><Link scroll={false} href="#rug-carpet-deep-clean">Rug and Carpet Deep Clean</Link></li>
											<li><Link scroll={false} href="#furniture-upholstery-freshening">Furniture Upholstery Freshening</Link></li>
											<li><Link scroll={false} href="#comprehensive-springtime-cleaning">Comprehensive Springtime Cleaning</Link></li>
											<li><Link scroll={false} href="#in-depth-sanitization-sterilization">In-Depth Sanitization and Sterilization</Link></li>
											<li><Link scroll={false} href="#thorough-bathroom-scrub-down">Thorough Bathroom Scrub-down</Link></li>
											<li><Link scroll={false} href="#floor-maintenance-care">Floor Maintenance and Care</Link></li>
											<li><Link scroll={false} href="#maintenance-assistance-facilities">Maintenance Assistance for Facilities</Link></li>
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
