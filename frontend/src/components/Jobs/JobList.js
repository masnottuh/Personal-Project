import React, { Component } from "react";
import { Table } from "reactstrap";
import NewJobModal from "./NewJobModal"

import ConfirmRemovalModal from "./ConfirmRemovalModal";

class JobList extends Component {
  render() {
    const jobs = this.props.jobs;
    return (
      <Table light>
        <thead>
          <tr>
            <th>Title</th>
            <th>Location</th>
            <th>Level</th>
            <th>Details</th>
            <th>Posted date</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {!jobs || jobs.length <= 0 ? (
            <tr>
              <td colSpan="6" align="center">
                <b>No open jobs found</b>
              </td>
            </tr>
          ) : (
            jobs.map(job => (
              <tr key={job.pk}>
                <td>{job.title}</td>
                <td>{job.location}</td>
                <td>{job.level}</td>
                <td>{job.details}</td>
                <td>{job.postedDate}</td>
                <td align="center">
                  <NewJobModal
                    create={false}
                    job={job}
                    resetState={this.props.resetState}
                  />
                  &nbsp;&nbsp;
                  <ConfirmRemovalModal
                    pk={job.pk}
                    resetState={this.props.resetState}
                  />
                </td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    );
  }
}

export default JobList;
