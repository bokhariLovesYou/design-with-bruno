import React from "react"
import { Link, graphql } from "gatsby"
import PageTransition from 'gatsby-plugin-page-transitions'
import Layout from "../components/layout"
import Header from "../components/header"
import MainLayOut from "../components/main-layout"
import TestQuizLayout from "../components/test-quiz"
import * as Scroll from 'react-scroll';
import { Element , Events, animateScroll as scroll, scrollSpy, scroller } from 'react-scroll'

class TestPageTemplate extends React.Component {

	  state = {
	    header: [
	      {
	        class: 'header',
	        menuToggledClasses: 'not-active',
	        menuChildClasses: 'not-active'
	      },
	    ],
	    questionObj: [
		    {
		    	question: 'You had a holiday romance and your next step will be..',
		    	choices: [
		    		{
		    			choiceAlpha: 'A',
		    			choiceOption: 'JUST GO FOR IT AND... FORGET ABOUT IT AFTERWARDS.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'B',
		    			choiceOption: 'SPEND TIME TOGETHER AND JUST REMEMBER THE SWEET MEMORY.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'C',
		    			choiceOption: 'SEE WHERE IT LEADS, MAYBE IT WILL WORK OUT FOR US.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'D',
		    			choiceOption: 'DROP EVERYTHING AND DIVE INTO A NEW RELATIONSHIP. I AM SURE THIS IS LOVE!',
		    			selected: null
		    		}	    		
		    	],
		    	imgSource: 'https://chekhov.withgoogle.com/alive/CDN_PATH/img/test/1.png',
		    	choiceTitle: 'Select Answer Below',
		    	answerSelected: null
		    },
		    {
		    	question: 'Imagine you accidentally sneeze on your boss. You think:',
		    	choices: [
		    		{
		    			choiceAlpha: 'A',
		    			choiceOption: 'This is so embarrassing, it’ll take some time to live down the embarrassment.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'B',
		    			choiceOption: 'I’ll make a joke out of it.  Maybe he has a sense of humor.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'C',
		    			choiceOption: 'Well, it is just a sneeze! I don’t care.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'D',
		    			choiceOption: 'I am the boss – I can sneeze on myself whenever I want.',
		    			selected: null
		    		}	    		
		    	],
		    	imgSource: 'https://chekhov.withgoogle.com/alive/CDN_PATH/img/test/2.png',
		    	choiceTitle: 'Select Answer Below',
		    	answerSelected: null
		    },
		    {
		    	question: 'What’s the most important thing to take with you on a walk?',
		    	choices: [
		    		{
		    			choiceAlpha: 'A',
		    			choiceOption: 'Umbrella, scarf, sunglasses and hat. The weather is unpredictable.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'B',
		    			choiceOption: 'A stylish cane.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'C',
		    			choiceOption: "A cute terrier puppy. I can't go anywhere without him!",
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'D',
		    			choiceOption: 'Something for self protection, maybe a gun.',
		    			selected: null
		    		}	    		
		    	],
		    	imgSource: 'https://chekhov.withgoogle.com/alive/CDN_PATH/img/test/3.png',
		    	choiceTitle: 'Select Answer Below',
		    	answerSelected: null
		    },
		    {
		    	question: 'A suspicious looking stranger offers you a lift. You:',
		    	choices: [
		    		{
		    			choiceAlpha: 'A',
		    			choiceOption: 'Fearlessly get in and start a conversation with him.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'B',
		    			choiceOption: 'Get in and say nothing, as if everything’s perfectly fine.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'C',
		    			choiceOption: 'Get in and tell him about your fighting skills, even though the last fight you won was in grade school.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'D',
		    			choiceOption: 'Accept the offer but get out at the first opportunity.',
		    			selected: null
		    		}	    		
		    	],
		    	imgSource: 'https://chekhov.withgoogle.com/alive/CDN_PATH/img/test/4.png',
		    	choiceTitle: 'Select Answer Below',
		    	answerSelected: null
		    },
		    {
		    	question: `You meet a friend you haven't seen for twenty years. He is rich and powerful now. What do you do?`,
		    	choices: [
		    		{
		    			choiceAlpha: 'A',
		    			choiceOption: 'I think to myself, sure, I could have been like him...at least I’m not fat!',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'B',
		    			choiceOption: 'I think that the source of his success are his connections, and nothing more.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'C',
		    			choiceOption: 'I think, “Good for you, but at least I have plenty of spare time!”',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'D',
		    			choiceOption: 'I tease him about his paunch and we reminisce together about the good old days.',
		    			selected: null
		    		}	    		
		    	],
		    	imgSource: 'https://chekhov.withgoogle.com/alive/CDN_PATH/img/test/5.png',
		    	choiceTitle: 'Select Answer Below',
		    	answerSelected: null
		    },
		    {
		    	question: 'You’re swimming in the river and someone steals your clothes. You decide..',
		    	choices: [
		    		{
		    			choiceAlpha: 'A',
		    			choiceOption: 'Hide under a bridge and wait for help.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'B',
		    			choiceOption: 'Run home as fast as you can through bushes so no one sees you.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'C',
		    			choiceOption: 'Quietly head home. Who cares if anyone sees me?',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'D',
		    			choiceOption: 'Jump out and run after the thieves!',
		    			selected: null
		    		}	    		
		    	],
		    	imgSource: 'https://chekhov.withgoogle.com/alive/CDN_PATH/img/test/6.png',
		    	choiceTitle: 'Select Answer Below',
		    	answerSelected: null
		    },
		    {
		    	question: 'What will you think when someone decides to cut down the cherry orchard near your house?',
		    	choices: [
		    		{
		    			choiceAlpha: 'A',
		    			choiceOption: 'Someone’s finally done it! Now we can make something useful here.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'B',
		    			choiceOption: `That's ok, it’ll grow back.`,
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'C',
		    			choiceOption: 'That’s too bad. We used to play there when we were kids.',
		    			selected: null
		    		},
		    		{
		    			choiceAlpha: 'D',
		    			choiceOption: 'My life is ruined. That orchard was everything for me.',
		    			selected: null
		    		}	    		
		    	],
		    	imgSource: 'https://chekhov.withgoogle.com/alive/CDN_PATH/img/test/7.png',
		    	choiceTitle: 'Select Answer Below',
		    	answerSelected: null
		    },
	    ],
	    currentQuestion: 1,
	    redirectToChar: window.location.href.substr(window.location.href.lastIndexOf('/') + 1) + '?',
	    handleReRenderOptions: false,
	    handleReRenderOptionsTwo: false,
	    answersArr: []
	  }


	 togglerDrawer = () => {
	    if (this.state.header[0].menuToggledClasses === 'not-active' || this.state.header[0].menuToggledClasses === 'not-active close') {
	      this.setState (prevState => ({
	      	class: prevState.header[0].class = 'header main-header-active',
	        class: prevState.header[0].menuToggledClasses = 'menu-drawer-active',
	        childClass: prevState.header[0].menuChildClasses = 'menu-child-active'
	      }));
	    } else {
	      this.setState (prevState => ({
	      	class: prevState.header[0].class = 'header',
	        class: prevState.header[0].menuToggledClasses = 'not-active close',
	        childClass: prevState.header[0].menuChildClasses = 'not-active'
	      }));
	    }
	 }


	 // Link Builder on page Refresh

	 componentDidMount = () => {
	    this.setState (prevState => ({
	      	redirectToChar: this.state.redirectToChar = 'testquiz/?' + (this.state.currentQuestion + 1),
	      	handleReRenderOptions: this.state.handleReRenderOptions = true,
	      	handleReRenderOptionsTwo: this.state.handleReRenderOptionsTwo = true
	    }));

	 }



	 // Handle Question Change on click on the option

	 handleQuestionChange = (index) => {
	 
	 	// Increasing Question Counter
	 	let currentQuestionValue = parseInt(this.state.currentQuestion);
	 	let questionEnd = false;
	 	currentQuestionValue = isNaN(currentQuestionValue) ? 0 : currentQuestionValue;
	 	currentQuestionValue ++;
	      this.setState (prevState => ({
	      	currentQuestion: this.state.currentQuestion = currentQuestionValue,
	      	handleReRenderOptions: this.state.handleReRenderOptions = false,
	      	handleReRenderOptionsTwo: this.state.handleReRenderOptionsTwo = false
	      }));



		this.interval = setTimeout( () => {
				if (!this.state.handleReRenderOptions) {
			  	this.setState(prevState => ({ 
			  		handleReRenderOptions: prevState.handleReRenderOptions = true
			  		// selected: this.state.questionObj[currentQuestionValue - 1].choices[index].selected = 'selected'
				})) 
			}

			console.log(this.state.handleReRenderOptions);

		}, 100)

		this.interval = setTimeout( () => {
				if (!this.state.handleReRenderOptionsTwo) {
			  	this.setState(prevState => ({ 
			  		handleReRenderOptionsTwo: prevState.handleReRenderOptionsTwo = true
			  		// selected: this.state.questionObj[currentQuestionValue - 1].choices[index].selected = 'selected'
				})) 
			}

		}, 500)


	    // Checking to see if questions has reached last

	 	if (this.state.currentQuestion < (this.state.questionObj.length - 1)) {
		    this.setState (prevState => ({
		      	redirectToChar: this.state.redirectToChar = 'testquiz/?' + (this.state.currentQuestion + 1) 
		    }));
	      } else {
		    this.setState (prevState => ({
		      	redirectToChar: this.state.redirectToChar = 'charactar',
		      	currentQuestion: this.state.currentQuestion = this.state.questionObj.length
		    }));
	      }

	    // Setting 'selected' on each question's answer and saving the answer


	    // let answersArr = [];


	    //  CHECK THIS TO SEE SELECTED 


	    this.setState (prevState => ({
	      	selected: this.state.questionObj[currentQuestionValue - 2].choices[index].selected = 'selected',
	      	answerSelected: this.state.questionObj[currentQuestionValue - 2].answerSelected = this.state.questionObj[currentQuestionValue - 2].choices[index].choiceAlpha,
	    }));	      

	    console.log(this.state.questionObj[currentQuestionValue - 2].choices[index]);

	    this.setState({ 
	    	answersArr: this.state.answersArr = this.state.answersArr.concat(this.state.questionObj[currentQuestionValue - 2].choices[index].choiceAlpha)
	    })

	    // let selectedData = this.state.questionObj[currentQuestionValue - 2].choices[index];
	    // let questionAnswered = this.state.questionObj[currentQuestionValue - 2];	    
	    // let prevAnswer = this.state.questionObj[currentQuestionValue - 2].choices[index].choiceAlpha;
	    // answersArr.push(prevAnswer);
	    let answersArrLog = this.state.answersArr;

		console.log(answersArrLog);


		// Saving the answer chosen
		scroll.scrollToTop({duration: 1000, smooth: "easeInOutQuint"});



	    }






	render() {

		const choices = this.state.questionObj[0].choices;
		const myObj = 'this.state.questionObj[' + (this.state.currentQuestion - 1) + ']';
		const myObjUse = eval(myObj);

 		let answersArr = [];		

 		let defaultDelay = 300;

 		const addDelay = () => {
 			defaultDelay += 130;
 			// console.log(defaultDelay);
 			return defaultDelay;
 		}
		return (
			<PageTransition>
				<div className="body">
					<Header toggleDrawer={this.togglerDrawer} menuToggledClasses={this.state.header[0].menuToggledClasses} menuChildClasses={this.state.header[0].menuChildClasses} customClass={this.state.header[0].class} />
					<TestQuizLayout
						questionCount={'Question ' + this.state.currentQuestion + '/' + this.state.questionObj.length}
						imgSource={myObjUse.imgSource}
						questionTitle={myObjUse.question}
						choiceTitle={myObjUse.choiceTitle}
						choiceProps={myObjUse.choices.choiceOption}
						choiceItems={myObjUse.choices}
						handleQuestionChange={this.handleQuestionChange}
						redirect={this.state.redirectToChar}
						addDelay={addDelay}
						handleReRenderOptions={this.state.handleReRenderOptions}
						handleReRenderOptionsTwo={this.state.handleReRenderOptionsTwo}
					 />
				</div>
			</PageTransition>
		)
	}
}


export default TestPageTemplate;

// export const pageQuery = graphql`
// {
//   allMarkdownRemark {
//     edges {
//       node {
//         frontmatter {
//           title
//           columnLeftHeading
//           questionOne
//         }
//       }
//     }
//   }
// }
// `



