import PropTypes from "prop-types";
import { Wrapper, Message } from "./Notification.styled";

export const Notification = ({ text }) => {
  return (
    <Wrapper>
      <Message>{text}</Message>
    </Wrapper>
  );
};

Notification.defaultProps = {
  text: "Something wrong! Request error!",
};

Notification.propTypes = {
  text: PropTypes.string,
};