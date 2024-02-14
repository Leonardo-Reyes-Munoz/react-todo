import React from 'react';
import PropTypes from 'prop-types';

const InputWithLabel = (props) => {
  const inputRef = React.useRef();

  React.useEffect(() => {
    inputRef.current.focus();
  });

  return (
    <>
      <label htmlFor="inputField">{props.children}</label>
      <input
        type="text"
        id="inputField"
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        required
        ref={inputRef}
      />
    </>
  );
};

InputWithLabel.propTypes = {
  children: PropTypes.element,
  todoTitle: PropTypes.string.isRequired,
  handleTitleChange: PropTypes.func.isRequired,
};

export default InputWithLabel;
