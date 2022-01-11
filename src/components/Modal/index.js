import "./styles.css";

// function that takes boolean as param to conditionally display popup
export const Modal = ({ setPopUp }) => {
  return (
    <div className="PopUp">
      {/* x close window */}
      <button className="popup-x" onClick={() => setPopUp(false)}>
        X
      </button>
      <h1>OLÁ MODAL</h1>
    </div>
  );
};
