


export function NotePreview({ note }) {
    const { type, info } = note
    let content

    function displayCheckBoxPreview() {
    }

    if (type === 'NoteTxt') {
        content = (
            <div className="text note-preview" style={note.style}>
                <h4 className="not-title" >{info.title}</h4>
                {info.txt}
            </div>
        )
    } else if (type === 'NoteImg') {
        content = (
            <div className="photo note-preview" style={note.style}>
                <img src={info.url} alt={info.title} />
                <h4 className="img-title">{info.title}</h4>
            </div>
        )
    } else if (type === 'NoteTodos') {
        content = (
            <div className="todo-note-preview" style={note.style}>
                <h4 className="note-todo-title">{info.title}</h4>
                <ul className="ul-todo">
                    {info.todos.map((todo, idx) => (
                        <li key={idx}>
                            <span className="note-todo">
                                <input
                                    type="checkbox"
                                    checked={!!todo.doneAt}
                                    onChange={() => displayCheckBoxPreview()}
                                />
                                <span>{todo.txt}
                                </span> </span>
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else if (type === 'NoteVideo') {
        content = (
            <div className="video note-preview" style={note.style}>
                <h4>{info.title}</h4>
                <iframe
                    className="video"
                    height="235"
                    src={info.url.replace('watch?v=', 'embed/')}
                    frameBorder="0"
                    allowFullScreen
                ></iframe>
            </div>
        )
    }
    return (
        <article className="note-preview">
            {content}
        </article>
    )
}



