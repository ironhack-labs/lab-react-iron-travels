
function Label({ text, backgroundColor, fontColor, click, width, height }) {
    return (
        <div 
            className='align-content-center text-center rounded ps-2 pe-2 fw-semibold'
            style={{backgroundColor: backgroundColor, color: fontColor, width: width, height: height}}
            onClick={click}
        >
            {text}
        </div>
    );
}

export default Label;