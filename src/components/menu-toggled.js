import React, {Component} from "react"
import { Link } from "gatsby"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Fade from 'react-reveal/Fade';

class MenuToggled extends Component {

	render () {

	let durationOne = 0.7;
	let durationTwo = 0.5;
	if (typeof window !== 'undefined') {
		if (window.innerWidth < 500) {
			durationOne = 0.4;
			durationTwo = 0.4;
		}
	}

	return (
		
			<div className="toggled-menu--parent">
				<div className={'menu-toggled ' + this.props.menuToggledClasses}></div>
				<div className={'menu-toggled-parent ' + this.props.menuChildClasses}>
					<div className="menu-links-content"> 
						<ul>
							<Fade bottom delay={300} duration={900} spy={this.props.menuListAnimation}>
								<AniLink cover to="/" duration={durationOne} bg="#ff3c00"><li>Home</li></AniLink>
								<AniLink cover to="/testquiz/" duration={durationTwo} hex="#4b96ae"><li>Take The Test</li></AniLink>
								<AniLink cover to="/characters/" duration={durationTwo} hex="#000"><li>Explore Characters</li></AniLink>
								<AniLink cover to="/" duration={durationOne} bg="#ff3c00"><li>Learn More</li></AniLink>
							</Fade>
						</ul>
					</div>
				</div>
			</div>
		);
	}
}

export default MenuToggled;