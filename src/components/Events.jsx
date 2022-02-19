/**
 * This is main parent component of this application having Events state.
 * This component have one search component which is used to filter events data
 * as users types
 */

import React, { Component } from "react";
import EventsTable from "./EventsTable";
import apiService from "../services/apiService";
import Spinner from "./common/Spinner";
import Input from "./common/Input";
import { Fragment } from "react";

class Events extends Component {
  state = {
    events: [],
    allEvents: [],
    currentPage: 1,
    isSpinner: true,
  };

  componentDidMount = async () => {
    const { data: events } = await apiService.getEvents();
    this.setState({ events, allEvents: events, isSpinner: false });
  };

  onInputChange = (e) => {
    const filteredEvents = this.state.allEvents.filter((event) => {
      return (
        event.website.toLowerCase().includes(e.target.value.toLowerCase()) ||
        event.title.toLowerCase().includes(e.target.value.toLowerCase()) ||
        event.date.toLowerCase().includes(e.target.value.toLowerCase()) ||
        event.location.toLowerCase().includes(e.target.value.toLowerCase())
      );
    });
    this.setState({ events: filteredEvents });
  };

  /**
   * Created simple components for mainting same level of abstraction
   * in parent component
   */
  render() {
    return (
      <Fragment>
        <Spinner showSpinner={this.state.isSpinner}></Spinner>
        <Input onChange={this.onInputChange} placeholder="Search"></Input>
        <div className="row">
          <div className="col">
            <EventsTable events={this.state.events} />
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Events;
