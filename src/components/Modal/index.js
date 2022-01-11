// styling
import './styles.css';

export const Modal = props => {
    // function that takes boolean as param to conditionally display popup
    const { setPopUp } = props 

    return (
        <div className="PopUp">
            {/* x close window */}
            <button className="popup-x" onClick={()=> setPopUp(false)} >X</button>
            <h1>OLÁ MODAL</h1>
        </div>
    );
}

