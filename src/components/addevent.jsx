import React, { Component } from "react";
import Editor from "./editor";

class AddEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      areYouAddingAnEvent: false,
      newEvent: {
        eventName: "",
        eventDate: "",
        imageUrl: ""
      }
    };
  }

  handleToggleEditor = () => {
    this.setState(prevState => ({
      areYouAddingAnEvent: !prevState.areYouAddingAnEvent
    }));
  };

  handleEventName = e => {
    let value = e.target.value;
    this.setState(
      prevState => ({
        newEvent: {
          ...prevState.newEvent,
          eventName: value
        }
      }),
      () => console.log(this.state.event)
    );
  };

  handleEventDate = e => {
    const value = e.valueOf();
    this.setState(
      prevState => ({
        newEvent: {
          ...prevState.newEvent,
          eventDate: value
        }
      }),
      () => console.log(value)
    );
  };

  handleImageUrl = e => {
    let value = e.target.value;
    this.setState(prevState => ({
      newEvent: {
        ...prevState.newEvent,
        imageUrl: value
      }
    }));
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.handleToggleEditor();
    this.props.onAddEvent(this.state.newEvent);
    this.handleClearForm(e);
    // window.scrollTo(0, document.body.scrollHeight);
  };

  handleClearForm = e => {
    e.preventDefault();
    const newEvent = {
      eventName: "",
      eventDate: "",
      imageUrl: ""
    };
    this.setState({ newEvent });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.areYouAddingAnEvent ? (
          <Editor
            onToggleEditor={this.handleToggleEditor}
            onFormSubmit={this.handleFormSubmit}
            // onClearForm={this.handleClearForm}
            onEventName={this.handleEventName}
            onEventDate={this.handleEventDate}
            onImageUrl={this.handleImageUrl}
          />
        ) : (
          <React.Fragment>{this.dafaultView()}</React.Fragment>
        )}
      </React.Fragment>
    );
  }

  dafaultView() {
    return (
      <div className="containe timer-containerr">
        <button
          className="container editor-container text-center m-4 btn btn-warning"
          onClick={this.handleToggleEditor}
        >
          <h2>Add Event</h2>
        </button>
      </div>
    );
  }
}

export default AddEvent;
