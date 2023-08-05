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
							<h3>Home Cleaning Services</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"> Home Cleaning Services</span></li>
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
										<div className="item" id="lease-property-sanitation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/9.jpg)" }}></div>
													<Link href="/service-single-9"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-9"><a>Lease Property Sanitation</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="post-occupancy-cleanup">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/8.jpg)" }}></div>
													<Link href="/service-single-8"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-8"><a>Post-Occupancy Cleanup</a></Link></h3>
													<p>Our manufacturing services provide assurance to clients that their people, processes, and products are as safe and efficient as possible. From logistics and compliance, to</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="pre-occupancy-scrub-down-inspection">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
													<Link href="/service-single-7"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Pre-Occupancy Scrub-down and Inspection</a></Link></h3>
													<p>Helping our customers go to market and maintain expensive machinery with lubricants, fluids and additives testing plus inspection and certification for technical, performance and lifecycle</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="cleaning-services-before-property-sale">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/6.jpg)" }}></div>
													<Link href="/service-single-6"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-6"><a>Cleaning Services before Property Sale</a></Link></h3>
													<p>The Shale Oil and Gas Revolution has changed the energy world. Industify has kept pace by providing crucial and timely exploration, production, quality, quantity inventory,</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="detailed-cleaning-kitchens-bathrooms-ovens">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/5.jpg)" }}></div>
													<Link href="/service-single-5"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-5"><a>Detailed Cleaning of Kitchens, Bathrooms, and Ovens</a></Link></h3>
													<p>Today’s energy and commodities industries power and feed the world economy. The efficient and effective operation of these projects is vital to sustained energy growth</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="wall-ceiling-sanitation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/4.jpg)" }}></div>
													<Link href="/service-single-4"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-4"><a>Wall and Ceiling Sanitation</a></Link></h3>
													<p>Get your medical device tested and into the hands of your customers faster than ever before. Time to market starts with partnership, and for more</p>
												</div>
											</div>
										</div>
									</li>
                  <li>
										<div className="item" id="mildew-mould-remediation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/4.jpg)" }}></div>
													<Link href="/service-single-4"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-4"><a>Mildew and Mould Remediation</a></Link></h3>
													<p>Get your medical device tested and into the hands of your customers faster than ever before. Time to market starts with partnership, and for more</p>
												</div>
											</div>
										</div>
									</li>
                  <li>
										<div className="item" id="house-deck-pathway-power-washing">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/4.jpg)" }}></div>
													<Link href="/service-single-4"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-4"><a>House, Deck, and Pathway Power Washing</a></Link></h3>
													<p>Get your medical device tested and into the hands of your customers faster than ever before. Time to market starts with partnership, and for more</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="transparent-surface-cleanup">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/4.jpg)" }}></div>
													<Link href="/service-single-4"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-4"><a>Transparent Surface (Window) Cleanup</a></Link></h3>
													<p>Get your medical device tested and into the hands of your customers faster than ever before. Time to market starts with partnership, and for more</p>
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
											<li><Link scroll={false} href="#lease-property-sanitation"><a>Lease Property Sanitation</a></Link></li>
											<li><Link scroll={false} href="#post-occupancy-cleanup"><a>Post-Occupancy Cleanup</a></Link></li>
											<li><Link scroll={false} href="#pre-occupancy-scrub-down-inspection"><a>Pre-Occupancy Scrub-down and Inspection</a></Link></li>
											<li><Link scroll={false} href="#cleaning-services-before-property-sale"><a>Cleaning Services before Property Sale</a></Link></li>
											<li><Link scroll={false} href="#detailed-cleaning-kitchens-bathrooms-ovens"><a>Detailed Cleaning of Kitchens, Bathrooms, and Ovens</a></Link></li>
											<li><Link scroll={false} href="#wall-ceiling-sanitation"><a>Wall and Ceiling Sanitation</a></Link></li>
											<li><Link scroll={false} href="#mildew-mould-remediation"><a>Mildew and Mould Remediation</a></Link></li>
											<li><Link scroll={false} href="#house-deck-pathway-power-washing"><a>House, Deck, and Pathway Power Washing</a></Link></li>
											<li><Link scroll={false} href="#transparent-surface-cleanup"><a>Transparent Surface (Window) Cleanup</a></Link></li>
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
