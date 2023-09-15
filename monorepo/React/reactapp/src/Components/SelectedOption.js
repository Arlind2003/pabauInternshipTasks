import "../CSS/SelectedOption.css"
export default function SelectedOption({name, previousPage}){
    return(
        <div className="selected-option-container">
            <div className="back-arrow" onClick={previousPage}></div>
            <div className="">
            <h4>{name}</h4>
            </div>
        </div>
    );
}