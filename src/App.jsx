import { useState, useRef } from 'react';
import LoveNoteForm from "./components/LoveNoteForm";
import LoveNotePreview from "./components/LoveNotePreview";

const App = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const cardRef = useRef(null);

    return (
        <div>
            <LoveNoteForm
                setName={setName}
                setMessage={setMessage}
                cardRef={cardRef}
            />
            {name ? <LoveNotePreview 
                name={name}
                message={message}
                cardRef={cardRef}
            /> : null}
        </div>
    )
};

export default App;