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
import BrunoFavicon from "../images/bruno-favicon.png"
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
import Character13 from "../images/character-14.svg"



const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};


class LearnMore extends React.Component {

	  state = {
	    header: [
	      {
	        class: 'header',
	        menuToggledClasses: 'not-active',
	        menuChildClasses: 'not-active'
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
			<div className="learn bg-black">
			<Header toggleDrawer={this.togglerDrawer} menuToggledClasses={this.state.header[0].menuToggledClasses} menuListAnimation={this.menuListAnimation} menuChildClasses={this.state.header[0].menuChildClasses} customClass={this.state.header[0].class}/>
				<div className="container">
					<div className="content">
						<Fade>
						<h1 className="main-heading all-upper-case bolder-text home-first-text gold-text mb-3">Who is Bruno? And What am I doing here?</h1>
						<p className="small gold-text">While working professionaly as a creative, I had always thought that design was extremely subjective. What I like, you might not - and what you like, I might not. A study in 2015 took place which suggested that 'choice' or 'likes/dislikes' are a result of pesonality.<br /><br />Design with Bruno wants to test that theory from a design perspective. <br /><br /> It asks you to take a quiz, and tries to guess what kind of a personality you have 😀. </p>
						<h2 className="main-heading all-upper-case bolder-text home-first-text gold-text mb-3">okay, then what?</h2>
						<p className="small gold-text">So from there, it assigns you a character based on your personality. Each character has different traits. And based on those traits - they share some of their web design inspirations. </p>
						<p className="small gold-text">The test, thus, speaks to the hidden designer in you (that's too dramatic, lol, seriously it's just a fun quiz, so chill and enjoy).</p> 
						<p className="small gold-text">Most of the people also do not know what they like when they come to web design (specifically those people who do not belong to the specific industry. Therefore, as an agency - it's important to make great design, however - it's also important to make 'successful' design. A successful design is that, which the client approves of. They approve something, when a design matches what they were 'expecting'.</p> 
						<p className="small gold-text">Design with Bruno also provides them the ability to explore some of the modern designs on the web - which can help add more clarity to a project. </p>
						</Fade>
					</div>
				</div>
				<div className="bottom-fade"></div>
			</div>
		)
	}
}







export default LearnMore;




