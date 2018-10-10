import React, { Component } from "react";
import Form from "./EditorElements/form";
import CloseButton from "./EditorElements/colseButton";
import EditButton from "./EditorElements/editButton";
import ImageBox from "./EditorElements/imageBox";
import "./stylesheets/react-datetime.css";

class Editor extends Component {
  render() {
    const { eventDate, eventName, imageUrl } = this.props.editableEvent;
    const {
      oldImageUrl,
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
            <ImageBox
              newImageUrl={imageUrl}
              oldImageUrl={oldImageUrl}
              whatEventAreYouEditing={whatEventAreYouEditing}
            />
          </div>

          <div className="d-flex flex-row justify-content-around">
            <div className="p-2 row align-middle">
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
