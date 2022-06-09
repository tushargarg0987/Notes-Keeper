import React from "react";

function CreateArea(props) {
  return (
    <div>
      <form>
        <input
          id="inputTitle"
          value={props.valueTitle}
          onChange={props.handleChange}
          name="title"
          placeholder="Title"
        />
        <textarea
          id="inputContent"
          onChange={props.handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={props.valueContent}
        />
        <button onClick={props.handleAddButton}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;
