import React from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Character1 from "../images/character-2.svg"
import Character2 from "../images/character-3.svg"
import Character3 from "../images/character-4.svg"
// import Character4 from "../images/character-5.svg"
import Character5 from "../images/character-6.svg"
import Character6 from "../images/character-7.svg"
import Character7 from "../images/character-8.svg"
import Character8 from "../images/character-9.svg"
import Character9 from "../images/character-10.svg"
import Character10 from "../images/character-11.svg"
import Character11 from "../images/character-12.svg"
import Character12 from "../images/character-13.svg"

const CharacterIndividualComp = props => {
			return (
					
					<div className={"col-md-6 col-lg-7 home-box-left no-min-height char-box-left " + props.backgroundClass}>
						<div className="home-box-left-content generic-col pt-0 pb-0">
							<div className="img--container text-center">
								<Fade bottom distance='2rem' duration={600}>
									<img alt="OneIMS Design Man" className="main-design-man char-img" src={props.image} />
								</Fade>
							</div>
							<div className="content-area text-content-main text-center">
								<div className="heading-box pt-4">
									<Fade bottom distance='1rem' delay={300} duration={500}>
										<AniLink cover to={props.url} duration={props.transitionDuration} bg={props.color}><button className="button button-one"><h3 className="char-heading all-upper-case bolder-text home-first-text text-duration">{props.name}</h3></button></AniLink>
									</Fade>
								</div>
							</div>
						</div>
					</div>
			);
		}

export default CharacterIndividualComp;