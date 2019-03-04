import React from "react"
import { Helmet } from "react-helmet"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Header from "../components/header"
import MainLayOut from "../components/main-layout"
import PageTransition from 'gatsby-plugin-page-transitions'
import TransitionLink from 'gatsby-plugin-transition-link'
import { TransitionPortal } from "gatsby-plugin-transition-link"
import Zoom from 'react-reveal/Zoom';
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



const duration = 1000;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered:  { opacity: 1 },
};


class HomePageTemplate extends React.Component {

	  state = {
	    header: [
	      {
	        class: 'header',
	        menuToggledClasses: 'not-active',
	        menuChildClasses: 'not-active'
	      }
	    ],
	    createLoop: false,
	    delay: 300,
	    imageSource: Character2,
	    bg: false,
	    rightBgClass: 'bg-default',
	    dropClasses: 'bg-purple',
	    mainTitleColor: 'red',
	    randomNum: 0,
	    subTitleClasses: 'orange',
	    menuListAnimation: false
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

	componentDidMount() {
		const charArr = [Character1, Character2, Character3, Character5, Character6, Character7, Character8, Character9, Character10, Character11, Character12];

		// Setting the first Loop animation on component mount

	  	this.setState(prevState => ({ 
	  		createLoop: prevState.createLoop = true,
	  		delay: prevState.delay = 300,
	  		bg: prevState.bg = true,
	  		randomNum: prevState.randomNum = Math.floor(Math.random() * 1500) + 1
		})) 


	  	// Setting low delay time for the animation to kick in when image source changes

		this.interval = setInterval( () => {
				if (!this.state.createLoop) {
			  	this.setState(prevState => ({ 
			  		createLoop: prevState.createLoop = true, 
			  		delay: prevState.delay = 50
				})) 
			}
		}, 300)



		// The loop which basically swaps images with the animation

		this.interval = setInterval( () => {
				if (this.state.createLoop) {
			  	this.setState(prevState => ({ 
			  		createLoop: prevState.createLoop = false, 
			  		delay: prevState.delay = 50
				})) 
			}

			let item = charArr[Math.floor(Math.random()*charArr.length)];
			if (this.state.imageSource !== item) {
			  	this.setState(prevState => ({ 
			  		imageSource: prevState.imageSource = item
				})) 
			}
		}, 2400)


		// The animation which changes the background and matches with the old


		let bgArr = ['bg-one', 'bg-two', 'bg-three', 'bg-four', 'bg-five', 'bg-six', 'bg-seven', 'bg-eight', 'bg-nine', 'bg-ten', 'bg-eleven', 'bg-twelve', 'bg-thirteen', 'bg-fourteen', 'bg-fifteen', 'bg-sixteen', 'bg-seventeen', 'bg-eighteen', 'bg-nineteen', 'bg-twenty', 'bg-purple'];
		let colorArr = ['color-one', 'color-two', 'color-three', 'color-four', 'color-five', 'color-six', 'color-seven', 'color-eight', 'color-nine', 'color-ten', 'color-eleven', 'color-twelve', 'color-thirteen', 'color-fourteen', 'color-fifteen', 'color-sixteen', 'color-seventeen', 'color-eighteen', 'color-nineteen', 'color-twenty', 'color-purple'];		
		this.interval = setInterval( () => {
		let chosenBG = bgArr[Math.floor(Math.random()*bgArr.length)];
		let chosenColorSplit = chosenBG.split('-');
		let chosenColor = 'color-' + chosenColorSplit[1];
		let previousBgColor = this.state.dropClasses;
		let previousBgColorSplit = previousBgColor.split('-');
		let previousColorChosen = 'color-' + previousBgColorSplit[1];
		let randomColorGen = colorArr[Math.floor(Math.random()*colorArr.length)];

			  	this.setState(prevState => ({ 
			  		rightBgClass: prevState.rightBgClass = this.state.dropClasses,
			  		dropClasses: prevState.dropClasses = chosenBG,
			  		mainTitleColor: prevState.mainTitleColor = chosenColor,
			  		randomNum: prevState.randomNum = Math.floor(Math.random() * 1500) + 1,
			  		subTitleClasses: prevState.subTitleClasses = randomColorGen
				})) 

				console.log(previousColorChosen);

		}, 2400)



		// 


		this.interval = setInterval( () => {
				if (!this.state.bg) {
			  	this.setState(prevState => ({ 
			  		bg: prevState.bg = true
				})) 
			} else {
			  	this.setState(prevState => ({ 
			  		bg: prevState.bg = false
				})) 	
			}

		}, 2400)

	}


	render() {

		// console.log(this.state.createLoop);
		// console.log(this.state.delay);
		// console.log(this.state.bg);
		const imageStyle = {
			filter: 'hue-rotate(' + this.state.randomNum + 'deg)',
			transitionDelay: '0.3s',
			transition: '5500ms'
		}

		return (
			<PageTransition>
        <Helmet>
          <meta charSet="utf-8" />
          <title>Design with Brunö - Take the Quiz</title>
          <link rel=" shortcut icon" href={BrunoFavicon} />
        </Helmet>
				<div className="body">
					<Header toggleDrawer={this.togglerDrawer} menuToggledClasses={this.state.header[0].menuToggledClasses} menuListAnimation={this.menuListAnimation} menuChildClasses={this.state.header[0].menuChildClasses} customClass={this.state.header[0].class}/>
					<MainLayOut 
						mainHeading="Brunö"
						subHeading="We expected you"
						subTitle="Brunö is here to help you figure out "
						subTitleBoldText="who you are."
						paragraph="On September 25th, 2015 the first theatrical online reading of Anton Brunö took place. Taking the test gave users a character to audition as and take part in the casting."
						poweredText="A product of OneIMS"
						leftColumnImageSource={Bruno}
						rightColumnHeading="Which character are you?"
						rightColumnImageSource={this.state.imageSource}
						rightColumnButtonText="Take the Test"
						createLoop={this.state.createLoop}
						delay={this.state.delay}
						bg={this.state.bg}
						rightBgClass={'col-md-6 home-box-right ' + this.state.rightBgClass}
						dropClasses={'drop ' + this.state.dropClasses}
						mainTitleClasses={'main-heading all-upper-case bolder-text home-first-text text-duration ' + this.state.mainTitleColor}
						randomNum={imageStyle}
						subTitleClasses={'small-text all-upper-case bolder-text purple home-second-text text-duration ' + this.state.subTitleClasses }
					/>
				</div>
			</PageTransition>
		)
	}
}







export default HomePageTemplate;