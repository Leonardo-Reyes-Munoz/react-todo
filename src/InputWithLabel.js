import React from 'react';

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
        id="inputField" // is and "id" attribute needed here?
        name="title"
        value={props.todoTitle}
        onChange={props.handleTitleChange}
        required
        ref={inputRef}
      />
    </>
  );
};

export default InputWithLabel;
