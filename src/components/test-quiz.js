import React from "react"
import { Link } from "gatsby"
import ChoiceComponent from "../components/choiceComponent"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

const TestQuizLayout = props => {
			return (
				<div className="home template">
					<section className="global-section">
						<div className="container-fluid pl-md-0 pr-md-0">
							<div className="row">
								<div className="col-md-6 home-box-left">
									<div className="home-box-left-content generic-col pt-0">
										<div className="content-area text-content-main text-center">
											<div className="heading-box pt-4">
										{/* Change duration to 400 and props.handleReRenderOptionsTwo to props.handleReRenderOptions in order to go back to default effect*/}
												<Fade bottom distance='4rem' fraction={0} force={true} duration={500} when={props.handleReRenderOptionsTwo}>
													<h2 className="inner-page-sub-heading pink-text bolder-text">{props.questionCount}</h2>
												</Fade>
												<div className="img--container img--test-page text-center">
													<Zoom delay={300} duration={600} force={true} fraction={0} when={props.handleReRenderOptions}>
														<img alt="OneIMS Design Man" className="main-design-man img-test-page" src={props.imgSource} />
													</Zoom>
												</div>
												<Fade bottom delay={500} duration={400} distance="1rem" force={true} when={props.handleReRenderOptions}>
													<h2 className="question-title all-upper-case bolder-text black-text">{props.questionTitle}</h2>
												</Fade>
											</div>
										</div>
									</div>
								</div>
								<div className="col-md-6 home-box-right bg-teal">
									<div className="home-box-right-content generic-col">
										<div className="top-content text-center">
											<Fade bottom duration={400} force={true} when={props.handleReRenderOptionsTwo}>
												<h2 className="standard-h2 white title inner-page-sub-heading">{props.choiceTitle}</h2>
											</Fade>
										</div>
										<div className="choices-parent pt-4">

											{props.choiceItems.map( (elem, index) => 
											<Fade key={index} bottom distance='1rem' fraction={0} force={true} delay={props.addDelay()} when={props.handleReRenderOptions} duration={400}>
												<ChoiceComponent 
													key={index}
													index={index}
													alphabet={elem.choiceAlpha}
													choiceText={elem.choiceOption}
													handleQuestionChange={props.handleQuestionChange}
													redirect={props.redirect}
													classes={'choice-box row align-items-center ' + elem.selected}
												/>
											</Fade>
											)}																		
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div>
			);
		}

export default TestQuizLayout;



