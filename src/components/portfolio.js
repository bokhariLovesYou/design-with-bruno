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

const Portfolio = props => {
			return (		
				<Fade bottom distance='0.6rem' duration={200}>	
					<div>		
						<div className="child">
							<a href={props.websiteURL} target="_blank">
							<img className="page-ss"alt="pageTitle" src={props.websiteImage} />
							<h5 className={"question-title all-upper-case bolder-text black-text one-rem " + props.themeText}>{props.websiteName}</h5>
							</a>
						</div>
					</div>
				</Fade>
			);
		}

export default Portfolio;
