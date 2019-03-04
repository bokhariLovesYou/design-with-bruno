import React from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import CharacterIndividualComp from "../components/characterIndividualComp"
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

const CharacterComp = props => {
			return (
					<section className="global-section char-section">
						<div className="container-fluid pl-md-0 pr-md-0">
							<div className="row">
							{props.allCharacters.map( (elem, index) => 
								<CharacterIndividualComp 
									key={index}
									index={index}
									name={elem.name}
									url={elem.url}
									image={elem.image}
									backgroundClass={elem.backgroundClass}
									color={elem.color}
								/>
							)}


							</div>
						</div>
					</section>
			);
		}

export default CharacterComp;