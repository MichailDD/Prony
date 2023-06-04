import s from "./SuccessPopup.module.css"
const SuccessPopup = ({ onClose }) => {
  return (
    <div>
      <h2>Task Added Successfully!</h2>
      <button onClick={onClose}>Close</button>
    </div>
  );
};

export default SuccessPopup;
