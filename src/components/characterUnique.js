import React from "react"
import { Link } from "gatsby"
import Portfolio from "../components/portfolio"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import AniLink from "gatsby-plugin-transition-link/AniLink";

const CharacterUnique = props => {
			return (
				<div className="home template">
					<section className="global-section">
						<div className="container-fluid pl-md-0 pr-md-0">
							<div className="row">
								<div className="col-md-6 home-box-left">
									<div className="home-box-left-content generic-col">
										<div className="content-area text-content-main text-center">
											<div className="heading-box pt-xs-4">
										{/* Change duration to 400 and props.handleReRenderOptionsTwo to props.handleReRenderOptions in order to go back to default effect*/}
												<Fade bottom distance='4rem' fraction={0} force={true} duration={500}>
													<h2 className={"inner-page-sub-heading pink-text bolder-text " + props.themeText}>{props.title}</h2>
												</Fade>
												<div className="img--container img--test-page text-center">
													<Zoom delay={300} duration={600} force={true} fraction={0}>
														<h2 className={"question-title all-upper-case bolder-text charTitle " + props.themeText}>{props.name}</h2>
													</Zoom>
												</div>
												<Fade bottom delay={500} duration={400} distance="1rem" force={true}>
													<h2 className="question-title all-upper-case bolder-text black-text">{props.questionTitle}</h2>
												</Fade>
												<Fade bottom delay={600} duration={400} distance="1rem" force={true}>
													<h4 className="question-title all-upper-case bolder-text black-text pt-2 char-sub-title">{props.subTitle}</h4>
												</Fade>
												<Fade bottom delay={700} duration={400} distance="1rem" force={true}>
													<p className="small home-fourth-text pt-3 pb-3 char-longer-desc">{props.charLongerDesc}</p>
												</Fade>
												<div className="horizontal--scroller--parent mt-3 mb-3">
													<div className="before"></div>
													<div className="after"></div>
													<div className="horizontal-scroll">
													<Fade bottom delay={300} duration={500}>
														{props.portfolio.map( (elem, index) => 
															<Portfolio 
																key={index}
																websiteName={elem.websiteName}
																websiteURL={elem.websiteURL}
																websiteImage={elem.websiteImage}
																themeText={props.themeText}
															/>
														)}
													</Fade>
													</div>
												</div>
											</div>
										</div>
									</div>
								</div>
								<div className={"col-md-6 home-box-right bg-teal " + props.themeBG}>
									<div className="home-box-right-content generic-col pt-xs-0">
										<div className="top-content text-center">
											<Fade bottom duration={400} force={true} when={props.handleReRenderOptionsTwo}>
												<h2 className="standard-h2 white title inner-page-sub-heading">{props.name}</h2>
											</Fade>
										</div>
										<div className="pt-4">
											<div className="img--container text-center">
												<Zoom delay={300} duration={600} force={true} fraction={0}>
													<img alt="OneIMS Design Man" className="main-design-man img-test-page indiv-img" src={props.image} />
												</Zoom>
												<Zoom delay={0} duration={500} fraction={0} force={true}>
													<div className="button-parent text-center">
														<AniLink cover to="/testquiz/" duration={0.5} hex="#4b96ae"><button className="button button-one">{props.rightColumnButtonText}</button></AniLink>
													</div>
												</Zoom>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			);
		}

export default CharacterUnique;



