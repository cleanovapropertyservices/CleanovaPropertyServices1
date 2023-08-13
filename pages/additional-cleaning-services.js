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
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/s11.jpg)" }}></div>
												</div>
												<div className="title">
													<h3><Link href=""><a>Vehicle Interior & Exterior Cleaning</a></Link></h3>
													<p>Hitting the road for a classic road trip? We make sure you're cruising in cleanliness. From dust-laden dashboards to crumby crevices, our team dives in to ensure your ride's interior is as stunning as our coastline. Next stop? A gleaming, grime-free car journey.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="grout-tile-deep-clean">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/5.png)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-8"><a>Water Blasters</a></Link></h3>
													<p>Tough stains and grime don't stand a chance against our high-pressure water blasters. Whether it's your driveway that's seen one too many barbies or walls stained by unpredictable weather, we tackle it all, leaving surfaces looking as pristine as the waters of the Whitsundays.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="garage-cleanup-organisation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.png)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Upholstery cleaning</a></Link></h3>
													<p>Your favourite armchair or family sofa deserves a touch of TLC. We delve deep into the fabric, eradicating dirt and refreshing your furnishings. Post-Cleanova treatment, your upholstery will feel as inviting as a warm evening by the campfire.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="garden-shed-outdoor-furniture-cleaning">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/9.png)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="/service-single-7"><a>Restoration Cleaning</a></Link></h3>
													<p>Got a space that's seen better days? Our restoration cleaning services are the ultimate facelift. Whether it's old estates or spaces tarnished by time, we renew and rejuvenate, ensuring every corner shines with its former glory, just like the golden sands at sunrise.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="pest-dropping-cleanup-sanitization">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/12.png)" }}></div>
												</div>
												<div className="title">
													<h3><Link href=""><a>Mattress cleaning</a></Link></h3>
													<p>Sleep is essential, especially after a long day enjoying adventure. We ensure your bed is a sanctuary, diving deep into mattresses to remove dust mites and allergens. With Cleanova, you're set for a rest as peaceful as the Outback under a starry night.</p>
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
                      <li><Link scroll={false} href="#vehicle-interior-cleaning">Vehicle Interior & Exterior Cleaning</Link></li>
                      <li><Link scroll={false} href="#grout-tile-deep-clean">Water Blasters</Link></li>
                      <li><Link scroll={false} href="#garage-cleanup-organisation">Upholstery cleaning</Link></li>
                      <li><Link scroll={false} href="#garden-shed-outdoor-furniture-cleaning">Restoration Cleaning</Link></li>
                      <li><Link scroll={false} href="#pest-dropping-cleanup-sanitization">Mattress cleaning</Link></li>
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
