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
        <section className="pt-36 px-8 flex flex-col items-center gap-8">
            <div
                ref={cardRef}
                className="w-sm card p-8 bg-[#fdfffc] flex flex-col items-center gap-6 text-center border-4 border-[#ff4d6d] rounded-md shadow-xl "
                >
                <h1
                    className="text-4xl font-black mb-2"
                >{name ? `Dear ${name}` : null}💝</h1>
                {image ? <div className="image-container rounded-full border-1 border-[#ff4d6d] overflow-hidden w-[170px] h-[170px]">
                    <img id="preview" src={image} alt="special-person"/>
                </div> : null}
                <p
                    className="text-xl font-semibold break-words max-w-full"
                >{message}</p>

            </div>
            <button
                className="py-4 px-8 text-white text-2xl font-extrabold bg-[#ff4d6d] rounded-md shadow-md cursor-pointer hover:opacity-80"
                onClick={downloadScreenshot}
                >Download &darr;</button>
        </section>
    )
};

export default LoveNotePreview;