import React from "react"
import { Link } from "gatsby"
import Layout from "../../components/layout"
import Header from "../../components/header"
import MainLayOut from "../../components/main-layout"
import CharacterUnique from "../../components/characterUnique"
// import CharacterComp from "../../components/characterComp"
import PageTransition from 'gatsby-plugin-page-transitions'
import TransitionLink from 'gatsby-plugin-transition-link'
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// importing images
import Bruno from "../../images/character-1.svg"
import Character1 from "../../images/character-2.svg"
import Character2 from "../../images/character-3.svg"
import Character3 from "../../images/character-4.svg"
// import Character4 from "../../images/character-5.svg"
import Character5 from "../../images/character-6.svg"
import Character6 from "../../images/character-7.svg"
import Character7 from "../../images/character-8.svg"
import Character8 from "../../images/character-9.svg"
import Character9 from "../../images/character-10.svg"
import Character10 from "../../images/character-11.svg"
import Character11 from "../../images/character-12.svg"
import Character12 from "../../images/character-13.svg"



const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};


class Chloe extends React.Component {

	  state = {
	    header: [
	      {
	        class: 'header',
	        menuToggledClasses: 'not-active',
	        menuChildClasses: 'not-active'
	      }
	    ],
	    name: 'Chloe',
	    image: Character10,
	    buttonText: 'Take the Test',
	    title: 'Vamp',
	    subTitle: 'Below are her inspirations',
	    charLongerDesc: 'She is easy to fall in love with but she will unlikely love back. She’d rather get disappointed in her passion and leave “with her father to America for the fair”.',
	    themeText: 'color-seventeen',
	    themeBG: 'bg-seventeen',
	    portfolio: [
	    	{
	    		websiteName: 'Mobius',
	    		websiteURL: 'https://mobius.ml/',
	    		websiteImage: 'https://i.imgur.com/HZxn9EM.png'
	    	},
	    	{
	    		websiteName: 'Emergence',
	    		websiteURL: 'https://www.emcap.com/',
	    		websiteImage: 'https://i.imgur.com/En5ZCxH.png'
	    	},
	    	{
	    		websiteName: 'Clubhouse',
	    		websiteURL: 'https://clubhouse.io/',
	    		websiteImage: 'https://i.imgur.com/X2SJXu2.png'
	    	},
	    	{
	    		websiteName: 'Marvel App',
	    		websiteURL: 'https://marvelapp.com/',
	    		websiteImage: 'https://i.imgur.com/hon64Qx.png'
	    	}	    	
	    ]
	  }


	 togglerDrawer = () => {
	    if (this.state.header[0].menuToggledClasses === 'not-active' || this.state.header[0].menuToggledClasses === 'not-active close') {
	      this.setState (prevState => ({
	      	class: prevState.header[0].class = 'header main-header-active',
	        class: prevState.header[0].menuToggledClasses = 'menu-drawer-active',
	        childClass: prevState.header[0].menuChildClasses = 'menu-child-active',
	        menuListAnimation: prevState.menuListAnimation = true
	      }));
	    } else {
	      this.setState (prevState => ({
	      	class: prevState.header[0].class = 'header',
	        class: prevState.header[0].menuToggledClasses = 'not-active close',
	        childClass: prevState.header[0].menuChildClasses = 'not-active',
	        menuListAnimation: prevState.menuListAnimation = false
	      }));
	    }
	 }


	render() { 

		return (
			<PageTransition>
				<div className="body">
					<Header toggleDrawer={this.togglerDrawer} menuToggledClasses={this.state.header[0].menuToggledClasses} menuListAnimation={this.menuListAnimation} menuChildClasses={this.state.header[0].menuChildClasses} customClass={this.state.header[0].class}/>
				</div>
				<CharacterUnique 
					name={this.state.name}
					image={this.state.image}
					rightColumnButtonText={this.state.buttonText}
					title={this.state.title}
					subTitle={this.state.subTitle}
					themeText={this.state.themeText}
					themeBG={this.state.themeBG}
					charLongerDesc={this.state.charLongerDesc}
					portfolio={this.state.portfolio}
				/>
			</PageTransition>
		)
	}
}






export default Chloe;




