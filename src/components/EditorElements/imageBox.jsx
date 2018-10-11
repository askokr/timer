import React, { Component } from "react";

class ImageBox extends Component {
  render() {
    return this.viewChooser();
  }

  viewChooser = () => {
    if (this.props.whatEventAreYouEditing === null) {
      return this.addEventView();
    } else {
      return this.editEventView();
    }
  };

  addEventView = () => {
    const newImage = {
      backgroundImage: `url(${this.props.newImageUrl})`,
      width: "400px",
      height: "95px"
    };
    return (
      <div className="p-2 bd-highlight">
        <span className="text-above-image">Image preview</span>
        <div style={newImage} className="background-image shadowy" />
      </div>
    );
  };

  editEventView = () => {
    const oldImage = {
      backgroundImage: `url(${this.props.oldImageUrl})`,
      width: "400px",
      height: "95px"
    };
    const newImage = {
      backgroundImage: `url(${this.props.newImageUrl})`,
      width: "400px",
      height: "95px"
    };
    return (
      <React.Fragment>
        <div className="p-2 bd-highlight">
          <span className="text-above-image">Current image</span>
          <div style={oldImage} className="background-image shadowy" />
        </div>
        {this.props.oldImageUrl !== this.props.newImageUrl ? (
          <div className="p-2 bd-highlight">
            <span className="text-above-image">New image</span>
            <div style={newImage} className="background-image shadowy" />
          </div>
        ) : (
          ""
        )}
      </React.Fragment>
    );
  };
}

export default ImageBox;
