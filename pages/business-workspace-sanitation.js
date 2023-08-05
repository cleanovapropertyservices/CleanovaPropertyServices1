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
							<h3>Business and Workspace Sanitation</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current"> Business and Workspace Sanitation</span></li>
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
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/9.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Scrubbing and Dusting of Offices</a></Link></h3>
													<p>For a professional environment to function at its peak, cleanliness is key. Our office cleaning services ensure that your workspaces remain pristine and conducive for productivity. Our experienced team provides tailored solutions that cater to the unique needs of your office, covering all aspects from dusting workstations to sanitizing communal areas.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="sanitation-shared-spaces">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/8.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Sanitation of Shared Spaces</a></Link></h3>
													<p>Common areas can quickly accumulate dirt and grime due to high footfall. Our common area cleaning services maintain cleanliness and hygiene in these high-traffic spaces, like hallways, lobbies, and shared restrooms. We utilize advanced cleaning techniques to ensure a fresh and inviting atmosphere for everyone.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="post-construction-cleanup">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/7.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Post-Construction Cleanup</a></Link></h3>
													<p>Dealing with post-construction debris? Our builders and construction cleaning services handle the heavy lifting so you don't have to. We remove construction waste, dust, and other debris, preparing your new or renovated space for immediate use. Safety, efficiency, and thoroughness are our top priorities.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="cleaning-services-educational-institutions">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/6.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Cleaning Services for Educational Institutions</a></Link></h3>
													<p>In educational institutions, cleanliness directly impacts the health and performance of students and staff. Our school cleaning services maintain a sanitary, safe, and inviting learning environment. We pay special attention to high-touch areas, ensuring all surfaces are disinfected and cleaned to the highest standards.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="public-area-maintenance-sanitation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/5.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Public Area Maintenance and Sanitation</a></Link></h3>
													<p>A clean store attracts more customers and boosts your brand's image. Our supermarket and retail cleaning services ensure that your store always looks its best. From gleaming floors to dust-free shelves, we provide comprehensive cleaning solutions that cater to the unique requirements of the retail environment.</p>
												</div>
											</div>
										</div>
									</li>
									<li>
										<div className="item" id="transparent-surface-sanitation">
											<div className="item_in">
												<div className="img_holder">
													<div className="img_abs" style={{ "backgroundImage": "url(img/service/single/4.jpg)" }}></div>
													<Link href="#"><a></a></Link>
												</div>
												<div className="title">
													<h3><Link href="#"><a>Transparent Surface (Window) Sanitation</a></Link></h3>
													<p>Public facilities are subject to heavy use and require meticulous cleaning for health and safety. Our public facility cleaning services are designed to tackle these challenges. We use the best practices and industry-grade equipment to clean and sanitize public areas, providing a clean, safe, and comfortable environment for all users.</p>
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
											<li><Link href="#scrubbing-dusting-offices" scroll={false}><a>Scrubbing and Dusting of Offices</a></Link></li>
											<li><Link href="#sanitation-shared-spaces" scroll={false}><a>Sanitation of Shared Spaces</a></Link></li>
											<li><Link href="#post-construction-cleanup" scroll={false}><a>Post-Construction Cleanup</a></Link></li>
											<li><Link href="#cleaning-services-educational-institutions" scroll={false}><a>Cleaning Services for Educational Institutions</a></Link></li>
											<li><Link href="#public-area-maintenance-sanitation" scroll={false}><a>Public Area Maintenance and Sanitation</a></Link></li>
											<li><Link href="#transparent-surface-sanitation" scroll={false}><a>Transparent Surface (Window) Sanitation</a></Link></li>
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
