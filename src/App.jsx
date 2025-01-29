import { useState, useRef } from 'react';
import LoveNoteForm from "./components/LoveNoteForm";
import LoveNotePreview from "./components/LoveNotePreview";

const App = () => {
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')

    const cardRef = useRef(null);

    const [image, setImage] = useState(null);

    return (
        <div>
            <LoveNoteForm
                setName={setName}
                setMessage={setMessage}
                image={image}
                setImage={setImage}
                cardRef={cardRef}
            />
            {name ? <LoveNotePreview 
                name={name}
                message={message}
                image={image}
                cardRef={cardRef}
            /> : null}
        </div>
    )
};

export default App;