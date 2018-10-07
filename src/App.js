import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TimerList from "./components/timerlist";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    time: new Date(),
    sortDirection: "byKey",
    events: [
      {
        eventName: "",
        eventDate: "",
        imageUrl: "",
        eventId: 0
      },
      {
        eventName: "Time left at ValiIT!",
        eventDate: "November 19, 2018 17:00",
        imageUrl: "http://tiny.cc/xnumzy",
        eventId: 1
      },
      {
        eventName: " End of ValiIT! theory course",
        eventDate: "September 24, 2018 17:00",
        imageUrl:
          "https://cdn-images-1.medium.com/max/2000/1*9Cqyu3Lx4BKHUZShGe5cuQ.jpeg",
        eventId: 2
      },
      {
        eventName: "Christmas Eve",
        eventDate: "December 24, 2018",
        imageUrl:
          "http://upperallenfire.com/wp/wp-content/uploads/2013/12/Christmas-Tree-and-Fireplace.jpg",
        eventId: 3
      },
      {
        eventName: "St John's Eve",
        eventDate: "June 23, 2019",
        imageUrl:
          "http://www.kultuurivara.ee/wp-content/uploads/2017/06/LigoMidsummerday-2.jpg",
        eventId: 4
      }
    ]
  };

  componentDidMount() {
    setInterval(this.update, 1000);
  }

  update = () => {
    this.setState({
      time: new Date()
    });
    switch (this.state.sortDirection) {
      case "descending":
        this.handleSortDescending();
        break;
      case "ascending":
        this.handleSortAscending();
        break;
      default:
        this.handleSortByKey();
    }
  };

  handleAddEvent = event => {
    const newEventData = event.valueOf();
    const newEventName = newEventData.eventName;
    const newEventDate = newEventData.eventDate;
    const newImageUrl = newEventData.imageUrl;
    const newEventId = this.state.time;
    const newEvent = {
      eventName: newEventName,
      eventDate: newEventDate,
      imageUrl: newImageUrl,
      eventId: newEventId
    };
    const events = [...this.state.events];
    events.push(newEvent);
    this.setState({ events });
  };

  handleDelete = eventId => {
    const events = this.state.events.filter(c => c.eventId !== eventId);
    this.setState({ events });
  };

  handleDeleteAll = () => {
    const events = [];
    this.setState({ events });
  };

  handleSortAscending = () => {
    const events = [...this.state.events];
    events.sort((a, b) => new Date(b.eventDate) - new Date(a.eventDate));
    this.setState({ events });
    const sortDirection = "ascending";
    this.setState({ sortDirection });
  };

  handleSortDescending = () => {
    const events = [...this.state.events];
    events.sort((a, b) => new Date(a.eventDate) - new Date(b.eventDate));
    this.setState({ events });
    const sortDirection = "descending";
    this.setState({ sortDirection });
  };

  handleSortByKey = () => {
    const events = [...this.state.events];
    events.sort((a, b) => a.eventId - b.eventId);
    this.setState({ events });
    const sortDirection = "byKey";
    this.setState({ sortDirection });
  };

  handleReadCookie = () => {
    const eventsString = document.cookie;
    const events = JSON.parse(eventsString);
    this.setState({ events });
  };

  handleWriteCookie = () => {
    const list = JSON.stringify(this.state.events);
    document.cookie = list;
  };

  render() {
    document.body.style.backgroundColor = "#fff6f3";
    return (
      <React.Fragment>
        <NavBar
          time={this.state.time}
          onDeleteAll={this.handleDeleteAll}
          onSortAscending={this.handleSortAscending}
          onSortDescending={this.handleSortDescending}
          onSortByKey={this.handleSortByKey}
          onSort={this.handleSort}
          onReadCookie={this.handleReadCookie}
          onWriteCookie={this.handleWriteCookie}
        />
        <main>
          <div className="jumbotron jumbotron-fluid">
            <div className="container">
              <h1 className="display-1">Time…</h1>
              <p className="lead">How much time to an expexted event.</p>
              <p className="lead">
                Save your events as a cookie and load them at your leisure.
              </p>
            </div>
          </div>
          <TimerList
            events={this.state.events}
            time={this.state.time}
            onAddEvent={this.handleAddEvent}
            onDelete={this.handleDelete}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
