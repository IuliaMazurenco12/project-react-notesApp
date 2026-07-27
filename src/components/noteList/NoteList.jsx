import { useSelector } from "react-redux";
import NoteItem from "../noteItem/NoteItem";

function NoteList() {
  const notes = useSelector((state) => state.notes);

  return (
    <>
      <h1>notes: </h1>
      <ul>
        {notes.length === 0 ? (
          <p>Empty list</p>
        ) : (
          notes.map((note) => <NoteItem key={note.id} note={note} />)
        )}
      </ul>
    </>
  );
}

export default NoteList;