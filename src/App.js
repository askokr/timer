import React, { Component } from "react";
import TimerList from "./components/timerlist";
import NavBar from "./components/navbar";
import Footer from "./components/footer";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
  state = {
    areYouAddingAnEvent: false,
    favouriteEvent: null,
    oldImageUrl: undefined,
    sortDirection: "byKey",
    time: new Date(),
    whatEventAreYouEditing: null,
    whatEvetsToDisplay: "all",
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
        eventName: "End of ValiIT! theory course",
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
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("componentDidUpdate");
    if (
      prevState.sortDirection !== this.state.sortDirection ||
      prevState.favouriteEvent !== this.state.favouriteEvent ||
      prevState.whatEvetsToDisplay !== this.state.whatEvetsToDisplay
    ) {
      console.log("changed state");
    }
  }

  update = () => {
    this.setState({
      time: new Date()
    });
    this.rememberSortorder();
    console.log("recalculate sorted events");
  };

  //Sort images to be displayed
  displayedEvents = () => {
    let usnortedEvents = [...this.state.events];
    let events, favouriteEvent, sortedEvents;
    console.log("recalculate displayed events");
    const currentTime = this.state.time;
    const theZeroeth = usnortedEvents.shift();
    const favouriteEventId = this.state.favouriteEvent;

    if (favouriteEventId !== null) {
      favouriteEvent = usnortedEvents.find(e => e.eventId === favouriteEventId);
      events = usnortedEvents.filter(e => e.eventId !== favouriteEventId);
    } else {
      events = usnortedEvents;
    }
    switch (this.state.whatEvetsToDisplay) {
      case "upcoming":
        sortedEvents = events.filter(
          e => new Date(e.eventDate) > new Date(currentTime)
        );
        break;
      case "passed":
        sortedEvents = events.filter(
          e => new Date(e.eventDate) < new Date(currentTime)
        );
        break;
      default:
        sortedEvents = events;
    }
    if (favouriteEventId !== null) {
      sortedEvents.unshift(favouriteEvent);
    }
    sortedEvents.unshift(theZeroeth);
    return sortedEvents;
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
    if (currentMonth <= christmasMonth && currentDate <= christmasDate) {
      christmasYear = this.state.time.getFullYear();
    } else {
      christmasYear = this.state.time.getFullYear() + 1;
    }
    if (currentMonth <= stJohnsMonth && currentDate <= stJohnsDate) {
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

  rememberSortorder = () => {
    switch (this.state.sortDirection) {
      case "descending":
        this.handleSort("descending");
        break;
      case "ascending":
        this.handleSort("ascending");
        break;
      default:
        this.handleSort("byKey");
    }
  };

  handleDelete = eventId => {
    const favouriteEvent = null;
    let events;
    switch (eventId) {
      case "all":
        const areYouAddingAnEvent = false;
        const oldImageUrl = undefined;
        const whatEventAreYouEditing = null;
        events = [
          {
            eventName: "",
            eventDate: "",
            imageUrl: "",
            eventId: 0
          }
        ];
        this.setState({ areYouAddingAnEvent });
        this.setState({ favouriteEvent });
        this.setState({ oldImageUrl });
        this.setState({ whatEventAreYouEditing });
        this.setState({ events });
        break;
      case "cookie":
        document.cookie.split(";").forEach(function(c) {
          document.cookie = c
            .replace(/^ +/, "")
            .replace(
              /=.*/,
              "=;expires=" + new Date().toUTCString() + ";path=/"
            );
        });
        document.cookie = "";
        break;
      default:
        events = this.state.events.filter(c => c.eventId !== eventId);
        if (eventId === this.state.favouriteEvent) {
          this.setState({ favouriteEvent });
        }
        this.setState({ events });
    }
  };

  handleDisplay = type => {
    const whatEvetsToDisplay = type;
    this.setState({ whatEvetsToDisplay });
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
    const oldImageUrl = event.imageUrl;
    this.setState({ oldImageUrl });

    const events = [...this.state.events];
    events[0].eventName = event.eventName;
    events[0].eventDate = event.eventDate;
    events[0].imageUrl = event.imageUrl;
  };

  handleEventDate = e => {
    const value = e.valueOf();
    const events = [...this.state.events];
    events[0].eventDate = value;
    this.setState({ events });
  };

  handleEventName = e => {
    const value = e.target.value;
    const events = [...this.state.events];
    events[0].eventName = value;
    this.setState({ events });
  };

  handleOnFavourite = eventId => {
    let favouriteEvent;
    if (eventId !== this.state.favouriteEvent) {
      favouriteEvent = eventId;
    } else {
      favouriteEvent = null;
    }
    this.setState({ favouriteEvent });
  };

  handleFormSubmit = e => {
    e.preventDefault();
    const newEventName = this.state.events[0].eventName;
    const newEventDate = this.state.events[0].eventDate;
    const newImageUrl = this.state.events[0].imageUrl;
    let events = [...this.state.events];

    if (this.state.areYouAddingAnEvent === true) {
      const newEventId = this.state.time.getTime();
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
      const oldWhatEventAreYouEditing = this.state.whatEventAreYouEditing;
      var indexOfEvent = events.findIndex(
        i => i.eventId === oldWhatEventAreYouEditing
      );
      events[indexOfEvent].eventName = newEventName;
      events[indexOfEvent].eventDate = newEventDate;
      events[indexOfEvent].imageUrl = newImageUrl;

      const whatEventAreYouEditing = null;
      this.setState({ whatEventAreYouEditing });
      const oldImageUrl = undefined;
      this.setState({ oldImageUrl });
    }
    events[0] = {
      eventName: "",
      eventDate: "",
      imageUrl: "",
      eventId: 0
    };
    this.setState({ events });
  };

  handleImageUrl = e => {
    const value = e.target.value;
    const events = [...this.state.events];
    events[0].imageUrl = value;
    this.setState({ events });
  };

  handleRandomImage = async e => {
    e.preventDefault();
    const ACCESS_KEY =
      "b97cc352335ea33a72e964d4c985c386b54ac45abbb031bbb23ba1c2bca3b116";
    const api_call = await fetch(
      `https://api.unsplash.com/photos/random/?client_id=${ACCESS_KEY}&orientation=landscape`
    );
    const response = await api_call.json();
    const imageUrl = response.urls.regular;
    const userProfile = response.user.links.html;
    console.log(userProfile);
    let events = [...this.state.events];
    events[0].imageUrl = imageUrl;
    this.setState(events);
  };

  handleReadCookie = () => {
    const cookieContent = document.cookie;
    const combinedString = JSON.parse(cookieContent);
    const favouriteEvent = combinedString[0][0];
    const eventsString = combinedString[1];
    const events = JSON.parse(eventsString);

    // console.log(favouriteEvent);
    // console.log(events);

    this.setState({ favouriteEvent });
    this.setState({ events });
  };

  handleSort = type => {
    let usnortedEvents = [...this.state.events];
    const theZeroeth = usnortedEvents.shift();
    const favouriteEventId = this.state.favouriteEvent;
    let events, favouriteEvent, sortedEvents, sortDirection;

    if (favouriteEventId !== null) {
      favouriteEvent = usnortedEvents.find(e => e.eventId === favouriteEventId);
      events = usnortedEvents.filter(e => e.eventId !== favouriteEventId);
    } else {
      events = usnortedEvents;
    }
    switch (type) {
      case "ascending":
        usnortedEvents.sort(
          (a, b) => new Date(b.eventDate) - new Date(a.eventDate)
        );
        break;
      case "descending":
        usnortedEvents.sort(
          (a, b) => new Date(a.eventDate) - new Date(b.eventDate)
        );
        break;
      default:
        usnortedEvents.sort((a, b) => a.eventId - b.eventId);
        break;
    }
    sortedEvents = usnortedEvents;
    if (favouriteEventId !== null) {
      sortedEvents.unshift(favouriteEvent);
    }
    sortedEvents.unshift(theZeroeth);
    events = sortedEvents;
    this.setState({ events });
    sortDirection = type;
    this.setState({ sortDirection });
  };

  handleToggle = what => {
    if (what === "editor") {
      let events = [...this.state.events];
      events[0] = {
        eventName: "",
        eventDate: "",
        imageUrl: "",
        eventId: 0
      };
      this.setState({ events });
      if (this.state.whatEventAreYouEditing !== null) {
        this.handleToggle("event");
      }
      this.setState(prevState => ({
        areYouAddingAnEvent: !prevState.areYouAddingAnEvent
      }));
    } else {
      const whatEventAreYouEditing = null;
      const oldImageUrl = undefined;
      this.setState({ whatEventAreYouEditing });
      this.setState({ oldImageUrl });
    }
  };

  handleWriteCookie = () => {
    const events = [...this.state.events];
    const eventsString = JSON.stringify(events);

    const favouriteEvent = [this.state.favouriteEvent];
    const combinedString = [favouriteEvent, eventsString];
    const cookieContent = JSON.stringify(combinedString);

    console.log(favouriteEvent);
    console.log(events);

    this.handleDelete("cookie");
    document.cookie = cookieContent;
  };

  render() {
    document.body.style.backgroundColor = "#fff6f3";
    return (
      <React.Fragment>
        <NavBar
          onDelete={this.handleDelete}
          onDisplay={this.handleDisplay}
          onReadCookie={this.handleReadCookie}
          onSort={this.handleSort}
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
            favouriteEvent={this.state.favouriteEvent}
            time={this.state.time}
            oldImageUrl={this.state.oldImageUrl}
            onDelete={this.handleDelete}
            onEdit={this.handleEdit}
            onEventDate={this.handleEventDate}
            onEventName={this.handleEventName}
            onFavourite={this.handleOnFavourite}
            onFormSubmit={this.handleFormSubmit}
            onImageUrl={this.handleImageUrl}
            onRandomImage={this.handleRandomImage}
            onToggle={this.handleToggle}
            whatEventAreYouEditing={this.state.whatEventAreYouEditing}
          />
        </main>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
