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
													<div className="img_abs" style={{ "backgroundImage": "url(img/slider/SpecializedCleaningSolutions.png)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Rug and Carpet Deep Clean</a></Link></h3>
													<p>G'day to your carpets! At Cleanova, we give your rugs and carpets a thorough refresh, reaching deep into the fibres to lift out stubborn dirt and stains. Leave it to us, and we'll make sure your flooring looks and feels brand spanking new.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="furniture-upholstery-freshening">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/2.png)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Furniture Upholstery Freshening</a></Link></h3>
													<p>Dusty old couches? No worries! We breathe new life into your furniture, ensuring every lounge, chair, and sofa in your home gets a proper spruce up. With Cleanova, your furnishings will feel as refreshing as a cool breeze on a hot summer's day.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="comprehensive-springtime-cleaning">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/slider/residential-cleaning.png)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Comprehensive Springtime Cleaning</a></Link></h3>
													<p>Spring in Oz means one thing - a proper clean-up! We tackle every nook and cranny, ensuring your home shines brighter than the Southern Cross. With our springtime cleaning, every corner of your space will feel rejuvenated and ready for the year ahead.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="in-depth-sanitization-sterilization">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/3.png)" }}></div>
												</div>
												<div className="title">
													<h3><Link href="#"><a>In-Depth Sanitization and Sterilization</a></Link></h3>
													<p>Keeping things clean as a whistle is essential, especially these days. Our team goes the extra mile, ensuring that germs and bacteria don't stand a chance. We're all about giving you that peace of mind in true blue style.</p>
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
													<h3><Link href="#"><a>Deep Bathroom Cleaning</a></Link></h3>
													<p>From the taps to the tiles, we give your bathroom the makeover it deserves. Say goodbye to soap scum and hello to a sparkling space. After we're done, your bathroom will shine brighter than the sun over Bondi Beach.</p>
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
											<li><Link scroll={false} href="#rug-carpet-deep-clean">Rug and Carpet Deep Clean</Link></li>
											<li><Link scroll={false} href="#furniture-upholstery-freshening">Furniture Upholstery Freshening</Link></li>
											<li><Link scroll={false} href="#comprehensive-springtime-cleaning">Comprehensive Springtime Cleaning</Link></li>
											<li><Link scroll={false} href="#in-depth-sanitization-sterilization">In-Depth Sanitization and Sterilization</Link></li>
											<li><Link scroll={false} href="#thorough-bathroom-scrub-down">Deep Bathroom Cleaning</Link></li>
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
