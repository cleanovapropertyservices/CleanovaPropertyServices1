import React, { useRef, useState } from 'react'
import Layout from '../layout/layout'
import Title from '../layout/title'
import { Location } from '../public/svg/icon'
import Link from 'next/link'
import emailjs from '@emailjs/browser';
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

export default function Contact() {
	const form = useRef();
	const [check, setCheck] = useState([false, false]);
	const [messageSubmit, setMessageSubmit] = useState("");

	const isValidEmail = (value) => { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value) }
	const isValidPhone = (value) => { return /^(?:(?:\+?1\s*(?:[.-]\s*)?)?(?:\(\s*([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9])\s*\)|([2-9]1[02-9]|[2-9][02-8]1|[2-9][02-8][02-9]))\s*(?:[.-]\s*)?)?([2-9]1[02-9]|[2-9][02-9]{2})\s*(?:[.-]\s*)?([0-9]{4})(?:\s*(?:#|x\.?|ext\.?|extension)\s*(\d+))?$/.test(value) }

  const sendEmail = (e) => {
    e.preventDefault();
		setMessageSubmit("")

		if (form.current.from_email.value === "" || form.current.from_phone.value === "" || form.current.message.value === "") {
			setMessageSubmit("Please complete all fields.")
		}

		if (!isValidEmail(form.current.from_email.value)) {
			setMessageSubmit("Please enter a valid email address.")
		}
    emailjs.sendForm('service_vunh9gg', 'template_5xug8jx', form.current, 'MY2YBVfnXvBRVei6P')
		.then((result) => {
				Swal.fire({
					title: "<h3 style='color:#0e0e0e'>" + "Sweet!" + "</h3>",
					icon: "success",
					text: "Your message has been received, we will contact you soon.",
				});

				form.current.from_name.value = ""
				form.current.from_email.value = ""
				form.current.from_phone.value = ""
				form.current.message.value = ""
				setCheck([false, false])
		}, (error) => {
				setMessageSubmit("* error");
		});
  };

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
									<form className="contact_form" ref={form} onSubmit={sendEmail}>


										{/* Don't remove below code in avoid to work contact form properly.
									You can chance dat-success value with your one. It will be used when user will try to contact via contact form and will get success message. */}

										<div className="success" data-success="Your message has been received, we will contact you soon.">{ messageSubmit }</div>
										<div className="empty_notice"><span>Please Fill Required Fields</span></div>
										{/*  */}
										<div className="items">
											<input type='hidden' name="from_emailorpone" value={check[0] && check[1] ? "email or phone" : (check[0] ? "email" : (check[1] ? "phone" : ""))} />
											<div className="item">
												<input id="name" type="text" placeholder="Name" name='from_name' />
											</div>
											<div className="item">
												<input id="email" type="email" placeholder="Email" name='from_email' />
											</div>
											<div className="item">
												<input id="tel" type="tel" placeholder="Phone" name='from_phone' />
											</div>
											<div>
												<span>Preferred way of contact :</span>
												<div className='checkboxs-group'>
												<div className='checkbox'>
														<input type='checkbox' id='emailCheck' checked={check[0]} onChange={() => {setCheck([!check[0], check[1]])}}/> <label htmlFor='emailCheck'>Email</label>
													</div>
													<div className='checkbox'>
														<input type='checkbox' id='phoneCheck' checked={check[1]} onChange={() => {setCheck([check[0], !check[1]])}}/> <label htmlFor='phoneCheck'>Phone</label>
													</div>
												</div>
											</div>
											<div className="item">
												<textarea id="message" placeholder="Message" name='message'></textarea>
											</div>
											<ReCAPTCHA 
												sitekey={"6LdFcYonAAAAAO9kmkFjB21VJL3Y6enbcj_O_vO0"}
												onChange={() => {console.log('ok')}}
											/>
											<div className="item">
												<a id="send_message" onClick={sendEmail}>Send Message</a>
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
