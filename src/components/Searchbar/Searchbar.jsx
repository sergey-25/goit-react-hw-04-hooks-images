import { useState } from "react";
import PropTypes from "prop-types";
import { Header, Form, Button, Input } from "./Searchbar.styled";

export function Searchbar({ onSubmit, toast }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value.toLowerCase());
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (inputValue.trim() === "") {
      toast.error("Enter a keyword to search images");
    }

    onSubmit(inputValue);
    setInputValue("");
  };

  return (
    <Header>
      <Form onSubmit={handleSubmit}>
        <Button type="submit" />
        <Input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          autocomplete="off"
          autofocus
          placeholder="Search images and photos"
        />
      </Form>
    </Header>
  );
}

Searchbar.propTypes = {
  toast: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired,
};