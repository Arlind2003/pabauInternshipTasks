import "../CSS/Option.css"
export default function Option({image, text, nextPage}){
    return(
        <div className="option">
            <div className="option-content-container">
              <img className="option-image" src={image}/>
              <h4 className="option-text">{text}</h4>
            </div>
            <div className="arrow" onClick={nextPage}></div>
        </div>
    );
}