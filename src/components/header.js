import React, {Component} from "react"
import { Link } from "gatsby"
import MenuToggled from "./menu-toggled"
import TransitionLink from 'gatsby-plugin-transition-link'
import AniLink from "gatsby-plugin-transition-link/AniLink";


class Header extends Component {
	
	render() {

	let duration = 0.7;
	if (typeof window !== 'undefined') {
		if (window.innerWidth < 500) {
			duration = 0.4;
		}
	}	

		return (
			<div className="header-parent">
			  <header className={this.props.customClass}>
			  <div className="left-logo abs-pos">
			  		<AniLink cover to="/" duration={duration} bg="#ff3c00"><h5>Design with BrunÖ</h5></AniLink>
			  </div>
				<button onClick={this.props.toggleDrawer} className="js-menuBtn  menuBtn  btn--round  btn--menu">
				        <span className="btn--menu__line top"></span>
				        <span className="btn--menu__line middle"></span> 
				        <span className="btn--menu__line bottom"></span>
				    </button>
			  </header>
 
			  <MenuToggled menuListAnimation={this.props.menuListAnimation} menuToggledClasses={this.props.menuToggledClasses} menuChildClasses={this.props.menuChildClasses} />
			</div>

		);
	}
}

export default Header;