import { Component } from "react";
import PropTypes from "prop-types";
import { Header, Form, Button, Input } from "./Searchbar.styled";

export class Searchbar extends Component {
  static propTypes = {
    toast: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
  };

  state = {
    value: "",
  };

  handleInputChange = (event) => {
    const value = event.target.value;

    this.setState({ value: value.toLowerCase() });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    const { value } = this.state;
    const { toast, onSubmit } = this.props;

    if (value.trim() === "") {
      toast.error("Enter a keyword to search images");
    }

    onSubmit(value);
    this.resetForm();
  };

  resetForm = () => {
    this.setState({ value: "" });
  };

  render() {
    const { value } = this.state;

    return (
      <Header>
        <Form onSubmit={this.handleSubmit}>
          <Button type="submit" />
          <Input
            type="text"
            value={value}
            onChange={this.handleInputChange}
            autocomplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </Form>
      </Header>
    );
  }
}