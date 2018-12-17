import React from "react";


const NoteListEmptyItem = () => {
    return (
        <div className="item">
            <p  className="item__status-message">
                No Notes Found.
            </p>
        </div>
    );
}

export default NoteListEmptyItem;