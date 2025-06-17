import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../redux/actions/noteActions";

const AddNote = () => {
  const [note, setNote] = useState("");
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (note.trim()) {
      dispatch(addNote({ content: note }));
      setNote("");
    }
  };

  return (
    <div className="mb-4">
      <input
        type="text"
        value={note}
        placeholder="Enter note..."
        className="form-control mb-2"
        onChange={(e) => setNote(e.target.value)}
      />
      <button className="btn btn-primary" onClick={handleAdd}>Add Note</button>
    </div>
  );
};

export default AddNote;
