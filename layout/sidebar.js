import React from 'react'
import Link from 'next/link'
import { FileDoc, FilePdf, FileZip } from '../public/svg/icon'
import useDownloader from 'react-use-downloader'

export default function Sidebar() {
	const { size, elapsed, percentage, download,
		cancel, error, isInProgress } = useDownloader();

    return (
        <>
            <div className="industify_fn_sidebar">
                <div className="industify_fn_sidebar_in">

                    <div className="widget_block">
                        <div className="industify_fn_widget_estimate">
                            <div className="img_holder">
                                <span className="helper1"></span>
                                <span className="helper2"></span>
                                <span className="helper3"></span>
                                <span className="helper4"></span>
                                <span className="helper5"></span>
                                <span className="helper6"></span>
                                <div className="abs_img" style={{"backgroundImage":"url(img/widget/1.jpg)"}}></div>
                            </div>
                            <div className="bfwe_inner">
                                <p>Let's get started! Contact us for a free quote on your next home improvement project.</p>
                                <Link href="/contact"><a>Request an Estimate</a></Link>
                            </div>
                        </div>
                    </div>

                    <div className="widget_block widget_brochure">
                        <div className="wid-title">
                            <span>Company Presentation</span>
                        </div>
                        <div className="industify_fn_widget_brochure">
                            <div className="fn_brochures">
                                <ul>
                                    <li>
                                        <div className="br_item">
                                            <a href='/favicon.ico' download="favicon.ico"></a>
                                            <span className="icon">
                                                <FilePdf className="fn__svg" />
                                            </span>
                                            <span className="text">Download .PDF</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <a href='/favicon.ico' download="favicon.ico"></a>
                                            <span className="icon">
                                            <FileZip className="fn__svg" />
                                            </span>
                                            <span className="text">Download Businss card</span>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="br_item">
                                            <a href='/favicon.ico' download="favicon.ico"></a>
                                            <span className="icon">
                                            <FileDoc className="fn__svg" />
                                            </span>
                                            <span className="text">Download .DOC</span>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}
