function NoteItem({ note }) {
  return (
    <li>
      <span>{note.id} </span>
      <h4>{note.title}</h4>
      <p>{note.text}</p>
    </li>
  );
}

export default NoteItem;