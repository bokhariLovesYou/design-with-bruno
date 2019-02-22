import React from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Fade from 'react-reveal/Fade';

const MenuToggled = props => {
	return (
		
		<div className="toggled-menu--parent">
			<div className={'menu-toggled ' + props.menuToggledClasses}></div>
			<div className={'menu-toggled-parent ' + props.menuChildClasses}>
				<div className="menu-links-content"> 
					<ul>
						<Fade bottom delay={300} duration={900} spy={props.menuListAnimation}>
							<AniLink cover to="/" duration={0.7} bg="#ff3c00"><li>Home</li></AniLink>
							<AniLink paintDrip to="/testquiz/" duration={0.5} hex="#4b96ae"><li>Take The Test</li></AniLink>
							<AniLink cover to="/characters/" duration={0.5} hex="#000"><li>Explore Characters</li></AniLink>
							<AniLink cover to="/" duration={0.7} bg="#ff3c00"><li>Learn More</li></AniLink>
						</Fade>
					</ul>
				</div>
			</div>
		</div>
	);
}

export default MenuToggled;