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
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s7.jpg)" }}></div>
													<Link href="/service-single-9"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-9"><a>Lease Property Sanitation</a></Link></h3>
													<p>When leasing a property, ensuring its cleanliness is paramount. We offer meticulous sanitation services to enhance the appeal of leased properties and ensure they are in top condition for tenants.</p>
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
													<p>After tenants vacate, a thorough cleanup ensures the property is ready for its next occupants. Our post-occupancy cleanup rejuvenates spaces, making them feel as good as new.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="pre-occupancy-scrub-down-inspection">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s8.jpg)" }}></div>
													<Link href="/service-single-7"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Pre-Occupancy Scrub-down and Inspection</a></Link></h3>
													<p>Before moving in, ensure your property is hygienic and spotless. We provide an intensive scrub-down and inspection service, ensuring every room and corner is in impeccable condition for new occupants.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="cleaning-services-before-property-sale">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/slider/residential-cleaning.jpg)" }}></div>
													<Link href="/service-single-6"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-6"><a>Cleaning Services before Property Sale</a></Link></h3>
													<p>First impressions matter when selling a property. Our cleaning services ensure that potential buyers are met with a gleaming, well-maintained space, significantly boosting its market appeal.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="detailed-cleaning-kitchens-bathrooms-ovens">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s9.jpg)" }}></div>
													<Link href="/service-single-5"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-5"><a>Detailed Cleaning of Kitchens, Bathrooms, and Ovens</a></Link></h3>
													<p>High-use areas like kitchens and bathrooms demand special attention. Our detailed cleaning targets grime, build-up, and spots in these areas, including deep-cleaning of ovens, ensuring they shine and function like brand new.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="wall-ceiling-sanitation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/slider/commercial-cleaning.jpg)" }}></div>
													<Link href="/service-single-4"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-4"><a>Wall and Ceiling Sanitation</a></Link></h3>
													<p>Over time, walls and ceilings collect dust, stains, and cobwebs. Our sanitation services revitalize these large surfaces, enhancing the overall cleanliness and air quality of the property.</p>
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
													<p>Mould and mildew can pose significant health risks. We specialize in their remediation, employing advanced techniques to thoroughly remove and prevent their return, ensuring a safer living environment.</p>
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
													<p>Exterior surfaces often bear the brunt of natural elements. Our power washing services strip away dirt, algae, and stains from houses, decks, and pathways, restoring their original beauty and prolonging their lifespan.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="transparent-surface-cleanup">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s6.jpg)" }}></div>
													<Link href="/service-single-4"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="/service-single-4"><a>Transparent Surface (Window) Cleanup</a></Link></h3>
													<p>Clear windows elevate a property's aesthetic. We offer window cleanup services that remove dirt, streaks, and residues, ensuring sparkling clarity that enhances natural light and views.</p>
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
				{/* <!-- Call to Action --> */}
				<div className="fn_cs_call_to_action">
					<div className="container">
						<div className="cta_holder">
							<div className="title_holder">
								<h3>Let us make your space shine like a mirror!</h3>
								<p>Embark on a journey to pristine living. Book today for a complimentary cleaning assessment.</p>
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
