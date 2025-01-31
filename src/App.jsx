import { useState, useRef } from 'react';
import LoveNoteForm from "./components/LoveNoteForm";
import LoveNotePreview from "./components/LoveNotePreview";

const App = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [bgColor, setBgColor] = useState('#fff');
    const [textColor, setTextColor] = useState('#000');

    const cardRef = useRef(null);

    return (
        <div>
            <LoveNoteForm
                name={name}
                message={message}
                textColor={textColor}
                setTextColor={setTextColor}
                bgColor={bgColor}
                setBgColor={setBgColor}
                setName={setName}
                setMessage={setMessage}
                cardRef={cardRef}
            />
            {name ? <LoveNotePreview 
                name={name}
                message={message}
                textColor={textColor}
                bgColor={bgColor}
                cardRef={cardRef}
            /> : null}
        </div>
    )
};

export default App;