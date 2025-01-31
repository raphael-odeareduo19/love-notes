const LoveNoteForm = ({name, message, bgColor, setBgColor, textColor, setTextColor, setName, setMessage, cardRef}) => {
    
    function handleCardScreenshot() {
        const cardEl = cardRef;
        cardEl.current.scrollIntoView({behavior: 'smooth'})
    }

    function handleBgColor(e) {
        setBgColor(e.target.value)
    }

    function handleTextColor(e) {
        setTextColor(e.target.value)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const formEl = e.target;
        formEl.reset();

        handleCardScreenshot()
    }

    return (
        <section className="flex flex-col gap-20">
            <h1 className="font-black text-6xl text-[#ff4d6d] text-center">Love Notes</h1>
            <div className="w-full px-8 flex justify-center items-center">
                <form 
                    onSubmit={handleSubmit}
                    className="border-2 border-[#ff4d6d] rounded-md text-center p-6 shadow-lg flex flex-col grow gap-12 bg-white max-w-lg"
                >
                    <div className="flex flex-col gap-2">
                        <label 
                            className="text-2xl font-extrabold"
                            htmlFor="firstName"
                        >
                                Who's the special person?
                        </label>
                        <input 
                            className="border-1 p-2 rounded-md"
                            id='firstName'
                            placeholder="Enter their name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="flex flex-col gap-2">
                        <label 
                            className="text-2xl font-extrabold"
                            htmlFor="loveMessage">
                                Craft your message
                        </label>
                        <textarea
                            placeholder="Write a short message..."
                            className="border-1 p-2 rounded-md h-20"
                            id='loveMessage'
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        ></textarea>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p
                        className="text-2xl font-extrabold"
                        >Choose colors</p>
                        <div
                            className="flex items-center justify-between"
                        >
                            <label htmlFor="bgColor"
                                className="font-bold text-lg"
                            >Background Color: </label>
                            <input 
                                id="bgColor"
                                className="size-12 rounded-md cursor-pointer"
                                type="color"
                                defaultValue={'#fff'}
                                value={bgColor}
                                onChange={handleBgColor}
                            />
                        </div>
                        <div
                            className="flex items-center justify-between"
                        >
                            <label htmlFor="textColor"
                            className="font-bold text-lg"
                            >Text Color: </label>
                            <input 
                                id="textColor"
                                className="size-12 rounded-md cursor-pointer"
                                type="color"
                                value={textColor}
                                onChange={handleTextColor}
                            />
                        </div>
                    </div>
                    <button
                        className="love-btn bg-[#ff4d6d] p-4 rounded-md text-2xl text-white font-bold cursor-pointer shadow-md hover:opacity-80"
                    >
                        Express Love! 
                    </button>
                </form>
            </div>
        </section>
    )
};

export default LoveNoteForm;