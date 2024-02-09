import "./Overlay.css";

export function Overlay({ isOpen, onClose, children }) {
  return (
    <>
      {isOpen && (
        <div className="overlay">
          <span className="overlay__background" onClick={onClose} />
          <div className="overlay__container">
          <span className="overlay__controls">
              <button
                className="overlay__close"
                type="button"
                onClick={onClose}
              />
            </span>
            {children}
          </div>
        </div>
      )}
    </>
  );
}

export default Overlay;