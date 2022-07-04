import React, { Component } from "react";
import EditOptions from "./editOptions";
import EditText from "./editText";

class CreatePoll extends Component {
  state = {
    addEntryListExtended: false,
    poll: [],
    nextId: 1,
  };

  handleRemoveOption = (id, optionId) => {
    let { state: statePrev } = this;
    statePrev.poll = statePrev.poll.map((entry) => {
      if (entry.id === id) {
        entry.options = entry.options.filter((option) => {
          return option.id !== optionId;
        });
      }
      return entry;
    });
    this.setState(statePrev);
  };

  handleEditOption = (id, optionId, event) => {
    let { state: statePrev } = this;
    statePrev.poll = statePrev.poll.map((entry) => {
      if (entry.id === id) {
        entry.options.map((option) => {
          if (option.id === optionId) option.name = event.target.value;
          return option;
        });
      }
      return entry;
    });
    this.setState(statePrev);
  };

  handleAddOption = (id) => {
    let { state: statePrev } = this;
    const { nextId } = this.state;
    statePrev.poll = statePrev.poll.map((entry) => {
      if (entry.id === id) entry.options.push({ id: nextId, name: "option" });
      return entry;
    });
    statePrev.nextId++;
    this.setState(statePrev);
  };

  handleEditTitle = (id, event) => {
    let { state: statePrev } = this;
    statePrev.poll = statePrev.poll.map((e) => {
      if (e.id === id) e.title = event.target.value;
      return e;
    });
    this.setState(statePrev);
  };

  handleRemoveEntry = (id) => {
    this.setState({
      poll: this.state.poll.filter((e) => {
        return e.id !== id;
      }),
    });
  };

  renderEntryWrapper = (entry) => {
    let entryElement;
    const id = entry.id;
    switch (entry.type) {
      case "options_singular":
      case "options_multiple":
        entryElement = (
          <EditOptions
            id={id}
            title={entry.title}
            options={entry.options}
            onEditTitle={this.handleEditTitle}
            onClickAdd={this.handleAddOption}
            onEditOption={this.handleEditOption}
            onClickRemove={this.handleRemoveOption}
          />
        );
        break;

      case "text_input":
        entryElement = (
          <EditText
            id={id}
            title={entry.title}
            onEditTitle={this.handleEditTitle}
          />
        );
        break;

      default:
        break;
    }
    return (
      <div key={id}>
        {entryElement}
        <p
          onClick={() => {
            this.handleRemoveEntry(id);
          }}
        >
          Remove
        </p>
      </div>
    );
  };

  handleAddEntry = (type) => {
    let pollPrev = [...this.state.poll];
    const { nextId } = this.state;
    let newEntry;
    switch (type) {
      case "options_singular":
      case "options_multiple":
        newEntry = {
          id: nextId,
          type: type,
          title: "Title",
          options: [],
        };
        break;

      case "text_input":
        newEntry = {
          id: nextId,
          type: type,
          title: "Title",
        };
        break;

      default:
        break;
    }
    pollPrev.push(newEntry);
    this.setState({
      addEntryListExtended: false,
      poll: pollPrev,
      nextId: nextId + 1,
    });
  };

  render() {
    return (
      <React.Fragment>
        <h1>New poll</h1>
        <div>{this.state.poll.map(this.renderEntryWrapper)}</div>
        <p
          onClick={() => {
            this.setState({
              addEntryListExtended: !this.state.addEntryListExtended,
            });
          }}
        >
          Add entry
        </p>
        {this.state.addEntryListExtended && (
          <ul>
            <li
              onClick={() => {
                this.handleAddEntry("options_singular");
              }}
            >
              Options singular
            </li>
            <li
              onClick={() => {
                this.handleAddEntry("options_multiple");
              }}
            >
              Options multiple
            </li>
            <li
              onClick={() => {
                this.handleAddEntry("text_input");
              }}
            >
              Text
            </li>
          </ul>
        )}
      </React.Fragment>
    );
  }
}

export default CreatePoll;
