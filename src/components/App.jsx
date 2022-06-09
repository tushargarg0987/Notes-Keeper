import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, addNotes] = useState([
    // {
    //   title: "",
    //   content: ""
    // }
  ]);

  const [newTitle, setTitle] = useState("");
  const [newContent, setContent] = useState("");

  function handleChange(event) {
    const { value, name } = event.target;

    if (name === "title") {
      setTitle(value);
    } else if (name === "content") {
      setContent(value);
    }
  }

  function handleAddButton(event) {
    event.preventDefault();
    addNotes((prevNotes) => {
      return [...prevNotes, { title: newTitle, content: newContent }];
    });

    setTitle("");
    setContent("");
    document.getElementById("inputTitle").value = "";
    document.getElementById("inputContent").value = "";
  }

  function deleteNote(id) {
    addNotes((prevNotes) => {
      return prevNotes.filter((item, index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        handleChange={handleChange}
        handleAddButton={handleAddButton}
      />
      {notes.map((note, index) => (
        <Note
          key={index}
          id={index}
          title={note.title}
          content={note.content}
          deleteNote={deleteNote}
          valueTitle={newTitle}
          valueContent={newContent}
        />
      ))}

      <Footer />
    </div>
  );
}

export default App;
