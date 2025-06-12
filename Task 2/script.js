const addNoteBtn = document.getElementById('addNoteBtn');
const notesContainer = document.getElementById('note');

function createNote() {
  const note = document.createElement('textarea');
  note.className = 'note';
  note.placeholder = 'Empty Note';

  note.addEventListener('dblclick', () => {
    const confirmDelete = confirm('Delete this note?');
    if (confirmDelete) {
      notesContainer.removeChild(note);
    }
  });

  notesContainer.appendChild(note);
}

addNoteBtn.addEventListener('click', createNote);