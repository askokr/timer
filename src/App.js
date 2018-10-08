import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TimerList from "./components/timerlist";
import NavBar from "./components/navbar";

class App extends Component {
  state = {
    time: new Date(),
    sortDirection: "byKey",
    whatEvetsToDisplay: "all",
    areYouAddingAnEvent: false,
    events: [
      {
        eventName: "Christmas Eve",
        eventDate: "",
        imageUrl:
          "http://upperallenfire.com/wp/wp-content/uploads/2013/12/Christmas-Tree-and-Fireplace.jpg",
        eventId: 0
      },
      {
        eventName: "St John's Eve",
        eventDate: "",
        imageUrl:
          "http://www.kultuurivara.ee/wp-content/uploads/2017/06/LigoMidsummerday-2.jpg",
        eventId: 1
      },
      {
        eventName: "Time left at ValiIT!",
        eventDate: "November 19, 2018 17:00",
        imageUrl: "http://tiny.cc/xnumzy",
        eventId: 2
      },
      {
        eventName: " End of ValiIT! theory course",
        eventDate: "September 24, 2018 17:00",
        imageUrl:
          "https://cdn-images-1.medium.com/max/2000/1*9Cqyu3Lx4BKHUZShGe5cuQ.jpeg",
        eventId: 3
      }
    ],
    newEvent: {
      eventName: "",
      eventDate: "",
      imageUrl: ""
    }
  };

  componentDidMount() {
    setInterval(this.update, 1000);
    this.updateYears();
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

  //Automatically calculate next year for events
  updateYears = () => {
    const christmasMonth = 11;
    const christmasDate = 24;
    const stJohnsMonth = 5;
    const stJohnsDate = 23;
    const currentMonth = this.state.time.getMonth();
    const currentDate = this.state.time.getDate();
    let christmasYear;
    let stJohnsYear;
    if (currentMonth <= christmasMonth && currentDate < christmasDate) {
      christmasYear = this.state.time.getFullYear();
    } else {
      christmasYear = this.state.time.getFullYear() + 1;
    }
    if (currentMonth <= stJohnsMonth && currentDate < stJohnsDate) {
      stJohnsYear = this.state.time.getFullYear();
    } else {
      stJohnsYear = this.state.time.getFullYear() + 1;
    }
    const events = [...this.state.events];
    const newChristmasDate = "December 24, " + christmasYear;
    const newStJohnsDate = "June 23, " + stJohnsYear;
    events[0].eventDate = newChristmasDate;
    events[1].eventDate = newStJohnsDate;
    console.log(events);
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
    this.setState(
      prevState => ({
        newEvent: {
          ...prevState.newEvent,
          imageUrl: value
        }
      }),
      () => console.log(value)
    );
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.handleToggleEditor();
    const newEventName = this.state.newEvent.eventName;
    const newEventDate = this.state.newEvent.eventDate;
    const newImageUrl = this.state.newEvent.imageUrl;
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

  handleToggleEditor = () => {
    this.setState(prevState => ({
      areYouAddingAnEvent: !prevState.areYouAddingAnEvent
    }));
  };

  handleDisplayAll = () => {
    let whatEvetsToDisplay = [...this.state.whatEvetsToDisplay];
    whatEvetsToDisplay = "all";
    this.setState({ whatEvetsToDisplay });
  };

  handleDisplayPassed = () => {
    let whatEvetsToDisplay = [...this.state.whatEvetsToDisplay];
    whatEvetsToDisplay = "passed";
    this.setState({ whatEvetsToDisplay });
  };

  handleDisplayUpcoming = () => {
    let whatEvetsToDisplay = [...this.state.whatEvetsToDisplay];
    whatEvetsToDisplay = "upcoming";
    this.setState({ whatEvetsToDisplay });
  };

  displayedEvents = () => {
    const events = [...this.state.events];
    const currentTime = this.state.time;
    let displayedEvents;
    switch (this.state.whatEvetsToDisplay) {
      case "upcoming":
        displayedEvents = events.filter(
          e => new Date(e.eventDate) > new Date(currentTime)
        );
        break;
      case "passed":
        displayedEvents = events.filter(
          e => new Date(e.eventDate) < new Date(currentTime)
        );
        break;
      default:
        displayedEvents = events;
    }
    return displayedEvents;
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
          onDisplayPassed={this.handleDisplayPassed}
          onDisplayAll={this.handleDisplayAll}
          onDisplayUpcoming={this.handleDisplayUpcoming}
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
            events={this.displayedEvents(this.state.events)}
            time={this.state.time}
            onDelete={this.handleDelete}
            onToggleEditor={this.handleToggleEditor}
            areYouAddingAnEvent={this.state.areYouAddingAnEvent}
            onFormSubmit={this.handleFormSubmit}
            onEventName={this.handleEventName}
            onEventDate={this.handleEventDate}
            onImageUrl={this.handleImageUrl}
          />
        </main>
      </React.Fragment>
    );
  }
}

export default App;
