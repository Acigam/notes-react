import React from "react";
import EmptyMessage from "./EmptyMessage";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";

function NoteBody({ activeNotes, addNote, onDelete, onArchive, archivedNotes }) {
  return (
    <div className="note-app__body">
      <NoteInput addNote={addNote} />
      <h2>Catatan Aktif</h2>
      {activeNotes.length > 0 ? (
        <NoteList notes={activeNotes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <EmptyMessage />
      )}
      <h2>Arsip</h2>
      {archivedNotes.length > 0 ? (
        <NoteList notes={archivedNotes} onDelete={onDelete} onArchive={onArchive} />
      ) : (
        <EmptyMessage />
      )}
    </div>
  );
}

export default NoteBody;
