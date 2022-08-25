import { ReactComponent as Close } from '../assets/circle-xmark-solid.svg';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
export default function Modal() {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <div className="modal">
      {isClicked && <Navigate to="/employeelist" replace="true" />}
      <div className="modal-content">
        <span className="modal-content-span">Employee Created!</span>
        <Close className="modal-content-close" onClick={() => setIsClicked(true)} />
      </div>
    </div>
  );
}
