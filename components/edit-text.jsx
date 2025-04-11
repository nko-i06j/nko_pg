import React, { useState } from "react";

const EditText = ({ initialText = "Cliquez pour éditer", onSave }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(initialText);

  const handleBlur = () => {
    setIsEditing(false);
    if (onSave) onSave(text);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setIsEditing(false);
      if (onSave) onSave(text);
    }
  };

  return (
    <div>
      {isEditing ? (
        <input
          type="text"
          value={text}
          autoFocus
          onChange={(e) => setText(e.target.value)}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          className="edit-input"
        />
      ) : (
        <span onClick={() => setIsEditing(true)} className="edit-text">
          {text}
        </span>
      )}
    </div>
  );
};

export default EditText;
