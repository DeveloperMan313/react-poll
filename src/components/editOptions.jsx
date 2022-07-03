import React, { Component } from "react";

class EditOptions extends Component {
	render() {
		const {
			id,
			title,
			options,
			onEditTitle,
			onClickAdd,
			onEditOption,
			onClickRemove,
		} = this.props;
		return (
			<div>
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
					onClick={() => {
						onClickAdd(id);
					}}
				>
					Add
				</p>
			</div>
		);
	}
}

export default EditOptions;
