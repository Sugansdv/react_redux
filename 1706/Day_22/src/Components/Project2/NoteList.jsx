import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteNote } from "../../redux/actions/noteActions";

const NoteList = () => {
  const notes = useSelector((state) => state.notes.notes);
  const dispatch = useDispatch();

  return (
    <div>
      <h5>Your Notes</h5>
      {notes.length === 0 && <p>No notes added yet.</p>}
      <ul className="list-group">
        {notes.map((note) => (
          <li key={note.id} className="list-group-item d-flex justify-content-between align-items-center">
            {note.content}
            <button
              className="btn btn-sm btn-danger"
              onClick={() => dispatch(deleteNote(note.id))}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NoteList;
