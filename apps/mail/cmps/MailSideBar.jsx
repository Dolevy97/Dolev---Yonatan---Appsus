const { useState, useRef } = React

export function MailSideBar({ onChangeFolder, currFolder, isAdding, setIsAdding }) {

    const sideRef = useRef()

    function onCompose({ target }) {
        setIsAdding(!isAdding)
    }

    return (
        <section ref={sideRef} className="side-bar">
            <section onClick={onCompose} className="compose-container">
                <i className="material-symbols-outlined edit-icon">edit</i>
            </section>
            <div className="compose-title">Compose</div>

            <section className="folder-titles">
                <div title="Inbox" onClick={() => { onChangeFolder({ status: 'inbox' }) }} className="title">Inbox</div>
                <div title="Starred" onClick={() => { onChangeFolder({ status: 'starred' }) }} className="title">Starred</div>
                <div title="Sent" onClick={() => { onChangeFolder({ status: 'sent' }) }} className="title">Sent</div>
                <div title="Drafts" onClick={() => { onChangeFolder({ status: 'drafts' }) }} className="title">Drafts</div>
                <div title="Trash" onClick={() => { onChangeFolder({ status: 'trash' }) }} className="title">Trash </div>
            </section>
            <span title="Inbox" onClick={() => { onChangeFolder({ status: 'inbox' }) }} className={`span-icon material-symbols-outlined ${currFolder === 'inbox' ? 'active' : ''}`}>inbox</span>
            <span title="Starred" onClick={() => { onChangeFolder({ status: 'starred' }) }} className={`span-icon material-symbols-outlined ${currFolder === 'starred' ? 'active' : ''}`}>star</span>
            <span title="Sent" onClick={() => { onChangeFolder({ status: 'sent' }) }} className={`span-icon material-symbols-outlined ${currFolder === 'sent' ? 'active' : ''}`}>send</span>
            <span title="Drafts" onClick={() => { onChangeFolder({ status: 'drafts' }) }} className={`span-icon material-symbols-outlined ${currFolder === 'drafts' ? 'active' : ''}`}>draft</span>
            <span title="Trash" onClick={() => { onChangeFolder({ status: 'trash' }) }} className={`span-icon material-symbols-outlined ${currFolder === 'trash' ? 'active' : ''}`}>delete</span>
        </section>
    )
}

