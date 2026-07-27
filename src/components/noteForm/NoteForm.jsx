import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNoteAction } from "../redux/actions/notesAction";

function NoteForm() {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    dispatch(addNoteAction({ id: Math.random(), title, text }));
    setTitle("");
    setText("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="title" value={title} onChange={(e) => setTitle(e.target.value)} />
      <input type="text" placeholder="text" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit">add note</button>
    </form>
  );
}

export default NoteForm