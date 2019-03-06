import React from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const MainLayOut = props => {
			return (
				<div className="home template">
					<section className="global-section">
						<div className="container-fluid pl-md-0 pr-md-0">
							<div className="row">
								<div className="col-md-6 home-box-left">
									<div className="home-box-left-content generic-col">
										<div className="img--container text-center">
											<Fade bottom force={true} distance='2rem' duration={600}>
												<img style={props.randomNum} alt="OneIMS Design Man" className="main-design-man" src={props.leftColumnImageSource} />
											</Fade>
										</div>
										<div className="content-area text-content-main text-center">
											<div className="heading-box pt-4">
												<Fade bottom force={true} delay={300} duration={500}>
													<h1 style={props.randomNum} className={props.mainTitleClasses}>{props.mainHeading}</h1>
												</Fade>
												<Fade bottom force={true} delay={500} duration={500}>
													<h2 className={props.subTitleClasses}>{props.subHeading}</h2>
												</Fade>	
												<Fade bottom force={true} delay={500} duration={500}>
													<p className="sub-title home-third-text text-duration">{props.subTitle}<strong>{props.subTitleBoldText}</strong></p>
												</Fade>
											</div>
											<Fade bottom force={true} distance='0.5rem' delay={700} duration={500}>
												<div className="content">
													<p className="small home-fourth-text">{props.paragraph}</p>
													<p></p>
													<p className="small all-upper-case mb-0 bolder-text gray">{props.poweredText}</p>
												</div>
											</Fade>
										</div>
									</div>
								</div>
								<div className={props.rightBgClass}>
									<div className="home-box-right-content generic-col">
										<div className="top-content text-center">
										<Fade bottom delay={200} duration={500}>
											<h2 className="standard-h2 white title">{props.rightColumnHeading}</h2>
										</Fade>	
										<Fade bottom delay={400} duration={500}>
											<hr className="white title" />
										</Fade>
										</div>
										<div className="img--container text-center">
										<Zoom duration={400} spy={props.bg}>
											<div className={props.dropClasses}></div>
										</Zoom>
										<Zoom delay={props.delay} duration={500} when={props.createLoop}>
											<img alt="OneIMS Character Lady" className="character-holder" src={props.rightColumnImageSource} />
										</Zoom>
										</div>
										<Zoom force={true} delay={props.buttonDelay} duration={500} fraction={0}>
											<div className="button-parent text-center">
												<AniLink cover to="/testquiz/" duration={props.transitionSpeed} hex="#4b96ae"><button className="button button-one">{props.rightColumnButtonText}</button></AniLink>
											</div>
										</Zoom>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			);
		}

export default MainLayOut;