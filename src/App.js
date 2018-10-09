import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import TimerList from "./components/timerlist";
import NavBar from "./components/navbar";
import Footer from "./components/footer";

class App extends Component {
  state = {
    time: new Date(),
    sortDirection: "byKey",
    whatEvetsToDisplay: "all",
    areYouAddingAnEvent: false,
    whatEventAreYouEditing: null,
    events: [
      {
        eventName: "",
        eventDate: "",
        imageUrl: "",
        eventId: 0
      },
      {
        eventName: "Christmas Eve",
        eventDate: "",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/f/fa/Happy_new_year_06463.jpg",
        eventId: 1
      },
      {
        eventName: "St John's Eve",
        eventDate: "",
        imageUrl:
          "https://upload.wikimedia.org/wikipedia/commons/8/84/MidsummerNightBonfire.jpg",
        eventId: 2
      },
      {
        eventName: "Time left at ValiIT!",
        eventDate: "November 19, 2018 17:00",
        imageUrl: "http://tiny.cc/xnumzy",
        eventId: 3
      },
      {
        eventName: " End of ValiIT! theory course",
        eventDate: "September 24, 2018 17:00",
        imageUrl:
          "https://cdn-images-1.medium.com/max/2000/1*9Cqyu3Lx4BKHUZShGe5cuQ.jpeg",
        eventId: 4
      }
    ]
  };

  //the place to create a state, make ajax calls etc
  componentDidMount() {
    setInterval(this.update, 1000);
    this.updateYears();
    console.log("did mount");
  }

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
    events[1].eventDate = newChristmasDate;
    events[2].eventDate = newStJohnsDate;
    this.setState({ events });
  };

  update = () => {
    this.setState({
      time: new Date()
    });
    this.rememberSortorder();
  };

  rememberSortorder = () => {
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

  clearForm = () => {
    let events = [...this.state.events];
    events[0] = {
      eventName: "",
      eventDate: "",
      imageUrl: "",
      eventId: 0
    };
    this.setState({ events });
  };

  handleEdit = eventId => {
    let areYouAddingAnEvent = this.state.areYouAddingAnEvent;
    if (areYouAddingAnEvent) {
      areYouAddingAnEvent = false;
      this.setState({ areYouAddingAnEvent });
    }
    const event = this.state.events.find(c => c.eventId === eventId);
    const whatEventAreYouEditing = eventId;
    this.setState({ whatEventAreYouEditing });

    const events = [...this.state.events];
    events[0].eventName = event.eventName;
    events[0].eventDate = event.eventDate;
    events[0].imageUrl = event.imageUrl;
  };

  handleToggleEventEditor = () => {
    const whatEventAreYouEditing = null;
    this.setState({ whatEventAreYouEditing });
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
    const value = e.target.value;
    const events = [...this.state.events];
    events[0].eventName = value;
    this.setState({ events });
  };

  handleEventDate = e => {
    const value = e.valueOf();
    const events = [...this.state.events];
    events[0].eventDate = value;
    this.setState({ events });
  };

  handleImageUrl = e => {
    const value = e.target.value;
    const events = [...this.state.events];
    events[0].imageUrl = value;
    this.setState({ events });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const newEventName = this.state.events[0].eventName;
    const newEventDate = this.state.events[0].eventDate;
    const newImageUrl = this.state.events[0].imageUrl;
    let events = [...this.state.events];

    if (this.state.areYouAddingAnEvent === true) {
      const newEventId = this.state.time;
      const newEvent = {
        eventName: newEventName,
        eventDate: newEventDate,
        imageUrl: newImageUrl,
        eventId: newEventId
      };
      events.push(newEvent);

      const areYouAddingAnEvent = false;
      this.setState({ areYouAddingAnEvent });
    } else {
      console.log("this hapens"); //this deos, in fact, not hapen :-/
      let whatEventAreYouEditing = this.state.whatEventAreYouEditing;
      var indexOfEvent = events.findIndex(
        i => i.eventId === whatEventAreYouEditing
      );
      events[indexOfEvent].eventName = newEventName;
      events[indexOfEvent].eventDate = newEventDate;
      events[indexOfEvent].imageUrl = newImageUrl;

      whatEventAreYouEditing = null;
      this.setState({ whatEventAreYouEditing });
    }
    events[0] = {
      eventName: "",
      eventDate: "",
      imageUrl: "",
      eventId: 0
    };
    this.setState({ events });
  };

  handleToggleEditor = () => {
    this.clearForm();
    if (this.state.whatEventAreYouEditing !== null) {
      this.handleToggleEventEditor();
    }
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
          onDeleteAll={this.handleDeleteAll}
          onDisplayAll={this.handleDisplayAll}
          onDisplayPassed={this.handleDisplayPassed}
          onDisplayUpcoming={this.handleDisplayUpcoming}
          onReadCookie={this.handleReadCookie}
          onSortAscending={this.handleSortAscending}
          onSortByKey={this.handleSortByKey}
          onSortDescending={this.handleSortDescending}
          onWriteCookie={this.handleWriteCookie}
          sortDirection={this.state.sortDirection}
          time={this.state.time}
          whatEvetsToDisplay={this.state.whatEvetsToDisplay}
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
            areYouAddingAnEvent={this.state.areYouAddingAnEvent}
            events={this.displayedEvents(this.state.events)}
            time={this.state.time}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            onEventDate={this.handleEventDate}
            onEventName={this.handleEventName}
            onFormSubmit={this.handleFormSubmit}
            onImageUrl={this.handleImageUrl}
            onToggleEditor={this.handleToggleEditor}
            onToggleEventEditor={this.handleToggleEventEditor}
            whatEventAreYouEditing={this.state.whatEventAreYouEditing}
          />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
