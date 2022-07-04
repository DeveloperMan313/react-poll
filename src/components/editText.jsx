import React, { Component } from "react";

class EditText extends Component {
	render() {
		const { id, title, onEditTitle } = this.props;
		return (
			<div className="text-input">
				<h2>Text input</h2>
				<input
					type="text"
					value={title}
					onChange={(event) => {
						onEditTitle(id, event);
					}}
				/>
			</div>
		);
	}
}

export default EditText;
