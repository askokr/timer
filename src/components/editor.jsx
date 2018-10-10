import React, { Component } from "react";
import Form from "./EditorElements/form";
import CloseButton from "./EditorElements/colseButton";
import EditButton from "./EditorElements/editButton";
import "./stylesheets/react-datetime.css";

class Editor extends Component {
  render() {
    const { eventDate, eventName, imageUrl } = this.props.editableEvent;
    const {
      onEventDate,
      onEventName,
      onFormSubmit,
      onImageUrl,
      onToggleEditor,
      onToggleEventEditor,
      onRandomImage,
      whatEventAreYouEditing
    } = this.props;
    return (
      <div className="container editor-container text-center m-4">
        <div
          className="editor-background"
          style={{ height: "350px", overflow: "hidden" }}
        >
          <Form
            eventDate={eventDate}
            eventName={eventName}
            imageUrl={imageUrl}
            onEventDate={onEventDate}
            onEventName={onEventName}
            onFormSubmit={onFormSubmit}
            onImageUrl={onImageUrl}
            onRandomImage={onRandomImage}
          />

          <div className="d-flex flex-row justify-content-around">
            {/* <div className="p-2 bd-highlight" style={{ width: "50%" }}>
              <img
                src={imageUrl}
                style={{
                  maxWidth: "50%",
                  maxHeight: "90%",
                  border: "double black"
                }}
              />
            </div> */}
            {/* <div className="p-2 row align-middle" style={{ width: "50%" }}> */}
            <div>
              <div>
                <EditButton
                  onFormSubmit={onFormSubmit}
                  whatEventAreYouEditing={whatEventAreYouEditing}
                />
              </div>
              <div>
                <CloseButton
                  onToggleEditor={onToggleEditor}
                  onToggleEventEditor={onToggleEventEditor}
                  whatEventAreYouEditing={whatEventAreYouEditing}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Editor;
