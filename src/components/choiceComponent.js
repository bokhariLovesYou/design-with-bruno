import React, { Component } from "react"
import { Link } from "gatsby"

  class ChoiceComponent extends Component {

    render() {

    let index = this.props.index;

    return (

		<Link to={this.props.redirect}><div onClick={() => this.props.handleQuestionChange(index)} className={this.props.classes}>
			<div className="col-2 pr-0">
				<div className="alphabet">
					<h4 className="alphabet-text">{this.props.alphabet}</h4>
				</div>
			</div>
			<div className="col-10 pl-xl-0">
				<div className="answer-parent">
					<h4 className="answer-text white-text">{this.props.choiceText}</h4>
				</div>
			</div>
		</div></Link>

		);
	}
}

export default ChoiceComponent;