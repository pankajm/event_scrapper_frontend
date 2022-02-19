import React, { Component } from "react";
import Table from "./common/Table";

class EventsTable extends Component {
  columns = [
    {
      path: "website",
      label: "Website",
    },
    { path: "title", label: "Title" },
    { path: "date", label: "Date" },
    { path: "location", label: "Location" },
  ];

  render() {
    const { events } = this.props;
    return <Table columns={this.columns} data={events} />;
  }
}

export default EventsTable;
