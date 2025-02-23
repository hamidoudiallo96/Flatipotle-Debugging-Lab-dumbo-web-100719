import React, { Component } from "react";
import Side from "./Side.js";
import uuid from "uuid";

class Order extends Component {
	state = {
		isClicked: false
		// id: uuid.v4()
	};

	handleClick = () => {
		this.setState({ isClicked: !this.state.isClicked });
	};

	render() {
		console.log(this.props);
		return (
			<div className="ui centered raised card">
				<div className="image">
					<img src={require("../images/burrito-bowl.jpg")} alt="burrito bowl" />
				</div>
				<div className="content">
					<b>Protein:</b>
					<br />
					{this.props.protein.length > 0
						? this.props.protein.join(", ")
						: "None"}
					<br />
					<b>Fillings:</b>
					<br />
					{this.props.fillings.length > 0
						? this.props.fillings.join(", ")
						: "None"}
					<br />
					<b>Toppings:</b>
					<br />
					{this.props.toppings.length > 0
						? this.props.toppings.join(", ")
						: "None"}
					<br />
				</div>
				<button
					className="ui button small"
					onClick={() => this.props.deleteOrder(this.props.id)}
				>
					Delete!
				</button>
				<div className="extra content">
					{this.props.sides.length > 0 ? (
						<button className="ui button small" onClick={this.handleClick}>
							View Sides
						</button>
					) : (
						<p>No sides</p>
					)}

					{/* this is just a shortcut to writing this.state.isClicked ? <Side sides={this.props.sides} /> : null */}
					{this.state.isClicked && <Side sides={this.props.sides} />}
				</div>
			</div>
		);
	}
}

export default Order;
