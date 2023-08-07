import React from 'react'
import Layout from '../layout/layout'
import Title from '../layout/title'
import { Location } from '../public/svg/icon'
import Link from 'next/link'



export default function Contact() {
	return (
		<>
			<Layout>
				{/* Page Title */}
				<Title title='Contact' />
				<div className="industify_fn_pagetitle">
					<div className="container">
						<div className="title_holder">
							<h3>Get in Touch</h3>
							<div className="industify_fn_breadcrumbs">
								<ul>
									<li><Link href="/"><a title="Home">Home</a></Link></li>
									<li className="separator"><span></span></li>
									<li><span className="bread-current">Book a Service</span></li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				{/* /Page Title */}

				{/* Contact */}
				<div className="industify_fn_contact">
					<div className="container">
						<div className="contact_in">

							<div className="map_holder">
								{/*<iframe width="100%" height="400" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://maps.google.com/maps?width=100%25&amp;height=400&amp;hl=en&amp;q=1%20Grafton%20Street,%20Dublin,%20Ireland+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>*/}
								<iframe width="100%" height="500" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" src="https://www.google.com/maps/d/u/1/embed?mid=1fOi1ligisi8LXZJ7yxqt75hGnT9Ei_8&ehbc=2E312F"></iframe>
							</div>

							<div className="contact_holder">
								<div className="contact_left">
									<h3>Get in touch with us</h3>
									<form className="contact_form" action="/" method="post" autoComplete="off" data-email="frenifyteam@gmail.com">


										{/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="success" data-success="Your message has been received, we will contact you soon."></div>
										<div className="empty_notice"><span>Please Fill Required Fields</span></div>
										{/*  */}
										<div className="items">
											<div className="item">
												<input id="name" type="text" placeholder="Name" />
											</div>
											<div className="item">
												<input id="email" type="email" placeholder="Email" />
											</div>
											<div className="item">
												<textarea id="message" placeholder="Message"></textarea>
											</div>
											<div className="item">
												<Link href="#"><a id="send_message">Send Message</a></Link>
											</div>
										</div>
									</form>
								</div>
								<div className="contact_right">

									<div className="fn_cs_location_list">
										<ul className="list">

											<li className="location_item">
												<div className="item">
													<div className="title_holder">
														<span className="icon_wrapper">
															<span className="icon">
																<Location className="fn__svg" />
															</span>
															<span className="shape"></span>
														</span>
														<h3>Porirua City</h3>
													</div>
													<div className="content_holder">
														<ul>
															<li>27 Hukatai Street, Elsdon, Porirua, 5022, NZ</li>
															<li>Phone: +64 022-0455-048</li>
															<li>Email: <Link href="mailto:cleanovapropertyservices@gmail.com"><a>cleanovapropertyservices@gmail.com</a></Link></li>
														</ul>
													</div>
												</div>
											</li>

											<li className="location_item">
												<div className="item">
													<div className="title_holder">
														<span className="icon_wrapper">
															<span className="icon">
																<Location className="fn__svg" />
															</span>
															<span className="shape"></span>
														</span>
														<h3>Wellington city</h3>
													</div>
													<div className="content_holder">
														<ul>
															<li>92 Constable Street, Newtown, Wellington, New Zealand</li>
															<li>Phone: +64 223-993-001</li>
															<li>Email: <Link href="mailto:cleanovapropertyservices@gmail.com"><a>cleanovapropertyservices@gmail.com</a></Link></li>
														</ul>
													</div>
												</div>
											</li>

											<li className="location_item">
												<div className="item">
													<div className="title_holder">
														<span className="icon_wrapper">
															<span className="icon">
																<Location className="fn__svg" />
															</span>
															<span className="shape"></span>
														</span>
														<h3>Lower Hutt & Upper Hutt City</h3>
													</div>
													<div className="content_holder">
														<ul>
															<li>14-12 Tacoma Drive, Tōtara Park, Upper Hutt, New Zealand</li>
															<li>Phone: +64 220-455-048</li>
															<li>Email: <Link href="mailto:cleanovapropertyservices@gmail.com"><a>cleanovapropertyservices@gmail.com</a></Link></li>
														</ul>
													</div>
												</div>
											</li>

										</ul>
									</div>

								</div>
							</div>
						</div>
					</div>
				</div>
				{/* /Contact */}

			</Layout>

		</>
	)
}
