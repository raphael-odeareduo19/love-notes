import html2canvas from "html2canvas";

const LoveNotePreview = ({name, message, image, cardRef}) => {

    function downloadScreenshot() {
        const cardEl = cardRef;
        html2canvas(cardEl.current).then(canvas => {
            const link = document.createElement("a")
            link.download = 'valentinesNote.png';
            link.href = canvas.toDataURL();
            link.click();
        })
    }

    return (
        <section className="w-full px-8 flex justify-center gap-4">
            <div
                ref={cardRef}
                className="card p-8 w-[400px] bg-[#fdfffc] flex flex-col items-center gap-6 text-center border-4 border-[#ff4d6d] rounded-md shadow-xl "
                >
                <h1
                    className="text-4xl font-black mb-2"
                >{name ? `Dear ${name}` : null}</h1>
                <div className="image-container rounded-full border-1 border-[#ff4d6d] overflow-hidden w-[160px] h-[160px]">
                    <img id="preview" src={image}/>
                </div>
                <p
                    className="text-xl font-semibold w-full"
                >{message}</p>

            </div>
            <button
                className="py-4 text-white text-xl font-black bg-[#ff4d6d] rounded-md shadow-md cursor-pointer hover:opacity-80"
                onClick={downloadScreenshot}
                >Download &darr;</button>
        </section>
    )
};

export default LoveNotePreview;