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
import Character13 from "../../images/character-14.svg"



const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};


class Shekhloov extends React.Component {

	  state = {
	    header: [
	      {
	        class: 'header',
	        menuToggledClasses: 'not-active',
	        menuChildClasses: 'not-active'
	      }
	    ],
	    name: 'Shekhloöv',
	    image: Character13,
	    buttonText: 'Take the Test',
	    title: 'Hooligan',
	    subTitle: 'From the story of "My Life"',
	    charLongerDesc: 'Crazy about duels, plays a part of a “very terrible man” in life. But at the same time he suffers from not being able to express himself.',
	    themeText: 'color-purple',
	    themeBG: 'bg-purple',
	    portfolio: [
	    	{
	    		websiteName: 'Northern Wolf',
	    		websiteURL: 'https://www.northernwolf.co/',
	    		websiteImage: 'https://i.imgur.com/5hXL8DH.jpg'
	    	},
	    	{
	    		websiteName: 'Pixel Fish',
	    		websiteURL: 'https://www.pixelfish.co.uk/',
	    		websiteImage: 'https://i.imgur.com/WgGGYvM.png'
	    	},
	    	{
	    		websiteName: 'Shopify',
	    		websiteURL: 'https://www.shopify.com/',
	    		websiteImage: 'https://i.imgur.com/MCwmzND.jpg'
	    	},
	    	{
	    		websiteName: 'Sprout Social',
	    		websiteURL: 'https://sproutsocial.com/',
	    		websiteImage: 'https://i.imgur.com/of0QtxX.jpg'
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






export default Shekhloov;




