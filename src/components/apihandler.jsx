import React, { Component } from "react";

class ImageAPI extends Component {
  render() {
    const ACCESS_KEY =
    "b97cc352335ea33a72e964d4c985c386b54ac45abbb031bbb23ba1c2bca3b116";
  const SECRET_KEY =
    "83fc41984a4d32821c692d3a939584e163aaa067beced283205fa9e0116da3fc";
    const api_call = await fetch("https://api.unsplash.com/photos/?client_id=" + ACCESS_KEY);
    data= await api_call.json();
   
      return data;
  }
}

export default ImageAPI;
