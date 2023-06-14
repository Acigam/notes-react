import React from "react";
import { getInitialData } from "../utils";
import NoteHeader from "./NoteHeader";
import NoteBody from "./NoteBody";

class NoteApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: getInitialData(),
      searchKeyword: "",
    };

    this.onDeleteHandler = this.onDeleteHandler.bind(this);
    this.onAddNoteHandler = this.onAddNoteHandler.bind(this);
    this.onSearchNoteHandler = this.onSearchNoteHandler.bind(this);
    this.onArchiveHandler = this.onArchiveHandler.bind(this);
  }

  onDeleteHandler(id) {
    const notes = this.state.notes.filter((note) => note.id !== id);
    this.setState({ notes });
  }

  onArchiveHandler(id) {
    const archivedNotes = this.state.notes.filter((note) => note.id === id).map((note) => (note.archived = !note.archived));
    this.setState({ archivedNotes });
    console.log({ archivedNotes });
  }

  onAddNoteHandler({ title, body }) {
    this.setState((prevState) => {
      return {
        notes: [
          ...prevState.notes,
          {
            id: +new Date(),
            title,
            body,
            createdAt: new Date().toISOString(),
            archived: false,
          },
        ],
      };
    });
  }

  onSearchNoteHandler(queryInput) {
    this.setState({
      searchKeyword: queryInput,
    });
  }

  render() {
    //search filter
    const filteredNotes = this.state.notes.filter((note) =>
      note.title.toLowerCase().includes(this.state.searchKeyword.toLowerCase())
    );

    const activeNotes = filteredNotes.filter((note) => note.archived === false);
    const archivedNotes = filteredNotes.filter((note) => note.archived === true);

    return (
      <>
        <NoteHeader onSearch={this.onSearchNoteHandler} />
        <NoteBody
          activeNotes={activeNotes}
          addNote={this.onAddNoteHandler}
          onDelete={this.onDeleteHandler}
          onArchive={this.onArchiveHandler}
          archivedNotes={archivedNotes}
        />
      </>
    );
  }
}

export default NoteApp;
