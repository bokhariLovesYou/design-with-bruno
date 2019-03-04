import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import MainLayOut from "../components/main-layout"
import CharacterComp from "../components/characterComp"
import PageTransition from 'gatsby-plugin-page-transitions'
import TransitionLink from 'gatsby-plugin-transition-link'
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
// importing images
import Bruno from "../images/character-1.svg"
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



const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};


class CharactersTemplate extends React.Component {

	  state = {
	    header: [
	      {
	        class: 'header',
	        menuToggledClasses: 'not-active',
	        menuChildClasses: 'not-active'
	      }
	    ],
	    characters: [
	    	{
	    		name: 'Robert',
	    		url: '/characters/robert',
	    		image: Character1,
	    		backgroundClass: 'bg-fourteen',
	    		color: '#C5C6B6'
	    	},
	    	{
	    		name: 'Julia',
	    		url: '/characters/julia',
	    		image: Character2,
	    		backgroundClass: 'bg-two col-lg-5',
	    		color: '#f8246c'
	    	},
	    	{
	    		name: 'Steven',
	    		url: '/characters/steven',
	    		image: Character3,
	    		backgroundClass: 'bg-one col-lg-5',
	    		color: '#ff5252'
	    	},	
	    	{
	    		name: 'Morris',
	    		url: '/characters/morris',
	    		image: Character5,
	    		backgroundClass: 'bg-five',
	    		color: '#ea6c94'
	    	},	
	    	{
	    		name: 'Andy',
	    		url: '/characters/andy',
	    		image: Character6,
	    		backgroundClass: 'bg-four col-lg-12',
	    		color: '#81c683'
	    	},
	    	{
	    		name: 'Phillip',
	    		url: '/characters/phillip',
	    		image: Character7,
	    		backgroundClass: 'bg-six col-lg-4',
	    		color: '#ff4081'
	    	},	
	    	{
	    		name: 'Tuesday',
	    		url: '/characters/tuesday',
	    		image: Character8,
	    		backgroundClass: 'bg-eight col-lg-4',
	    		color: '#63b5f6'
	    	},
	    	{
	    		name: 'Cynthia',
	    		url: '/characters/cynthia',
	    		image: Character9,
	    		backgroundClass: 'bg-nineteen col-lg-4',
	    		color: '#f9c00c'
	    	},	
	    	{
	    		name: 'Chloe',
	    		url: '/characters/chloe',
	    		image: Character10,
	    		backgroundClass: 'bg-seventeen col-lg-6',
	    		color: '#353866'
	    	},
	    	{
	    		name: 'Symphonie',
	    		url: '/characters/symphonie',
	    		image: Character11,
	    		backgroundClass: 'bg-fifteen col-lg-6',
	    		color: '#AACD6E'
	    	},
	    	{
	    		name: 'Mallorie',
	    		url: '/characters/mallorie',
	    		image: Character12,
	    		backgroundClass: 'bg-twelve col-lg-6',
	    		color: '#56445D'
	    	},
	    	{
	    		name: 'shekhloöv',
	    		url: '/characters/shekhloov',
	    		image: Character3,
	    		backgroundClass: 'bg-purple col-lg-6',
	    		color: 'purple'
	    	},	    			    	
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
					<CharacterComp allCharacters={this.state.characters} />
				</div>
			</PageTransition>
		)
	}
}







export default CharactersTemplate;




