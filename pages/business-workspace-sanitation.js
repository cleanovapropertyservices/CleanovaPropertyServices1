import Link from 'next/link'
import React from 'react'
import Layout from '../layout/layout'
import Sidebar from '../layout/sidebar'
import Title from '../layout/title'
import { useRouter } from 'next/router';

export default function Services() {
	const router = useRouter();
	return (
		<>
			<Title title='Services' />
			<Layout>

				{/* Page Title */}
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Commercial And Office Cleaning</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"> Commercial And Office Cleaning</span></li>
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
										<div className="item" id="scrubbing-dusting-offices">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s1.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Office & Workplace Cleaning</a></Link></h3>
													<p>Maintain a professional and productive workspace with our comprehensive office cleaning solutions. We meticulously scrub and dust every nook and corner, ensuring a pristine environment that boosts employee morale and leaves a lasting impression on visitors.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="sanitation-shared-spaces">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s2.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Sanitation of Shared Spaces</a></Link></h3>
													<p>High-traffic shared spaces can become a breeding ground for germs and bacteria. We specialize in the sanitation of these areas, employing advanced cleaning methods to eliminate pathogens and ensure a hygienic environment for all users.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="post-construction-cleanup">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s3.png)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Post-Construction Cleanup</a></Link></h3>
													<p>Transition seamlessly from construction to occupancy with our post-construction cleanup services. We swiftly remove debris, dust, and residues, presenting you with a spotless space that’s ready for its new purpose.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="cleaning-services-educational-institutions">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s4.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Cleaning Services for Educational Institutions</a></Link></h3>
													<p>Institutions of learning deserve a clean slate every day. We provide specialized cleaning services for educational facilities, ensuring a safe and healthy environment where students and staff can thrive.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="public-area-maintenance-sanitation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/slider/commercial-cleaning.png)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Cleaning Services for Malls and Stores</a></Link></h3>
													<p>Shopping experiences are elevated in clean environments. Our cleaning solutions for malls and stores ensure shiny floors, dust-free surfaces, and a pleasant ambiance that invites and retains customers.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="transparent-surface-sanitation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s6.png)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Interior & Exterior Window Cleaning</a></Link></h3>
													<p>Let the light shine through spotless windows. Our transparent surface sanitation services guarantee streak-free and germ-free windows that not only elevate aesthetics but also promise a safer touch point for users.</p>
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
									<button className="backButton" onClick={() => router.back()}>🔙</button>
										<h3>Full list of Services</h3>
									</div>
									<div className="list_holder">
										<ul>
											<li><Link href="#scrubbing-dusting-offices" scroll={false}><a>Scrubbing and Dusting of Offices</a></Link></li>
											<li><Link href="#sanitation-shared-spaces" scroll={false}><a>Sanitation of Shared Spaces</a></Link></li>
											<li><Link href="#post-construction-cleanup" scroll={false}><a>Post-Construction Cleanup</a></Link></li>
											<li><Link href="#cleaning-services-educational-institutions" scroll={false}><a>Cleaning Services for Educational Institutions</a></Link></li>
											<li><Link href="#public-area-maintenance-sanitation" scroll={false}><a>Cleaning Services for Malls and Stores</a></Link></li>
											<li><Link href="#transparent-surface-sanitation" scroll={false}><a>Interior & Exterior Window Cleaning</a></Link></li>
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
