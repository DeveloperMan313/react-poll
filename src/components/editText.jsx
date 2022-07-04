import React, { Component } from "react";

class EditText extends Component {
  render() {
    const { id, title, onEditTitle } = this.props;
    return (
      <div>
        <input
          type="text"
          value={title}
          onChange={(event) => {
            onEditTitle(id, event);
          }}
        />
        <p>Text input</p>
      </div>
    );
  }
}

export default EditText;
