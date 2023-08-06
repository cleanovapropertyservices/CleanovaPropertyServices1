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
							<h3>Additional Cleaning Services</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"> Additional Cleaning Services</span></li>
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
										<div className="item" id="vehicle-interior-cleaning">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/9.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href=""><a>Vehicle Interior Cleaning</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="grout-tile-deep-clean">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/8.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-8"><a>Grout and Tile Deep Clean</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="garage-cleanup-organisation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Garage Cleanup and Organisation</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="garden-shed-outdoor-furniture-cleaning">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Garden Shed and Outdoor Furniture Cleaning</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="pest-dropping-cleanup-sanitization">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href=""><a>Pest Dropping Cleanup and Sanitization</a></Link></h3>
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
                      <li><Link scroll={false} href="#vehicle-interior-cleaning">Vehicle Interior Cleaning</Link></li>
                      <li><Link scroll={false} href="#grout-tile-deep-clean">Grout and Tile Deep Clean</Link></li>
                      <li><Link scroll={false} href="#garage-cleanup-organisation">Garage Cleanup and Organisation</Link></li>
                      <li><Link scroll={false} href="#garden-shed-outdoor-furniture-cleaning">Garden Shed and Outdoor Furniture Cleaning</Link></li>
                      <li><Link scroll={false} href="#pest-dropping-cleanup-sanitization">Pest Dropping Cleanup and Sanitization</Link></li>
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
			</Layout>

		</>
	)
}