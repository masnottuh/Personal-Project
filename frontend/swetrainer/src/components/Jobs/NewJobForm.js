import React from "react";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";

import axios from "axios";

import { API_URL } from "../../constants";

class NewJobForm extends React.Component {
  state = {
    pk: 0,
    title: "",
    location: "",
    level: "",
    details: ""
  };

  componentDidMount() {
    if (this.props.job) {
      const { pk, title, location, level, details, postedDate } = this.props.job;
      this.setState({ pk, title, location, level, details, postedDate });
    }
  }

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  createJob = e => {
    e.preventDefault();
    axios.post(API_URL, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  editJob = e => {
    e.preventDefault();
    axios.put(API_URL + this.state.pk, this.state).then(() => {
      this.props.resetState();
      this.props.toggle();
    });
  };

  defaultIfEmpty = value => {
    return value === "" ? "" : value;
  };

  render() {
    return (
      <Form onSubmit={this.props.job ? this.editJob : this.createJob}>
        <FormGroup>
          <Label for="title">Title:</Label>
          <Input
            type="text"
            name="title"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.title)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="location">Location:</Label>
          <Input
            type="text"
            name="location"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.location)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="level">Experience Level:</Label>
          <Input
            type="text"
            name="level"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.level)}
          />
        </FormGroup>
        <FormGroup>
          <Label for="details">Details:</Label>
          <Input
            type="text"
            name="details"
            onChange={this.onChange}
            value={this.defaultIfEmpty(this.state.details)}
          />
        </FormGroup>
        <Button>Send</Button>
      </Form>
    );
  }
}

export default NewJobForm;