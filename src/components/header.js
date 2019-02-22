import React from "react"
import { Link } from "gatsby"
import MenuToggled from "./menu-toggled"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


const Header = props => {
	return (
		<div className="header-parent">
		  <header className={props.customClass}>
		  <div className="left-logo abs-pos">
		  		<AniLink cover to="/" duration={0.7} bg="#ff3c00"><h5>Design with OneIMS</h5></AniLink>
		  </div>
			<button onClick={props.toggleDrawer} className="js-menuBtn  menuBtn  btn--round  btn--menu">
			        <span className="btn--menu__line top"></span>
			        <span className="btn--menu__line middle"></span>
			        <span className="btn--menu__line bottom"></span>
			    </button>
		  </header>

		  <MenuToggled menuListAnimation={props.menuListAnimation} menuToggledClasses={props.menuToggledClasses} menuChildClasses={props.menuChildClasses} />
		</div>

	);
}

export default Header;