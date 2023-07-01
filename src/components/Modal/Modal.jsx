import "./Modal.css";


const Modal = ({ openModal, content, onCancel, onYes,YesShow=true }) => {
  // const [ShowYes, setShowYes] = useState(quantity);

  return (
    <>
      {openModal && (
        <div className="container-modal">
          <div className="wrap-modal">
            <button onClick={onCancel} className="modal-btn">
              <i class="fa fa-close"></i>
            </button>
            <p className="modal-desc">{content}</p>
            <div className="modal-diff-btn">
              <button onClick={onCancel} className="btn-action cancel">
                Cancel
              </button>
              {YesShow ? (<button onClick={onYes} className="btn-action yes">
                Yes
              </button> ):<></>}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;