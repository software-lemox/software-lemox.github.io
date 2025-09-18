import React from "react";

export default function PopupMessage({ message, className = "popMessageSucceeded", onClose }) {
  if (!message) return null; // don't render if there's no message

  return (
    <div>
      <div className={className}>
        <span className="popMessageMessage">{message}</span>
        <button className="popMessageXButton" onClick={onClose}>✕</button>
      </div>
    </div>
  );
}
