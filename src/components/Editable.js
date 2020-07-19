import React from "react";
import EditableLabel from "react-inline-editing";

const Editable = ({ text, handleTextEdited }) => {
  const handleFocus = (text) => {
    console.log("Focused with text: " + text);
  };

  const handleFocusOut = (text) => {
    handleTextEdited(text);
    console.log("Left editor with text: " + text);
  };
  return (
    <EditableLabel
      labelClassName="editable-label"
      text={text}
      inputPlaceHolder="EMPTY"
      onFocus={handleFocus}
      onFocusOut={handleFocusOut}
    />
  );
};

export default Editable;
