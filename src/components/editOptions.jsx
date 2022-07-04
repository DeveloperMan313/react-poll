import React, { Component } from "react";

class EditOptions extends Component {
	render() {
		const {
			id,
			type,
			title,
			options,
			onEditTitle,
			onClickAdd,
			onEditOption,
			onClickRemove,
		} = this.props;
		return (
			<div className={type}>
				<h2>
					{type === "options-singular"
						? "Singular option"
						: "Multiple options"}
				</h2>
				<input
					type="text"
					value={title}
					onChange={(event) => {
						onEditTitle(id, event);
					}}
				/>
				<ul>
					{options.map((option) => {
						return (
							<li key={option.id}>
								<input
									type="text"
									value={option.name}
									onChange={(event) => {
										onEditOption(id, option.id, event);
									}}
								/>
								<p
									className="btn-remove"
									onClick={() => {
										onClickRemove(id, option.id);
									}}
								>
									Remove
								</p>
							</li>
						);
					})}
				</ul>
				<p
					className="btn-add"
					onClick={() => {
						onClickAdd(id);
					}}
				>
					Add option
				</p>
			</div>
		);
	}
}

export default EditOptions;
